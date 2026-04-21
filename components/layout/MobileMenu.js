'use client'

import HeaderUserNav from '@/components/elements/HeaderUserNav'
import LocaleSwitcher from '@/components/elements/LocaleSwitcher'
import { useSiteBranding } from '@/providers/SiteBrandingProvider'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu, handleLogin }) {
	const pathname = usePathname()
	const t = useTranslations('navigation')
	const branding = useSiteBranding()
	const menuLogo = branding.logoOnLightBg || branding.logoOnDarkBg
	const [currentMenuItem, setCurrentMenuItem] = useState('')

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => (currentMenuItem === path ? 'current' : '')
	const checkParentActive = (paths) =>
		paths.some((path) => currentMenuItem.startsWith(path)) ? 'current' : ''

	return (
		<>
			<div className="mobile-menu">
				<div className="menu-backdrop" onClick={handleMobileMenu} />
				<nav className="menu-box">
					<div className="nav-logo">
						<Link href="/" rel="home" className="site-logo__link">
							{menuLogo ? (
								<img
									className="site-logo__img"
									src={menuLogo}
									alt=""
									width={174}
									height={44}
								/>
							) : (
								<img src="/images/logo/logo.svg" alt="" width={174} height={44} />
							)}
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
										className={`${checkParentActive(['/elanlar'])}`}
									>
										<Link href="/elanlar">{t('property')}</Link>
									</li>
									<li className={`${checkCurrentMenuItem('/about')}`}>
										<Link href="/about">{t('aboutUs')}</Link>
									</li>
									<li className={`${checkParentActive(['/bloglar'])}`}>
										<Link href="/bloglar">{t('blog')}</Link>
									</li>
									<li className={`${checkCurrentMenuItem('/contact')}`}>
										<Link href="/contact">{t('contact')}</Link>
									</li>
								</ul>
								<LocaleSwitcher variant="mobile" />
								{typeof handleLogin === 'function' ? (
									<HeaderUserNav
										handleLogin={handleLogin}
										placement="mobile"
										onAfterNavigate={handleMobileMenu}
									/>
								) : null}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
