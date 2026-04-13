'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""
	const isPropertyDetailPage = currentMenuItem.startsWith("/property-grid-v2/") && currentMenuItem !== "/property-grid-v2"
	const isBlogPostPage = currentMenuItem.startsWith("/blog-list-v1/") && currentMenuItem !== "/blog-list-v1"

	const [isAccordion, setIsAccordion] = useState(null)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>
			<div className="mobile-menu">
				<div className="menu-backdrop" onClick={handleMobileMenu} />
				<nav className="menu-box">
					<div className="nav-logo"><Link href="/"><img src="/images/logo/logo.svg" alt="nav-logo" width={174} height={44} /></Link></div>
					<div className="bottom-canvas">
						<div className="menu-outer">
							<div className="navbar-collapse collapse show clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className={`${checkCurrentMenuItem("/")}`}>
										<Link href="/">Home</Link>
									</li>
									<li className={`dropdown2 ${isAccordion === 2 ? "open" : ""} ${checkParentActive([
										"/property-grid-v2",
									])}`}>
										<Link href="#">Property</Link>
										<ul style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/property-grid-v2")}`}>
												<Link href="/property-grid-v2">Property Grid 02</Link>
											</li>
											<li className={`${isPropertyDetailPage ? "current" : ""}`}>
												<Link href="/property-grid-v2/villa-one-hyde-park">Property Single 05</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(2)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 3 ? "open" : ""} ${checkParentActive([
										"/agent-list",
										"/agent-single",
										"/agency-list",
										"/agency-single",
									])}`}>
										<Link href="#">Realtor</Link>
										<ul style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/agent-list",)}`}>
												<Link href="/agent-list">Agent List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agent-single",)}`}>
												<Link href="/agent-single">Agent Single</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agency-list",)}`}>
												<Link href="/agency-list">Agency List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/agency-single",)}`}>
												<Link href="/agency-single">Agency Single</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(3)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 4 ? "open" : ""} ${checkParentActive([
										"/about",
										"/compare",
										"/pricing",
										"/faq",
										"/404",
										"/ui-elements",
										"/dashboard",
									])}`}>
										<Link href="#">Pages</Link>
										<ul style={{ display: `${isAccordion === 4 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/about")}`}>
												<Link href="/about">About Us</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/compare")}`}>
												<Link href="/compare">Compare</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/pricing")}`}>
												<Link href="/pricing">Pricing Packages</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/faq")}`}>
												<Link href="/faq">FAQ Page</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/404")}`}>
												<Link href="/404">404 Page</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/ui-elements")}`}>
												<Link href="/ui-elements">UI Elements</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/dashboard")}`}>
												<Link href="/dashboard">Dashboard</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(4)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 5 ? "open" : ""} ${checkParentActive([
										"/blog-list-v1",
									])}`}>
										<Link href="#">Blog</Link>
										<ul style={{ display: `${isAccordion === 5 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/blog-list-v1")}`}>
												<Link href="/blog-list-v1">Blog List 01</Link>
											</li>
											<li className={`${isBlogPostPage ? "current" : ""}`}>
												<Link href="/blog-list-v1/chip-joanna-gaines-fixer-upper-open-visitors">Blog Single</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(5)} />
									</li>
									<li className={`dropdown2 ${isAccordion === 6 ? "open" : ""} ${checkParentActive([
										"/shop-list",
										"/shop-single",
										"/shop-cart",
										"/shop-checkout",
										"/shop-order",
									])}`}>
										<Link href="#">Shop</Link>
										<ul style={{ display: `${isAccordion === 6 ? "block" : "none"}` }}>
											<li className={`${checkCurrentMenuItem("/shop-list")}`}>
												<Link href="/shop-list">Shop List</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-single")}`}>
												<Link href="/shop-single">Shop Single</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-cart")}`}>
												<Link href="/shop-cart">Shop Cart</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-checkout")}`}>
												<Link href="/shop-checkout">Shop Checkout</Link>
											</li>
											<li className={`${checkCurrentMenuItem("/shop-order")}`}>
												<Link href="/shop-order">Shop Order</Link>
											</li>
										</ul>
										<div className="dropdown2-btn" onClick={() => handleAccordion(6)} />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	)
}
