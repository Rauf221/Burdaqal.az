'use client'

import { Link } from '@/i18n/navigation'
import HeaderUserNav from '@/components/elements/HeaderUserNav'
import LocaleSwitcher from '@/components/elements/LocaleSwitcher'
import { useSiteBranding } from '@/providers/SiteBrandingProvider'
import { useTranslations } from 'next-intl'
import Menu from '../Menu'

export default function Header12({ scroll, isMobileMenu, handleMobileMenu, isLogin, handleLogin, isRegister, handleRegister }) {
	const t = useTranslations('navigation')
	const branding = useSiteBranding()
	const forDesktop = branding.logoOnLightBg || branding.logoOnDarkBg
	const forMobile = branding.logoOnLightBg || branding.logoOnDarkBg
	const logoImgClass = 'site-logo__img'
	return (
		<>

			<header id="header_main" className={`header header-fixed ${scroll ? "is-fixed is-small" : ""}`}>
				<div className="header-inner">
					<div className="header-inner-wrap">
						<div id="site-logo">
							<Link href="/" rel="home" className="site-logo__link">
								{forDesktop ? (
									<img
										id="logo-header"
										className={`${logoImgClass} site-logo__img--desktop`}
										src={forDesktop}
										alt=""
									/>
								) : null}
								{forMobile ? (
									<img
										id="logo-header-mobile"
										className={`${logoImgClass} site-logo__img--mobile`}
										src={forMobile}
										alt=""
									/>
								) : null}
							</Link>
						</div>
						<nav className="main-menu">
							<Menu />
						</nav>
						<div className="header-right">
							<LocaleSwitcher variant="default" />
							<div className="header-call">
								<div className="icon">
									<i className="flaticon-phone" />
								</div>
								<div className="number">800-555-6789</div>
							</div>
							<HeaderUserNav handleLogin={handleLogin} accountMenuTheme="green" />
							<div className="header-btn">
								<Link href="/dashboard-add-properties" className="tf-button-default">{t('addListing')}</Link>
							</div>
						</div>
						<a className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu} />
					</div>
				</div>
			</header>



		</>
	)
}
