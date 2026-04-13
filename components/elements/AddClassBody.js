'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
	const pathname = usePathname()

	useEffect(() => {
		const bodyElement = document.querySelector('body')

		if (bodyElement) {
			// Remove all classes
			bodyElement.classList.remove('counter-scroll')

			if (pathname === '/') {
				bodyElement.classList.add('counter-scroll')
			}
			else if (pathname === '/invoice') {
				bodyElement.classList.add('counter-scroll')
			}
			else if (pathname === '/dashboard') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-my-profile') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-reviews') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-message') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-add-properties') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-my-properties') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-my-favorites') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-saved-search') {
				bodyElement.classList.add('dashboard')
			}
			else if (pathname === '/dashboard-my-package') {
				bodyElement.classList.add('dashboard')
			}

		}
	}, [pathname])

	return null
}
