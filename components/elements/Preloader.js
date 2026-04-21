'use client'

import { useEffect, useState } from 'react'

const LOADING_LOGO_SRC = '/images/logo/icon%20logo%20dark.svg'

/**
 * @param {{ variant?: 'default' | 'transparent' | 'white' | 'gate', gatePhase?: 'loading' | 'fading' }} props
 * - `default` — ağ fon, yüngül loqo animasiyası
 * - `transparent` — şəffaf fon, loqo animasiyası `preload-logo-vanish` (böyüyüb tədricən yox olur)
 * - `white` — əvvəl ağ fon, sonra şəffaf; loqo eyni tədricən yox olma animasiyası
 * - `gate` — yalnız AppLoadingGate: DOM hazır olana qədər möhkəm ağ + pulse; sonra fading-də fon və loqo tədricən şəffaf
 */
export default function Preloader({ variant = 'default', gatePhase = 'loading' }) {
	const [whiteToClear, setWhiteToClear] = useState(false)

	useEffect(() => {
		if (variant !== 'white') return undefined
		const id = requestAnimationFrame(() => {
			setWhiteToClear(true)
		})
		return () => cancelAnimationFrame(id)
	}, [variant])

	if (variant === 'gate') {
		const rootClass = [
			'preload',
			'preload-container',
			'preload-container--gate',
			gatePhase === 'loading' && 'preload-container--gate-loading',
			gatePhase === 'fading' && 'preload-container--gate-fading',
		]
			.filter(Boolean)
			.join(' ')

		return (
			<div
				className={rootClass}
				aria-busy={gatePhase === 'loading'}
				aria-live="polite"
			>
				<div className="middle">
					<img
						key={gatePhase}
						className="preload-container__logo"
						src={LOADING_LOGO_SRC}
						alt=""
						width={96}
						height={96}
						decoding="async"
					/>
				</div>
			</div>
		)
	}

	const rootClass = [
		'preload',
		'preload-container',
		variant === 'transparent' && 'preload-container--transparent',
		variant === 'white' && 'preload-container--white',
		variant === 'white' && whiteToClear && 'preload-container--white-to-clear',
	]
		.filter(Boolean)
		.join(' ')

	return (
		<div className={rootClass} aria-busy="true" aria-live="polite">
			<div className="middle">
				<img className="preload-container__logo" src={LOADING_LOGO_SRC} alt="" width={96} height={96} decoding="async" />
			</div>
		</div>
	)
}
