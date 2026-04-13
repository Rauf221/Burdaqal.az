'use client'
import { useEffect } from 'react'

export default function UpdateProgressBars() {
	useEffect(() => {
		let intervalId

		function updateProgressBars() {
			const progressBarsContainer = document.querySelector('.progress-bars')
			if (progressBarsContainer) {
				const bars = progressBarsContainer.querySelectorAll('.progress-bars-line > div')
				intervalId = setInterval(() => {
					bars.forEach(bar => {
						const progress = parseFloat(bar.dataset.progress)
						const max = parseFloat(bar.dataset.max)
						const width = (progress / max) * 100
						bar.style.width = width + '%'
					})
				}, 500)
			}
		}

		updateProgressBars()

		// Cleanup function
		return () => clearInterval(intervalId)
	}, [])

	return null
}
