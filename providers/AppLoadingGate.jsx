'use client'

/**
 * İlk yükləmədə tam ağ örtük; sənəd DOM-u hazır olanda (DOMContentLoaded və ya artıq interactive)
 * fon və loqo tədricən şəffaflaşır. TanStack sorğularının bitməsini gözləmir — səhifə uzun müddət
 * örtükdə qalmır.
 */

import Preloader from '@/components/elements/Preloader'
import { useEffect, useState } from 'react'

/** Fondan sonra DOM çıxarılması: loqo animasiyası + təhlükəsiz marja */
const FADE_OUT_MS = 1250

/** @param {{ children: import('react').ReactNode }} props */
export function AppLoadingGate({ children }) {
	const [gate, setGate] = useState('loading')

	useEffect(() => {
		const goFade = () => setGate('fading')

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', goFade, { once: true })
			return () => document.removeEventListener('DOMContentLoaded', goFade)
		}

		const id = window.setTimeout(goFade, 0)
		return () => clearTimeout(id)
	}, [])

	useEffect(() => {
		if (gate !== 'fading') return undefined
		const id = setTimeout(() => setGate('hidden'), FADE_OUT_MS)
		return () => clearTimeout(id)
	}, [gate])

	const showOverlay = gate === 'loading' || gate === 'fading'
	const gatePhase = gate === 'fading' ? 'fading' : 'loading'

	return (
		<>
			{showOverlay ? <Preloader variant="gate" gatePhase={gatePhase} /> : null}
			{children}
		</>
	)
}
