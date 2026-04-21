'use client'

import { Link } from '@/i18n/navigation'
import HeaderUserNav from '@/components/elements/HeaderUserNav'
import LocaleSwitcher from '@/components/elements/LocaleSwitcher'
import { useSiteBranding } from '@/providers/SiteBrandingProvider'
import { useTranslations } from 'next-intl'
import Menu from '../Menu'

export default function Header7({
	scroll,
	isMobileMenu,
	handleMobileMenu,
	isLogin,
	handleLogin,
	isRegister,
	handleRegister,
}) {
	const t = useTranslations('navigation')
	const branding = useSiteBranding()
	const forDesktop = branding.logoOnDarkBg || branding.logoOnLightBg
	const forMobile = branding.logoOnLightBg || branding.logoOnDarkBg
	const logoImgClass = 'site-logo__img'
	return (
		<>
			<header
				id="header_main"
				className={`header header-fixed style-no-bg style-absolute ${scroll ? 'is-fixed is-small' : ''}`}
			>
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
						<nav className="main-menu style-white">
							<Menu />
						</nav>
						<div className="header-right">
							<LocaleSwitcher variant="inverse" />
							<div className="header-call style-white">
								<div className="icon">
									<i className="flaticon-phone" />
								</div>
								<div className="number">+994 50 123 45 67</div>
							</div>
							<HeaderUserNav handleLogin={handleLogin} inverse accountMenuTheme="dark" />
							<div className="header-btn">
								<Link href="/dashboard-add-properties" className="tf-button-default style-white">
									{t('addListing')}
								</Link>
							</div>
						</div>
						<a className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu} />
					</div>
				</div>
			</header>
		</>
	)
}
