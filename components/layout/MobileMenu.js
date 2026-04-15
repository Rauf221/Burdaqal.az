'use client'

import LocaleSwitcher from '@/components/elements/LocaleSwitcher'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()
	const t = useTranslations('navigation')
	const [currentMenuItem, setCurrentMenuItem] = useState('')

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => (currentMenuItem === path ? 'current' : '')
	const checkParentActive = (paths) =>
		paths.some((path) => currentMenuItem.startsWith(path)) ? 'current' : ''

	const [isAccordion, setIsAccordion] = useState(null)

	const handleAccordion = (key) => {
		setIsAccordion((prevState) => (prevState === key ? null : key))
	}

	return (
		<>
			<div className="mobile-menu">
				<div className="menu-backdrop" onClick={handleMobileMenu} />
				<nav className="menu-box">
					<div className="nav-logo">
						<Link href="/">
							<img src="/images/logo/logo.svg" alt="nav-logo" width={174} height={44} />
						</Link>
					</div>
					<div className="bottom-canvas">
						<div className="menu-outer">
							<div
								className="navbar-collapse collapse show clearfix"
								id="navbarSupportedContent"
							>
								<ul className="navigation clearfix">
									<li className={`${checkCurrentMenuItem('/')}`}>
										<Link href="/">{t('home')}</Link>
									</li>
									<li
										className={`${checkParentActive(['/property-grid-v2'])}`}
									>
										<Link href="/property-grid-v2">{t('property')}</Link>
									</li>
									<li className={`${checkCurrentMenuItem('/about')}`}>
										<Link href="/about">{t('aboutUs')}</Link>
									</li>
									<li
										className={`dropdown2 ${isAccordion === 2 ? 'open' : ''} ${checkParentActive([
											'/dashboard',
										])}`}
									>
										<Link href="#">{t('pages')}</Link>
										<ul style={{ display: `${isAccordion === 2 ? 'block' : 'none'}` }}>
											<li className={`${checkCurrentMenuItem('/dashboard')}`}>
												<Link href="/dashboard">{t('dashboard')}</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(2)} />
									</li>
									<li className={`${checkParentActive(['/blog-list-v1'])}`}>
										<Link href="/blog-list-v1">{t('blog')}</Link>
									</li>
									<li className={`${checkCurrentMenuItem('/contact')}`}>
										<Link href="/contact">{t('contact')}</Link>
									</li>
								</ul>
								<LocaleSwitcher variant="mobile" />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
