'use client'

import { useEffect, useRef, useState } from 'react'

function formatTimer(seconds) {
	const mins = Math.floor(seconds / 60)
	const secs = seconds % 60
	return `${mins}:${secs.toString().padStart(2, '0')}`
}

/**
 * CASIO OTPModal ilə eyni məntiq: 6 rəqəm, yapışdırma, 59 saniyə gözləmə, yenidən göndər.
 * Yenidən başlatmaq üçün valideyn komponentdə key dəyişin (remount).
 */
export default function OtpSixDigitBlock({ onCodeChange, onResend, error, disabled, onClearError }) {
	const [otp, setOtp] = useState(() => Array(6).fill(''))
	const [timer, setTimer] = useState(59)
	const inputRefs = useRef([])
	const canResend = timer === 0

	useEffect(() => {
		const t = setTimeout(() => inputRefs.current[0]?.focus(), 100)
		return () => clearTimeout(t)
	}, [])

	useEffect(() => {
		const id = setInterval(() => {
			setTimer((prev) => (prev <= 1 ? 0 : prev - 1))
		}, 1000)
		return () => clearInterval(id)
	}, [])

	const emitCode = (next) => {
		onCodeChange?.(next.join(''))
	}

	const handleChange = (index, value) => {
		if (value && !/^\d$/.test(value)) return
		if (error) onClearError?.()
		const newOtp = [...otp]
		newOtp[index] = value
		setOtp(newOtp)
		emitCode(newOtp)
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus()
		}
	}

	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
		if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
			e.preventDefault()
		}
	}

	const handlePaste = (e) => {
		e.preventDefault()
		const pasted = e.clipboardData.getData('text').trim()
		const digits = pasted.replace(/\D/g, '').slice(0, 6).split('')
		if (digits.length === 6) {
			const newOtp = [...otp]
			digits.forEach((d, i) => {
				newOtp[i] = d
			})
			setOtp(newOtp)
			emitCode(newOtp)
			inputRefs.current[5]?.focus()
		}
	}

	const handleResend = () => {
		if (!canResend || !onResend) return
		onResend()
	}

	const otpBoxStyle = {
		width: 44,
		height: 48,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 600,
		border: '1px solid var(--Border, #ebebeb)',
		borderRadius: 4,
	}

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: 8,
					flexWrap: 'wrap',
					marginBottom: 12,
				}}
			>
				{otp.map((digit, index) => (
					<input
						key={index}
						ref={(el) => {
							inputRefs.current[index] = el
						}}
						type="text"
						inputMode="numeric"
						maxLength={1}
						value={digit}
						onChange={(e) => handleChange(index, e.target.value)}
						onKeyDown={(e) => handleKeyDown(index, e)}
						onPaste={index === 0 ? handlePaste : undefined}
						disabled={disabled}
						style={otpBoxStyle}
						autoComplete="one-time-code"
					/>
				))}
			</div>
			<div style={{ textAlign: 'center', marginBottom: 8 }}>
				<p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{formatTimer(timer)}</p>
			</div>
			<div style={{ textAlign: 'center', fontSize: 14, marginBottom: error ? 8 : 0 }}>
				Kod gəlmədi?{' '}
				{canResend ? (
					<button
						type="button"
						onClick={handleResend}
						disabled={disabled}
						style={{
							background: 'none',
							border: 0,
							padding: 0,
							cursor: disabled ? 'not-allowed' : 'pointer',
							fontWeight: 600,
							textDecoration: 'underline',
						}}
					>
						Yenidən göndər
					</button>
				) : (
					<span style={{ opacity: 0.7 }}>Yenidən göndər</span>
				)}
			</div>
			{error ? (
				<p className="text-danger mb-2" style={{ fontSize: 14, textAlign: 'center' }}>
					{error}
				</p>
			) : null}
		</div>
	)
}
