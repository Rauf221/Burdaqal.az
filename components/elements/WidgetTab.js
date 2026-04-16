'use client'
import { useEffect } from 'react'
import React from 'react'

export default function WidgetTab() {
	useEffect(() => {
		const widgetTabs = document.querySelectorAll('.widget-tabs')

		widgetTabs.forEach((widgetTab) => {
			const contentTabEl = widgetTab.querySelector('.widget-content-tab')
			const menuTabEl = widgetTab.querySelector('.widget-menu-tab')
			if (!contentTabEl || !menuTabEl) return

			const contentTabs = contentTabEl.children
			Array.from(contentTabs).forEach((child) => (child.style.display = 'none'))
			Array.from(contentTabs).forEach((child) => {
				if (child.classList.contains('active')) {
					if (child.classList.contains('flex-display')) {
						child.style.display = 'flex'
					} else {
						child.style.display = 'block'
					}
				}
			})

			const menuItems = menuTabEl.children
			Array.from(menuItems).forEach((menuItem, index) => {
				menuItem.addEventListener('click', function () {
					const liActive = index
					const contentActive = contentTabEl.children[liActive]
					if (!contentActive) return

					Array.from(contentTabEl.children).forEach((child) => {
						child.classList.remove('active')
						child.style.display = 'none'
					})

					contentActive.classList.add('active')
					if (contentActive.classList.contains('flex-display')) {
						contentActive.style.display = 'flex'
					} else {
						contentActive.style.display = 'block'
					}

					Array.from(menuItems).forEach((item) => item.classList.remove('active'))
					menuItem.classList.add('active')
				})
			})
		})
	}, [])

	return null
}
