import Link from "next/link"
import Menu from "../Menu"
export default function Header7({ scroll, isMobileMenu, handleMobileMenu, isLogin, handleLogin, isRegister, handleRegister }) {
	return (
		<>

			<header id="header_main" className={`header header-fixed style-no-bg style-absolute ${scroll ? "is-fixed is-small" : ""}`}>
				<div className="header-inner">
					<div className="header-inner-wrap">
						<div id="site-logo">
							<Link href="/" rel="home">
								<img id="logo-header" src="/images/logo/logo-white.svg" alt="" />
								<img id="logo-header-mobile" src="/images/logo/logo.svg" alt="" />
							</Link>
						</div>
						<nav className="main-menu style-white">
							<Menu />
						</nav>
						<div className="header-right">
							<div className="header-call style-white">
								<div className="icon">
									<i className="flaticon-phone" />
								</div>
								<div className="number">800-555-6789</div>
							</div>
							<div onClick={handleLogin} className="header-user style-white">
								<div className="icon">
									<i className="flaticon-user" />
								</div>
							</div>
							<div className="header-btn">
								<Link href="/dashboard-add-properties" className="tf-button-default style-white">Add
									Listing</Link>
							</div>
						</div>
						<a className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu} />
					</div>
				</div>
			</header>

		</>
	)
}
