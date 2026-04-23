'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { useAuthSession } from '@/lib/auth/useAuthSession'
import { getUserProfileQuery } from '@/services/client/auth/queries'
import {
	usePasswordChangeMutation,
	useUpdateProfileMutation,
	useVerifyProfileEmailCodeMutation,
} from '@/services/client/auth/mutations'
import { getAxiosErrorMessage } from '@/services/client/auth/apiMessage'
import {
	parseUserProfilePayload,
	resolveUserMediaUrl,
} from '@/services/client/auth/profileParse'
import OtpSixDigitBlock from '@/components/elements/OtpSixDigitBlock'

const PLACEHOLDER_AVATAR = '/images/author/author-4.png'

function normalizeEmail(s) {
	return (s ?? '').trim().toLowerCase()
}

export default function DashboardMyProfileClient() {
	const locale = useLocale()
	const isAuthed = useAuthSession()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [savedEmailRaw, setSavedEmailRaw] = useState('')
	const [baselineEmailNorm, setBaselineEmailNorm] = useState('')
	const [serverImagePath, setServerImagePath] = useState(null)
	const [imageFile, setImageFile] = useState(null)
	const [imagePreview, setImagePreview] = useState(null)

	const [profileError, setProfileError] = useState('')
	const [profileOk, setProfileOk] = useState('')

	const [otpModalOpen, setOtpModalOpen] = useState(false)
	const [otpCode, setOtpCode] = useState('')
	const [otpError, setOtpError] = useState('')
	const [otpHint, setOtpHint] = useState('')
	const [otpResendKey, setOtpResendKey] = useState(0)
	const [pendingProfile, setPendingProfile] = useState(null)

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [newPassword2, setNewPassword2] = useState('')
	const [pwError, setPwError] = useState('')
	const [pwOk, setPwOk] = useState('')

	const { data: profilePayload, isPending, isError, error, isFetched } = useQuery({
		...getUserProfileQuery(locale),
		enabled: isAuthed,
	})

	useEffect(() => {
		if (!profilePayload) return
		const p = parseUserProfilePayload(profilePayload)
		setName(p.name)
		const em = p.email || ''
		setEmail(em)
		setSavedEmailRaw(em)
		setBaselineEmailNorm(normalizeEmail(em))
		setMobile(p.mobile)
		setServerImagePath(p.imageUrl)
		setImageFile(null)
		setImagePreview(null)
	}, [profilePayload])

	useEffect(() => {
		return () => {
			if (imagePreview) URL.revokeObjectURL(imagePreview)
		}
	}, [imagePreview])

	/** Postman /verify-code — yalnız `code` (Bearer). Yalnız modalın “Təsdiqlə” düyməsindən çağırılır. */
	const verifyProfileEmailMutation = useVerifyProfileEmailCodeMutation(locale)
	/** /update — e-poçt eyni olanda Save birbaşa; e-poçt fərqlidirsə yalnız verify-code uğurundan sonra. */
	const updateMutation = useUpdateProfileMutation(locale)
	const passwordMutation = usePasswordChangeMutation(locale)

	const avatarSrc = imagePreview || resolveUserMediaUrl(serverImagePath) || PLACEHOLDER_AVATAR

	const onImageChange = (e) => {
		const f = e.target.files?.[0] ?? null
		setImageFile(f)
		if (imagePreview) URL.revokeObjectURL(imagePreview)
		if (f) {
			setImagePreview(URL.createObjectURL(f))
		} else {
			setImagePreview(null)
		}
	}

	const applyProfileSaveSuccess = (payload) => {
		setProfileOk('Profil uğurla yeniləndi.')
		setSavedEmailRaw(payload.email.trim())
		setBaselineEmailNorm(normalizeEmail(payload.email))
		setImageFile(null)
		if (imagePreview) {
			URL.revokeObjectURL(imagePreview)
			setImagePreview(null)
		}
	}

	const runProfileUpdate = (payload) => {
		updateMutation.mutate(payload, {
			onSuccess: () => applyProfileSaveSuccess(payload),
			onError: (err) => {
				setProfileError(getAxiosErrorMessage(err, 'Yenilənmə alınmadı.'))
			},
		})
	}

	const onSubmitProfile = (e) => {
		e.preventDefault()
		setProfileError('')
		setProfileOk('')

		const payload = {
			name,
			email,
			mobile,
			image: imageFile,
		}

		if (normalizeEmail(email) === baselineEmailNorm) {
			runProfileUpdate(payload)
			return
		}

		// E-poçt dəyişibsə Save heç bir sorğu atmır: yalnız OTP modalı açılır.
		// Update sorğusu yalnız modal içindəki Təsdiqlə düyməsindən (verify-code uğrundan) sonra gedir.
		setPendingProfile(payload)
		setOtpError('')
		setOtpHint('E-poçtunuza göndərilən altı rəqəmli kodu daxil edib təsdiqləyin.')
		setOtpCode('')
		setOtpResendKey((k) => k + 1)
		setOtpModalOpen(true)
		setProfileOk('')
	}

	const closeOtpModal = () => {
		setOtpModalOpen(false)
		setOtpError('')
		setOtpHint('')
		setOtpCode('')
		setPendingProfile(null)
		setEmail(savedEmailRaw)
	}

	const onConfirmEmailOtp = (e) => {
		e.preventDefault()
		setOtpError('')
		if (!pendingProfile) return
		if (otpCode.length !== 6) {
			setOtpError('Altı rəqəmli kodu daxil edin.')
			return
		}
		const toSave = {
			name: pendingProfile.name,
			email: pendingProfile.email.trim(),
			mobile: pendingProfile.mobile,
			image: pendingProfile.image,
		}
		verifyProfileEmailMutation.mutate(
			{ code: otpCode },
			{
				onSuccess: () => {
					setOtpModalOpen(false)
					setOtpError('')
					setOtpHint('')
					setOtpCode('')
					setPendingProfile(null)
					queueMicrotask(() => {
						updateMutation.mutate(toSave, {
							onSuccess: () => {
								applyProfileSaveSuccess({ ...toSave, email: toSave.email })
								setProfileOk('E-poçt təsdiqləndi və profil yeniləndi.')
								setEmail(toSave.email)
							},
							onError: (err) => {
								setProfileError(
									getAxiosErrorMessage(err, 'Kod təsdiqləndi, amma profil saxlanılmadı.')
								)
							},
						})
					})
				},
				onError: (err) => {
					setOtpError(getAxiosErrorMessage(err, 'Kod yanlışdır və ya müddəti bitib.'))
				},
			}
		)
	}

	const onResendEmailOtp = () => {
		// Təkrar göndərmə üçün ayrıca endpoint yoxdur; burada heç bir sorğu atılmır.
		setOtpError('')
		setOtpHint('Kodu yenidən almaq üçün pəncərəni bağlayıb yenidən Save edin.')
		setOtpResendKey((k) => k + 1)
	}

	const onSubmitPassword = (e) => {
		e.preventDefault()
		setPwError('')
		setPwOk('')
		if (newPassword !== newPassword2) {
			setPwError('Yeni şifrələr eyni deyil.')
			return
		}
		passwordMutation.mutate(
			{
				old_password: oldPassword,
				password: newPassword,
				password_confirmation: newPassword2,
			},
			{
				onSuccess: () => {
					setPwOk('Şifrə uğurla dəyişdirildi.')
					setOldPassword('')
					setNewPassword('')
					setNewPassword2('')
				},
				onError: (err) => {
					setPwError(getAxiosErrorMessage(err, 'Şifrə dəyişdirilmədi.'))
				},
			}
		)
	}

	const busyProfile =
		updateMutation.isPending ||
		verifyProfileEmailMutation.isPending
	const busyPw = passwordMutation.isPending
	const loadingProfile = isAuthed && isPending && !isFetched

	if (!isAuthed) {
		return <p style={{ fontSize: 15 }}>Profili görmək üçün daxil olun.</p>
	}

	return (
		<div>
			<div className="wg-box pl-44 mb-20">
				<h4>Profile Information</h4>
				<div className="my-profiles-wrap">
					{loadingProfile ? (
						<p style={{ fontSize: 14, marginBottom: 16 }}>Yüklənir…</p>
					) : null}
					{isError ? (
						<p className="text-danger mb-3" style={{ fontSize: 14 }}>
							{getAxiosErrorMessage(error, 'Məlumat alınmadı.')}
						</p>
					) : null}
					<div className="avatar-image">
						<div className="left">
							<img src={avatarSrc} alt="" />
							<div className="icon" aria-hidden>
								<i className="flaticon-delete" />
							</div>
						</div>
						<div className="right">
							<label className="uploadfile">
								<input type="file" name="image" accept=".jpg,.jpeg,.png,.webp" onChange={onImageChange} />
								<div className="tf-button-primary style-bg-white">
									Upload Images<i className="flaticon-upload-1" />
								</div>
								<p className="file-name">
									Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg &amp; .png
								</p>
							</label>
						</div>
					</div>
					<form className="form-profiles flex gap30 flex-column" onSubmit={onSubmitProfile}>
						{profileError ? (
							<p className="text-danger mb-0" style={{ fontSize: 14 }}>
								{profileError}
							</p>
						) : null}
						{profileOk ? (
							<p style={{ fontSize: 14, color: 'var(--Fourth, #1a5c4a)' }}>{profileOk}</p>
						) : null}
						{normalizeEmail(email) !== baselineEmailNorm && baselineEmailNorm ? (
							<p style={{ fontSize: 13, marginBottom: 0, color: 'var(--Secondary, #333)' }}>
								E-poçt dəyişibsə Save sorğu atmır: modal açılır, yalnız Təsdiqlə düyməsindən sonra profil yenilənir.
							</p>
						) : null}
						<div className="cols">
							<fieldset className="name has-top-title">
								<input
									id="profile-name"
									type="text"
									placeholder="Ad"
									name="name"
									value={name}
									onChange={(ev) => setName(ev.target.value)}
									autoComplete="name"
									required
								/>
								<label htmlFor="profile-name">Ad</label>
							</fieldset>
							<fieldset className="email has-top-title">
								<input
									id="profile-email"
									type="email"
									placeholder="Email"
									name="email"
									value={email}
									onChange={(ev) => setEmail(ev.target.value)}
									autoComplete="email"
									required
								/>
								<label htmlFor="profile-email">Email</label>
							</fieldset>
						</div>
						<div className="cols">
							<fieldset className="phone has-top-title">
								<input
									id="profile-mobile"
									type="tel"
									placeholder="Telefon"
									name="mobile"
									value={mobile}
									onChange={(ev) => setMobile(ev.target.value)}
									autoComplete="tel"
								/>
								<label htmlFor="profile-mobile">Telefon</label>
							</fieldset>
						</div>
						<div className="button-submit mt-10">
							<button className="tf-button-primary" type="submit" disabled={busyProfile || loadingProfile}>
								Save Profile<i className="icon-arrow-right-add" />
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="wg-box pl-44">
				<h4>Change password</h4>
				<div className="my-change-password">
					<form className="form-change-password flex gap30 flex-column" onSubmit={onSubmitPassword}>
						{pwError ? (
							<p className="text-danger mb-0" style={{ fontSize: 14 }}>
								{pwError}
							</p>
						) : null}
						{pwOk ? (
							<p style={{ fontSize: 14, color: 'var(--Fourth, #1a5c4a)' }}>{pwOk}</p>
						) : null}
						<fieldset className="password has-top-title">
							<input
								id="pw-old"
								type="password"
								placeholder="Köhnə şifrə"
								name="old_password"
								value={oldPassword}
								onChange={(ev) => setOldPassword(ev.target.value)}
								autoComplete="current-password"
								required
							/>
							<label htmlFor="pw-old">Köhnə şifrə</label>
						</fieldset>
						<div className="cols">
							<fieldset className="password has-top-title">
								<input
									id="pw-new"
									type="password"
									placeholder="Yeni şifrə"
									name="password"
									value={newPassword}
									onChange={(ev) => setNewPassword(ev.target.value)}
									autoComplete="new-password"
									required
								/>
								<label htmlFor="pw-new">Yeni şifrə</label>
							</fieldset>
							<fieldset className="password has-top-title">
								<input
									id="pw-new2"
									type="password"
									placeholder="Yeni şifrə (təkrar)"
									name="password_confirmation"
									value={newPassword2}
									onChange={(ev) => setNewPassword2(ev.target.value)}
									autoComplete="new-password"
									required
								/>
								<label htmlFor="pw-new2">Təkrar</label>
							</fieldset>
						</div>
						<div className="button-submit mt-10">
							<button className="tf-button-primary" type="submit" disabled={busyPw}>
								Change Password<i className="icon-arrow-right-add" />
							</button>
						</div>
					</form>
				</div>
			</div>

			{otpModalOpen ? (
				<>
					<div
						className="modal fade modalCenter show"
						id="modal-email-otp"
						style={{ display: 'block' }}
						role="dialog"
						aria-modal="true"
						aria-labelledby="email-otp-title"
					>
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content modal-sm" style={{ padding: '8px 0' }}>
								<button
									type="button"
									className="btn-hide-modal"
									style={{ position: 'absolute', right: 12, top: 12, zIndex: 2 }}
									onClick={closeOtpModal}
									aria-label="Bağla"
								>
									<i className="icon-close" />
								</button>
								<div className="content-right" style={{ padding: '24px 28px' }}>
									<h4 id="email-otp-title" style={{ marginBottom: 8 }}>
										E-poçt təsdiqi
									</h4>
									{otpHint ? (
										<p style={{ fontSize: 14, marginBottom: 12, color: 'var(--Fourth, #1a5c4a)' }}>
											{otpHint}
										</p>
									) : null}
									<p style={{ fontSize: 14, marginBottom: 16 }}>
										<strong>{pendingProfile?.email?.trim()}</strong> ünvanına göndərilən altı rəqəmli kodu
										daxil edin. Kod düzgün olanda e-poçt dəyişəcək.
									</p>
									<form onSubmit={onConfirmEmailOtp}>
										<OtpSixDigitBlock
											key={otpResendKey}
											onCodeChange={setOtpCode}
											onResend={onResendEmailOtp}
											error={otpError}
											disabled={
												verifyProfileEmailMutation.isPending ||
												updateMutation.isPending
											}
											onClearError={() => setOtpError('')}
										/>
										<div className="button-submit w-full mt-3">
											<button
												type="submit"
												className="tf-button-primary w-full"
												disabled={
													otpCode.length !== 6 ||
													verifyProfileEmailMutation.isPending ||
													updateMutation.isPending
												}
											>
												Kodu təsdiqlə
												<i className="icon-arrow-right-add" />
											</button>
										</div>
										<button
											type="button"
											className="w-full mt-2"
											style={{
												background: 'none',
												border: 0,
												cursor: 'pointer',
												fontSize: 14,
												color: 'var(--Secondary)',
											}}
											onClick={closeOtpModal}
										>
											Ləğv et
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div
						className="modal-backdrop fade show"
						style={{ display: 'block' }}
						onClick={closeOtpModal}
						aria-hidden
					/>
				</>
			) : null}
		</div>
	)
}
