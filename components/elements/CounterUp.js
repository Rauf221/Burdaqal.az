'use client'

import { useState, useRef, useEffect } from 'react'
import CountUp from 'react-countup'

export default function CounterUp({ count, time }) {
	const [inView, setInView] = useState(false)
	const ref = useRef(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.2, rootMargin: '0px' }
		)

		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<span ref={ref}>
			{inView ? (
				<CountUp end={count} duration={time}>
					{({ countUpRef }) => <span className="number" ref={countUpRef} />}
				</CountUp>
			) : (
				<span className="number">0</span>
			)}
		</span>
	)
}
