'use client'

/**
 * SiteBrandingProvider — GET /settings ilə loqolar.
 * SSR-dən gələn `initialSiteSettings` ilk paint-də göstərilir; client sorğusu yeniləyir.
 */

import { resolveMediaUrl } from '@/lib/media-url'
import { useApiBaseUrl } from '@/providers/QueryProvider'
import { settingsQueryOptions } from '@/services/client/settings'
import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useMemo } from 'react'

/** @typedef {{ logoOnDarkBg: string; logoOnLightBg: string; logoFooter: string }} SiteBrandingValue */

const EMPTY = { logoOnDarkBg: '', logoOnLightBg: '', logoFooter: '' }

/** @type {import('react').Context<SiteBrandingValue>} */
const SiteBrandingContext = createContext(EMPTY)

/** @returns {SiteBrandingValue} */
export function useSiteBranding() {
	return useContext(SiteBrandingContext)
}

/**
 * @param {{
 *   children: import('react').ReactNode
 *   initialSiteSettings?: import('@/types').SiteSettingsData | null
 * }} props
 */
export function SiteBrandingProvider({ children, initialSiteSettings = null }) {
	const apiBase = useApiBaseUrl()
	const initialData = useMemo(
		() => (initialSiteSettings ? { data: initialSiteSettings } : undefined),
		[initialSiteSettings],
	)

	const { data: loose } = useQuery({
		...settingsQueryOptions,
		initialData,
	})

	const value = useMemo(() => {
		const fromServer =
			initialSiteSettings &&
			(initialSiteSettings.logo || initialSiteSettings.dark_logo || initialSiteSettings.favicon)
				? {
						logo: initialSiteSettings.logo,
						dark_logo: initialSiteSettings.dark_logo,
						favicon: initialSiteSettings.favicon,
					}
				: null
		const raw = loose ?? fromServer
		if (!raw) return EMPTY
		const logo = resolveMediaUrl(apiBase, raw.logo)
		const dark = resolveMediaUrl(apiBase, raw.dark_logo)
		return {
			logoOnDarkBg: logo || dark || '',
			logoOnLightBg: dark || logo || '',
			logoFooter: dark || logo || '',
		}
	}, [loose, apiBase, initialSiteSettings])

	return <SiteBrandingContext.Provider value={value}>{children}</SiteBrandingContext.Provider>
}
