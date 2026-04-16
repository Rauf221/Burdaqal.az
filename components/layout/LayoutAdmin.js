
'use client'
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import DeleteButton from "../elements/DeleteButton"
import LoginPopup from "../elements/LoginPopup"
import RegisterPopup from "../elements/RegisterPopup"
import BreadcrumbAdmin from "./BreadcrumbAdmin"
import Sidebar from "./Sidebar"
import MobileMenu from "./MobileMenu"
import Header12 from "./header/Header12"

export default function LayoutAdmin({ breadcrumbTitle, children }) {
	const [scroll, setScroll] = useState(false)
	const headerFlowHeightRef = useRef(0)
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
	}
	const [isLogin, setLogin] = useState(false)
	const handleLogin = () => {
		setLogin(!isLogin)
		!isLogin ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}
	const [isRegister, setRegister] = useState(false)
	const handleRegister = () => {
		setRegister(!isRegister)
		!isRegister ? document.body.classList.add("modal-open") : document.body.classList.remove("modal-open")
	}

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		onScroll()
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	useLayoutEffect(() => {
		const page = document.getElementById('page')
		const header = document.getElementById('header_main')
		if (!page || !header) return
		if (!scroll) {
			headerFlowHeightRef.current = header.offsetHeight
			page.style.paddingTop = ''
			return
		}
		const h = headerFlowHeightRef.current || header.offsetHeight
		page.style.paddingTop = `${h}px`
	}, [scroll])

	return (
		<><div id="top" />
			<AddClassBody />

			<DeleteButton />

			<div id="wrapper">
				<div id="page" className="layout-wrap background-F9F9F9">
					<Header12
						scroll={scroll}
						isMobileMenu={isMobileMenu}
						handleMobileMenu={handleMobileMenu}
						isLogin={isLogin}
						handleLogin={handleLogin}
						isRegister={isRegister}
						handleRegister={handleRegister}
					/>

					<div className="main-content spacing-20">
						<div className="layout-wrap-inner">
							<Sidebar />
							<div className="section-content-right">
								{breadcrumbTitle && <BreadcrumbAdmin breadcrumbTitle={breadcrumbTitle} />}
								{children}
								<div className="bottom-page">
									<p>Copyright © 2024. JustHome</p>
								</div>
							</div>
							<div className="btn-canvas active">
								<span />
								<div className="text-content"> Dashboard Navigation</div>
							</div>

						</div>
					</div>
				</div>
			</div>
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<BackToTop target="#top" />
			<LoginPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
			<RegisterPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
		</>
	)
}
