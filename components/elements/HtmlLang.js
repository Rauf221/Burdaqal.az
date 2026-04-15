'use client'

import { useEffect } from 'react'

/** Keeps <html lang> in sync with the active next-intl locale (root layout owns <html>). */
export default function HtmlLang({ locale }) {
	useEffect(() => {
		document.documentElement.lang = locale
	}, [locale])
	return null
}
