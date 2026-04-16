'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const t = useTranslations('navigation')
	const [currentMenuItem, setCurrentMenuItem] = useState('')

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => (currentMenuItem === path ? 'current' : '')
	const checkParentActive = (paths) =>
		paths.some((path) => currentMenuItem.startsWith(path)) ? 'current' : ''

	return (
		<>
			<ul className="navigation">
				<li>
					<Link href="/" className={`item ${checkCurrentMenuItem('/')}`}>
						{t('home')}
					</Link>
				</li>
				<li>
					<Link
						href="/elanlar"
						className={`item ${checkParentActive(['/elanlar'])}`}
					>
						{t('property')}
					</Link>
				</li>
				<li>
					<Link href="/about" className={`item ${checkCurrentMenuItem('/about')}`}>
						{t('aboutUs')}
					</Link>
				</li>
				<li>
					<Link
						href="/bloglar"
						className={`item ${checkParentActive(['/bloglar'])}`}
					>
						{t('blog')}
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={`item ${checkCurrentMenuItem('/contact')}`}
					>
						{t('contact')}
					</Link>
				</li>
			</ul>
		</>
	)
}


