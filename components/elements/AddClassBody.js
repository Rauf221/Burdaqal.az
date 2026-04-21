'use client'
import { usePathname } from '@/i18n/navigation'
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
			else if (pathname === '/dashboard' || pathname.startsWith('/dashboard-')) {
				bodyElement.classList.add('dashboard')
			}

		}
	}, [pathname])

	return null
}
