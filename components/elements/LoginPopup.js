'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import {
	useForgotPasswordMutation,
	useForgotVerifyCodeMutation,
	useLoginMutation,
	usePasswordResetMutation,
} from '@/services/client/auth/mutations'
import { getAxiosErrorMessage } from '@/services/client/auth/apiMessage'
import { clearPasswordResetBearerToken } from '@/lib/api/client'
import OtpSixDigitBlock from '@/components/elements/OtpSixDigitBlock'

export default function LoginPopup({ isLogin, handleRegister, handleLogin }) {
	const locale = useLocale()
	const [view, setView] = useState('login')
	const [forgotEmail, setForgotEmail] = useState('')

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [forgotOtpCode, setForgotOtpCode] = useState('')
	const [forgotOtpResetKey, setForgotOtpResetKey] = useState(0)
	const [newPassword, setNewPassword] = useState('')
	const [newPassword2, setNewPassword2] = useState('')

	const [formError, setFormError] = useState('')

	const loginMutation = useLoginMutation(locale)
	const forgotMutation = useForgotPasswordMutation(locale)
	const verifyForgotMutation = useForgotVerifyCodeMutation(locale)
	const resetMutation = usePasswordResetMutation(locale)

	const resetForgotState = () => {
		clearPasswordResetBearerToken()
		setForgotEmail('')
		setForgotOtpCode('')
		setForgotOtpResetKey(0)
		setNewPassword('')
		setNewPassword2('')
		setFormError('')
	}

	const closeModal = () => {
		setView('login')
		resetForgotState()
		setFormError('')
		setEmail('')
		setPassword('')
		handleLogin()
	}

	const onSubmitLogin = (e) => {
		e.preventDefault()
		setFormError('')
		loginMutation.mutate(
			{ email, password },
			{
				onSuccess: () => {
					closeModal()
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'Giriş alınmadı.'))
				},
			}
		)
	}

	const onSubmitForgotEmail = (e) => {
		e.preventDefault()
		setFormError('')
		if (!forgotEmail.trim()) {
			setFormError('E-poçt daxil edin.')
			return
		}
		forgotMutation.mutate(forgotEmail.trim(), {
			onSuccess: () => {
				setForgotOtpResetKey((k) => k + 1)
				setView('forgot-verify')
			},
			onError: (err) => {
				setFormError(getAxiosErrorMessage(err, 'Sorğu göndərilmədi.'))
			},
		})
	}

	const onSubmitForgotVerify = (e) => {
		e.preventDefault()
		setFormError('')
		if (forgotOtpCode.length !== 6 || !forgotEmail.trim()) {
			setFormError('Altı rəqəmli kodu daxil edin.')
			return
		}
		verifyForgotMutation.mutate(
			{ email: forgotEmail.trim(), code: forgotOtpCode },
			{
				onSuccess: () => {
					setView('forgot-reset')
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'OTP kodu yanlışdır. Zəhmət olmasa yenidən yoxlayın.'))
				},
			}
		)
	}

	const onResendForgotOtp = () => {
		forgotMutation.mutate(forgotEmail.trim(), {
			onSuccess: () => {
				setFormError('')
				setForgotOtpCode('')
				setForgotOtpResetKey((k) => k + 1)
			},
			onError: (err) => {
				setFormError(getAxiosErrorMessage(err, 'Kod yenidən göndərilmədi.'))
			},
		})
	}

	const onSubmitForgotReset = (e) => {
		e.preventDefault()
		setFormError('')
		if (newPassword !== newPassword2) {
			setFormError('Şifrələr eyni deyil.')
			return
		}
		resetMutation.mutate(
			{
				password: newPassword,
				password_confirmation: newPassword2,
				code: forgotOtpCode,
				email: forgotEmail.trim(),
			},
			{
				onSuccess: () => {
					const savedEmail = forgotEmail.trim()
					resetForgotState()
					setFormError('')
					setPassword('')
					if (savedEmail) setEmail(savedEmail)
					setView('reset-success')
				},
				onError: (err) => {
					setFormError(getAxiosErrorMessage(err, 'Şifrə yenilənmədi.'))
				},
			}
		)
	}

	const busy =
		loginMutation.isPending ||
		forgotMutation.isPending ||
		verifyForgotMutation.isPending ||
		resetMutation.isPending

	return (
		<>
			<div
				className={`modal fade modalCenter ${isLogin ? 'show' : ''}`}
				id="modallogin"
				style={{ display: isLogin ? 'block' : 'none' }}
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content modal-sm">
						<a onClick={closeModal} className="btn-hide-modal" data-bs-dismiss="modal">
							<i className="icon-close" />
						</a>
						<div className="image-left">
							<img src="/images/section/login.jpg" alt="" />
							<h3>Welcome to Your Real Estate Website</h3>
						</div>
						<div className="content-right">
							{view === 'login' && (
								<>
									<h4>Sign into your account</h4>
									<form className="form-login" onSubmit={onSubmitLogin}>
										{formError ? (
											<p className="text-danger mb-2" style={{ fontSize: 14 }}>
												{formError}
											</p>
										) : null}
										<fieldset className="name">
											<input
												type="email"
												placeholder="Email"
												name="email"
												autoComplete="email"
												value={email}
												onChange={(ev) => setEmail(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="password">
											<input
												type="password"
												placeholder="Password"
												name="password"
												autoComplete="current-password"
												value={password}
												onChange={(ev) => setPassword(ev.target.value)}
												required
											/>
										</fieldset>
										<div className="flex items-center justify-between w-full">
											<div className="checkbox-item">
												<label>
													<p>Remember me</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</div>
											<button
												type="button"
												className="lost-password"
												style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer' }}
												onClick={() => {
													setFormError('')
													setView('forgot-request')
												}}
											>
												Lost your password?
											</button>
										</div>
										<div className="button-submit w-full">
											<button className="tf-button-primary w-full" type="submit" disabled={busy}>
												Login<i className="icon-arrow-right-add" />
											</button>
										</div>
									</form>
								</>
							)}

							{view === 'forgot-request' && (
								<>
									<h4>Şifrəni bərpa et</h4>
									<p style={{ fontSize: 14, marginBottom: 12 }}>E-poçt ünvanınızı daxil edin.</p>
									<form className="form-login" onSubmit={onSubmitForgotEmail}>
										{formError ? (
											<p className="text-danger mb-2" style={{ fontSize: 14 }}>
												{formError}
											</p>
										) : null}
										<fieldset className="email">
											<input
												type="email"
												placeholder="Email"
												value={forgotEmail}
												onChange={(ev) => setForgotEmail(ev.target.value)}
												required
											/>
										</fieldset>
										<div className="button-submit w-full">
											<button className="tf-button-primary w-full" type="submit" disabled={busy}>
												Kod göndər<i className="icon-arrow-right-add" />
											</button>
										</div>
										<button
											type="button"
											className="w-full mt-2"
											style={{ background: 'none', border: 0, cursor: 'pointer', fontSize: 14 }}
											onClick={() => {
												setView('login')
												resetForgotState()
											}}
										>
											Girişə qayıt
										</button>
									</form>
								</>
							)}

							{view === 'forgot-verify' && (
								<>
									<h4>E-poçtdakı kod</h4>
									<p style={{ fontSize: 14, marginBottom: 12 }}>
										Gələn altı rəqəmli təsdiq kodunu daxil edin (yapışdırma dəstəklənir).
									</p>
									{forgotEmail ? (
										<p
											style={{
												fontSize: 13,
												marginBottom: 12,
												padding: '10px 12px',
												background: 'var(--Border, #ebebeb)',
												borderRadius: 8,
											}}
										>
											Kod ünvanı: <strong>{forgotEmail}</strong>
										</p>
									) : null}
									<form className="form-login" onSubmit={onSubmitForgotVerify}>
										<OtpSixDigitBlock
											key={forgotOtpResetKey}
											onCodeChange={setForgotOtpCode}
											onResend={onResendForgotOtp}
											error={formError}
											disabled={busy}
											onClearError={() => setFormError('')}
										/>
										<div className="button-submit w-full">
											<button
												className="tf-button-primary w-full"
												type="submit"
												disabled={busy || forgotOtpCode.length !== 6}
											>
												Təsdiqlə<i className="icon-arrow-right-add" />
											</button>
										</div>
										<button
											type="button"
											className="w-full mt-2"
											style={{ background: 'none', border: 0, cursor: 'pointer', fontSize: 14 }}
											onClick={() => setView('forgot-request')}
										>
											Geri
										</button>
									</form>
								</>
							)}

							{view === 'reset-success' && (
								<>
									<h4>Uğurlu</h4>
									<p style={{ fontSize: 15, marginBottom: 20, lineHeight: 1.5 }}>
										Şifrəniz uğurla dəyişdirildi. İndi yeni şifrənizlə daxil ola bilərsiniz.
									</p>
									<div className="button-submit w-full">
										<button
											type="button"
											className="tf-button-primary w-full"
											onClick={() => setView('login')}
										>
											Girişə keç<i className="icon-arrow-right-add" />
										</button>
									</div>
								</>
							)}

							{view === 'forgot-reset' && (
								<>
									<h4>Yeni şifrə</h4>
									<form className="form-login" onSubmit={onSubmitForgotReset}>
										{formError ? (
											<p className="text-danger mb-2" style={{ fontSize: 14 }}>
												{formError}
											</p>
										) : null}
										<fieldset className="password">
											<input
												type="password"
												placeholder="Yeni şifrə"
												value={newPassword}
												onChange={(ev) => setNewPassword(ev.target.value)}
												required
											/>
										</fieldset>
										<fieldset className="password">
											<input
												type="password"
												placeholder="Şifrəni təkrarlayın"
												value={newPassword2}
												onChange={(ev) => setNewPassword2(ev.target.value)}
												required
											/>
										</fieldset>
										<div className="button-submit w-full">
											<button className="tf-button-primary w-full" type="submit" disabled={busy}>
												Şifrəni yenilə<i className="icon-arrow-right-add" />
											</button>
										</div>
									</form>
								</>
							)}

							{view === 'login' && (
								<div className="flex items-center justify-center">
									<p>Not a member?</p>
									<a
										className="btn-show-register"
										onClick={() => {
											handleRegister()
											handleLogin()
										}}
									>
										Register here
									</a>
								</div>
							)}
							<ul className="wg-social-1">
								<li>
									<Link href="/#">
										<i className="flaticon-google" />
									</Link>
								</li>
								<li>
									<Link href="/#">
										<i className="flaticon-twitter" />
									</Link>
								</li>
								<li>
									<Link href="/#">
										<i className="flaticon-facebook" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{isLogin && (
				<div className="modal-backdrop fade show" onClick={closeModal} style={{ display: 'block' }} />
			)}
		</>
	)
}
