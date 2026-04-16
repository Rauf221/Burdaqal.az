'use client'

import { useLocale } from 'next-intl'
import { useState } from 'react'
import { useSubscribeMutation } from '@/services/client/contact'

export default function FooterNewsletterForm() {
	const locale = useLocale()
	const [msg, setMsg] = useState(null)
	const subscribe = useSubscribeMutation(locale)

	const onSubmit = async (e) => {
		e.preventDefault()
		setMsg(null)
		const fd = new FormData(e.currentTarget)
		const email = String(fd.get('email') || '').trim()
		if (!email) return
		try {
			await subscribe.mutateAsync(email)
			setMsg({ ok: true, text: 'Abunəlik qeydə alındı.' })
			e.currentTarget.reset()
		} catch {
			setMsg({ ok: false, text: 'Xəta baş verdi. Sonra cəhd edin.' })
		}
	}

	return (
		<>
			<form className="form-subscribe style-line-bottom" onSubmit={onSubmit}>
				<fieldset className="email">
					<input type="email" placeholder="Your e-mail" className="style-1" name="email" tabIndex={2} aria-required="true" required />
				</fieldset>
				<div className="button-submit style-absolute-right">
					<button className="tf-button-bg" type="submit" disabled={subscribe.isPending}>
						{subscribe.isPending ? '…' : 'Send'} <i className="icon-arrow-right-add" />
					</button>
				</div>
			</form>
			{msg && (
				<div className="text" style={{ marginTop: 8, fontSize: 13 }}>
					{msg.text}
				</div>
			)}
		</>
	)
}
