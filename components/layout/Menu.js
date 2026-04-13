'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""
	const isPropertyDetailPage = currentMenuItem.startsWith("/property-grid-v2/") && currentMenuItem !== "/property-grid-v2"
	const isBlogPostPage = currentMenuItem.startsWith("/blog-list-v1/") && currentMenuItem !== "/blog-list-v1"

	return (
		<>
			{/* <ul className="menu">
				<li className={`dropdown ${checkParentActive(["/home-02", "/home-03"])}`}>
					<Link href="/#">Home</Link>
					<ul className="sub-menu">
						<li className={`item ${checkCurrentMenuItem("/")}`}>
							<Link href="//">Home 1</Link>
						</li>
						<li className={`item ${checkCurrentMenuItem("/home-02")}`}>
							<Link href="//home-02">Home 2</Link>
						</li>
					</ul>
				</li>
				<li className={`item ${pathname === "/about" ? "active" : ""}`}>
					<Link href="//about">about</Link>
				</li>
			</ul> */}
			<ul className="navigation">
				<li>
					<Link href="/" className={`item ${checkCurrentMenuItem("/")}`}>Home</Link>
				</li>
				<li className={`has-children ${checkParentActive([
					"/property-grid-v2",
				])}`}><a>Property</a>
					<ul>
						<li>
							<Link href="/property-grid-v2" className={`${checkCurrentMenuItem("/property-grid-v2")}`}>Property Grid 02</Link>
						</li>
						<li>
							<Link href="/property-grid-v2/villa-one-hyde-park" className={`${isPropertyDetailPage ? "current" : ""}`}>Property Single 05</Link>
						</li>
					</ul>
				</li>
				<li className={`has-children ${checkParentActive([
					"/agent-list",
					"/agent-single",
					"/agency-list",
					"/agency-single",


				])}`}><a>Realtor</a>
					<ul>
						<li><Link href="/agent-list" className={`${checkCurrentMenuItem("/agent-list",)}`}>Agent List</Link></li>
						<li><Link href="/agent-single" className={`${checkCurrentMenuItem("/agent-single",)}`}>Agent Single</Link></li>
						<li><Link href="/agency-list" className={`${checkCurrentMenuItem("/agency-list",)}`}>Agency List</Link></li>
						<li><Link href="/agency-single" className={`${checkCurrentMenuItem("/agency-single",)}`}>Agency Single</Link></li>
					</ul>
				</li>
				<li className={`has-children ${checkParentActive([
					"/about",
					"/compare",
					"/pricing",
					"/faq",
					"/404",
					"/ui-elements",
					"/dashboard",


				])}`}><a>Pages</a>
					<ul>
						<li><Link href="/about" className={`${checkCurrentMenuItem("/about",)}`}>About Us</Link></li>
						<li><Link href="/compare" className={`${checkCurrentMenuItem("/compare",)}`}>Compare</Link></li>
						<li><Link href="/pricing" className={`${checkCurrentMenuItem("/pricing",)}`}>Pricing Packages</Link></li>
						<li><Link href="/faq" className={`${checkCurrentMenuItem("/faq",)}`}>FAQ Page</Link></li>
						<li><Link href="/404" className={`${checkCurrentMenuItem("/404",)}`}>404 Page</Link></li>
						<li><Link href="/ui-elements" className={`${checkCurrentMenuItem("/ui-elements",)}`}>UI Elements</Link></li>
						<li><Link href="/dashboard" className={`${checkCurrentMenuItem("/dashboard",)}`}>Dashboard</Link></li>
					</ul>
				</li>
				<li className={`has-children ${checkParentActive([
					"/shop-list",
					"/shop-single",
					"/shop-cart",
					"/shop-checkout",
					"/shop-order",


				])}`}><a>Shop</a>
					<ul>
						<li><Link href="/shop-list" className={`${checkCurrentMenuItem("/shop-list",)}`}>Shop List</Link></li>
						<li><Link href="/shop-single" className={`${checkCurrentMenuItem("/shop-single",)}`}>Shop Single</Link></li>
						<li><Link href="/shop-cart" className={`${checkCurrentMenuItem("/shop-cart",)}`}>Shop Cart</Link></li>
						<li><Link href="/shop-checkout" className={`${checkCurrentMenuItem("/shop-checkout",)}`}>Shop Checkout</Link></li>
						<li><Link href="/shop-order" className={`${checkCurrentMenuItem("/shop-order",)}`}>Shop Order</Link></li>
					</ul>
				</li>
				<li className={`has-children ${checkParentActive([
					"/blog-list-v1",
				])}`}><a>Blog</a>
					<ul>
						<li><Link href="/blog-list-v1" className={`${checkCurrentMenuItem("/blog-list-v1")}`}>Blog List 01</Link></li>
						<li><Link href="/blog-list-v1/chip-joanna-gaines-fixer-upper-open-visitors" className={`${isBlogPostPage ? "current" : ""}`}>Blog Single</Link></li>
					</ul>
				</li>
				<li>
					<Link href="/contact" className={`item ${pathname === "/contact" ? "current" : ""}`}>Contact</Link>
				</li>
			</ul>
		</>
	)
}

