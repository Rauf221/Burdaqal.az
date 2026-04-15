'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const LOCALE_LABELS = {
	az: 'AZ',
	en: 'EN',
	ru: 'RU',
}

/** @param {{ variant?: 'default' | 'inverse' | 'mobile' }} props */
export default function LocaleSwitcher({ variant = 'default' }) {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const t = useTranslations('navigation')
	const [open, setOpen] = useState(false)
	const rootRef = useRef(null)
	const listId = useId()

	useEffect(() => {
		if (!open) return
		const onDoc = (e) => {
			if (rootRef.current && !rootRef.current.contains(e.target)) {
				setOpen(false)
			}
		}
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(false)
		}
		document.addEventListener('mousedown', onDoc)
		document.addEventListener('keydown', onKey)
		return () => {
			document.removeEventListener('mousedown', onDoc)
			document.removeEventListener('keydown', onKey)
		}
	}, [open])

	const changeLocale = (next) => {
		if (next && next !== locale) {
			router.replace(pathname, { locale: next })
		}
		setOpen(false)
	}

	if (variant === 'mobile') {
		return (
			<div className="locale-switcher locale-switcher--mobile" ref={rootRef}>
				<div className="locale-switcher-mobile__label">{t('language')}</div>
				<div className="locale-switcher-mobile__pills" role="group" aria-label={t('language')}>
					{routing.locales.map((loc) => (
						<button
							key={loc}
							type="button"
							className={`locale-switcher-mobile__pill ${loc === locale ? 'is-active' : ''}`}
							onClick={() => changeLocale(loc)}
						>
							{LOCALE_LABELS[loc] ?? loc.toUpperCase()}
						</button>
					))}
				</div>
			</div>
		)
	}

	const mod = variant === 'inverse' ? 'locale-switcher--inverse' : 'locale-switcher--default'

	return (
		<div className={`locale-switcher ${mod}`} ref={rootRef}>
			<button
				type="button"
				className="locale-switcher__trigger"
				aria-label={t('language')}
				aria-expanded={open}
				aria-haspopup="listbox"
				aria-controls={listId}
				onClick={() => setOpen((v) => !v)}
			>
				<span className="locale-switcher__code">{LOCALE_LABELS[locale] ?? locale.toUpperCase()}</span>
				<span className="locale-switcher__chev" aria-hidden>
					<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</span>
			</button>
			{open ? (
				<ul id={listId} className="locale-switcher__menu" role="listbox" aria-label={t('language')}>
					{routing.locales.map((loc) => (
						<li key={loc} role="option" aria-selected={loc === locale}>
							<button
								type="button"
								className={`locale-switcher__option ${loc === locale ? 'is-active' : ''}`}
								onClick={() => changeLocale(loc)}
							>
								{LOCALE_LABELS[loc] ?? loc.toUpperCase()}
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}
