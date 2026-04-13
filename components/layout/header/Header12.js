import Link from "next/link"
import Menu from "../Menu"
export default function Header12({ scroll, isMobileMenu, handleMobileMenu, isLogin, handleLogin, isRegister, handleRegister }) {
	return (
		<>

			<header id="header_main" className={`header header-fixed ${scroll ? "is-fixed is-small" : ""}`}>
				<div className="header-inner">
					<div className="header-inner-wrap">
						<div id="site-logo">
							<Link href="/" rel="home">
								<img className="d-block" id="logo-header" src="/images/logo/logo.svg" alt="" />
							</Link>
						</div>
						<nav className="main-menu">
							<Menu />
						</nav>
						<div className="header-right">
							<div className="header-call">
								<div className="icon">
									<i className="flaticon-phone" />
								</div>
								<div className="number">800-555-6789</div>
							</div>
							<div onClick={handleLogin} className="header-user">
								<div className="icon">
									<i className="flaticon-user" />
								</div>
							</div>
							<div className="header-btn">
								<Link href="/dashboard-add-properties" className="tf-button-default">Add Listing</Link>
							</div>
						</div>
						<a className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu} />
					</div>
				</div>
			</header>



		</>
	)
}
