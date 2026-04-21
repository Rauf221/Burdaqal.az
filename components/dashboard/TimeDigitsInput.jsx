'use client'

import { useState } from 'react'

/** Yalnız rəqəm; 3-cü və 4-cü simvoldan sonra avtomatik «:» (məs. 1221 → 12:21) */
function formatTimeDigits(raw) {
	const digits = String(raw).replace(/\D/g, '').slice(0, 4)
	if (digits.length <= 2) return digits
	return `${digits.slice(0, 2)}:${digits.slice(2)}`
}

export default function TimeDigitsInput({ id, name, placeholder = '12:00', tabIndex }) {
	const [value, setValue] = useState('')

	return (
		<input
			id={id}
			name={name}
			type="text"
			value={value}
			onChange={(e) => setValue(formatTimeDigits(e.target.value))}
			placeholder={placeholder}
			maxLength={5}
			inputMode="numeric"
			autoComplete="off"
			tabIndex={tabIndex}
			title="24 saat: rəqəmləri yazın, iki rəqəmdən sonra : əlavə olunur"
		/>
	)
}
