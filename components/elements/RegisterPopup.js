'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRegisterMutation, useVerifyCodeMutation } from '@/services/client/auth/mutations'
import { getAxiosErrorMessage } from '@/services/client/auth/apiMessage'
import OtpSixDigitBlock from '@/components/elements/OtpSixDigitBlock'

export default function RegisterPopup({ isRegister, handleRegister, handleLogin }) {
	const locale = useLocale()
	const [step, setStep] = useState('form')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [otpCode, setOtpCode] = useState('')
	const [otpResetKey, setOtpResetKey] = useState(0)
	const [formError, setFormError] = useState('')

	const registerMutation = useRegisterMutation(locale)
	const verifyMutation = useVerifyCodeMutation(locale)

	const closeModal = () => {
		setStep('form')
		setFormError('')
		setName('')
		setEmail('')
		setMobile('')
		setPassword('')
		setPassword2('')
		setOtpCode('')
		setOtpResetKey(0)
		handleRegister()
	}

	const onSubmitRegister = (e) => {
		e.preventDefault()
		setFormError('')
		if (password !== password2) {
			setFormError('Şifrələr eyni deyil.')
			return
		}
		registerMutation.mutate(
			{ name, email, mobile, password, password_confirmation: password2 },
			{
				onSuccess: () => {
					setFormError('')
					setOtpCode('')
					setOtpResetKey((k) => k + 1)
					setStep('verify')
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'Qeydiyyat tamamlanmadı.'))
				},
			}
		)
	}

	const onSubmitVerify = (e) => {
		e.preventDefault()
		setFormError('')
		if (otpCode.length !== 6 || !email.trim()) {
			setFormError('Altı rəqəmli kodu daxil edin.')
			return
		}
		verifyMutation.mutate(
			{ email: email.trim(), code: otpCode },
			{
				onSuccess: () => {
					closeModal()
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'OTP kodu yanlışdır. Zəhmət olmasa yenidən yoxlayın.'))
				},
			}
		)
	}

	const onResendRegisterOtp = () => {
		registerMutation.mutate(
			{ name, email, mobile, password, password_confirmation: password2 },
			{
				onSuccess: () => {
					setFormError('')
					setOtpCode('')
					setOtpResetKey((k) => k + 1)
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'Kod yenidən göndərilmədi.'))
				},
			}
		)
	}

	const busy = registerMutation.isPending || verifyMutation.isPending

	return (
		<>
			<div
				className={`modal fade modalCenter ${isRegister ? 'show' : ''}`}
				id="modalregister"
				style={{ display: isRegister ? 'block' : 'none' }}
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content modal-sm">
						<a className="btn-hide-modal" onClick={closeModal}>
							<i className="icon-close" />
						</a>
						<div className="image-left">
							<img src="/images/section/login.jpg" alt="" />
							<h3>Welcome to Your Real Estate Website</h3>
						</div>
						<div className="content-right">
							{step === 'form' && (
								<>
									<p style={{ fontSize: 12, opacity: 0.75, marginBottom: 6 }}>Addım 1 / 2</p>
									<h4>Create an account</h4>
									<form className="form-login" onSubmit={onSubmitRegister}>
										{formError ? (
											<p className="text-danger mb-2" style={{ fontSize: 14 }}>
												{formError}
											</p>
										) : null}
										<fieldset className="name">
											<input
												type="text"
												placeholder="Ad"
												name="name"
												value={name}
												onChange={(ev) => setName(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="email">
											<input
												type="email"
												placeholder="Email"
												name="email"
												value={email}
												onChange={(ev) => setEmail(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="name">
											<input
												type="tel"
												placeholder="Mobil nömrə"
												name="mobile"
												value={mobile}
												onChange={(ev) => setMobile(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="password">
											<input
												type="password"
												placeholder="Password"
												name="password"
												value={password}
												onChange={(ev) => setPassword(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="password">
											<input
												type="password"
												placeholder="Retype Password"
												name="password_confirmation"
												value={password2}
												onChange={(ev) => setPassword2(ev.target.value)}
												required
											/>
										</fieldset>
										<div className="flex items-center justify-between">
											<div className="checkbox-item">
												<label>
													<p>I agree with terms &amp; conditions</p>
													<input type="checkbox" required />
													<span className="btn-checkbox" />
												</label>
											</div>
										</div>
										<div className="button-submit">
											<button className="tf-button-primary w-full" type="submit" disabled={busy}>
												Register<i className="icon-arrow-right-add" />
											</button>
										</div>
									</form>
								</>
							)}

							{step === 'verify' && (
								<>
									<p style={{ fontSize: 12, opacity: 0.75, marginBottom: 6 }}>Addım 2 / 2 — OTP</p>
									<h4>E-poçt təsdiqi</h4>
									<p style={{ fontSize: 14, marginBottom: 8 }}>
										Qeydiyyat yalnız altı rəqəmli kodu daxil edib təsdiqlədikdən sonra tamamlanır. E-poçtunuza
										göndərilən OTP kodunu aşağıya daxil edin.
									</p>
									{email ? (
										<p
											style={{
												fontSize: 13,
												marginBottom: 14,
												padding: '10px 12px',
												background: 'var(--Border, #ebebeb)',
												borderRadius: 8,
											}}
										>
											Kod ünvanı: <strong>{email}</strong>
										</p>
									) : null}
									<form className="form-login" onSubmit={onSubmitVerify}>
										<OtpSixDigitBlock
											key={otpResetKey}
											onCodeChange={setOtpCode}
											onResend={onResendRegisterOtp}
											error={formError}
											disabled={busy}
											onClearError={() => setFormError('')}
										/>
										<div className="button-submit">
											<button
												className="tf-button-primary w-full"
												type="submit"
												disabled={busy || otpCode.length !== 6}
											>
												Qeydiyyatı tamamla<i className="icon-arrow-right-add" />
											</button>
										</div>
										<button
											type="button"
											className="w-full mt-2"
											style={{ background: 'none', border: 0, cursor: 'pointer', fontSize: 14 }}
											onClick={() => {
												setStep('form')
												setFormError('')
												setOtpCode('')
											}}
										>
											Əvvəlki addıma qayıt
										</button>
									</form>
								</>
							)}

							{step === 'form' && (
								<div className="flex items-center justify-center">
									<p>Have an account?</p>
									<a
										className="btn-show-register"
										onClick={() => {
											handleRegister()
											handleLogin()
										}}
									>
										Log in
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
