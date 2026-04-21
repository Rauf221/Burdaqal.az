import { extractSettingsFromApiPayload } from '@/lib/media-url'
import { queryOptions } from '@tanstack/react-query'
import { getMetaTagList, getSettings } from './api'

/**
 * Sabit referans — hər renderdə yeni obyekt yaratmır (useQuery üçün).
 * `initialData` queryFn cavabı formasında olmalıdır: `{ data: SiteSettingsData }`.
 */
export const settingsQueryOptions = queryOptions({
	queryKey: ['settings'],
	queryFn: () => getSettings(),
	staleTime: 5 * 60 * 1000,
	select: (raw) => extractSettingsFromApiPayload(raw) ?? null,
})

const getMetaTagListQuery = (locale?: string) => {
	return queryOptions({
		queryKey: ['meta-tag', locale ?? 'default'],
		queryFn: () => getMetaTagList(locale),
		staleTime: 5 * 60 * 1000,
	})
}

export { getMetaTagListQuery }
