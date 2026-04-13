'use client'
import { useEffect } from 'react'

export default function FilterBtn() {
	useEffect(() => {
		function handleFilterClick(event) {
			const btnFilter = event.target.closest('.btn-filter')
			const wgFilter = event.target.closest('.wg-filter')

			if (btnFilter) {
				const box = btnFilter.closest('.wg-filter').querySelector('.open-filter')
				if (!box.classList.contains('active')) {
					box.classList.add('active')
					btnFilter.classList.add('active')
				} else {
					box.classList.remove('active')
					btnFilter.classList.remove('active')
				}
			} else if (!wgFilter) {
				const wgFilters = document.querySelectorAll('.wg-filter')
				wgFilters.forEach(filter => {
					const box = filter.querySelector('.open-filter')
					const btn = filter.querySelector('.btn-filter')
					if (box.classList.contains('active')) {
						box.classList.remove('active')
						btn.classList.remove('active')
					}
				})
			} else {
				const box = wgFilter.querySelector('.open-filter')
				const btn = wgFilter.querySelector('.btn-filter')
				if (!btnFilter && !box.contains(event.target)) {
					if (box.classList.contains('active')) {
						box.classList.remove('active')
						btn.classList.remove('active')
					}
				}
			}
		}

		document.addEventListener('click', handleFilterClick)

		// Cleanup event listener on component unmount
		return () => {
			document.removeEventListener('click', handleFilterClick)
		}
	}, [])

	return null
}
