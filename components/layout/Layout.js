
'use client'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import FilterBtn from "../elements/FilterBtn"
import LoginPopup from "../elements/LoginPopup"
import RegisterPopup from "../elements/RegisterPopup"
import ShowSearch from "../elements/ShowSearch"
import UpdateProgressBars from "../elements/UpdateProgressBars"
import WidgetTab from "../elements/WidgetTab"
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import Footer1 from './footer/Footer1'
import Header7 from "./header/Header7"
import Header12 from "./header/Header12"

export default function Layout({ headerStyle, breadcrumbTitle, children, mainContentCls, footerCls }) {
	const [scroll, setScroll] = useState(0)
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

		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const headerProps = {
		scroll,
		isMobileMenu,
		handleMobileMenu,
		isLogin,
		handleLogin,
		isRegister,
		handleRegister,
	}

	return (
		<><div id="top" />
			<AddClassBody />
			<WidgetTab />
			<FilterBtn />
			<ShowSearch />
			<UpdateProgressBars />

			<div id="wrapper">
				<div id="page">
					{headerStyle === 7 ? <Header7 {...headerProps} /> : <Header12 {...headerProps} />}

					<div className={`main-content ${mainContentCls ? mainContentCls : ""}`}>
						{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

						{children}
					</div>
					<Footer1 footerCls={footerCls} />
				</div>
			</div>
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
			<BackToTop target="#top" />
			<LoginPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
			<RegisterPopup isLogin={isLogin} handleLogin={handleLogin} isRegister={isRegister} handleRegister={handleRegister} />
		</>
	)
}
