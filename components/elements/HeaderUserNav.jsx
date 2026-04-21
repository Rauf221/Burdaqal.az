'use client'

import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useAuthSession } from '@/lib/auth/useAuthSession'
import { getUserProfileQuery } from '@/services/client/auth/queries'
import { pickUserDisplay } from '@/services/client/auth/userDisplay'
import { useLogoutMutation } from '@/services/client/auth/mutations'

/**
 * @param {object} props
 * @param {() => void} props.handleLogin — yalnız qonaq üçün: login modalını açır
 * @param {boolean} [props.inverse] — Header7 ağ ikon üçün
 * @param {'dark' | 'green'} [props.accountMenuTheme] — Header7 qara, Header12 yaşıl popup
 * @param {'header' | 'mobile'} [props.placement]
 * @param {() => void} [props.onAfterNavigate] — mobil menyunu bağlamaq üçün
 */
export default function HeaderUserNav({
	handleLogin,
	inverse = false,
	accountMenuTheme = 'green',
	placement = 'header',
	onAfterNavigate,
}) {
	const locale = useLocale()
	const isAuthed = useAuthSession()
	const [open, setOpen] = useState(false)
	const wrapRef = useRef(null)
	const logoutMutation = useLogoutMutation(locale)

	const { data: profilePayload } = useQuery({
		...getUserProfileQuery(locale),
		enabled: isAuthed,
	})

	const display = pickUserDisplay(profilePayload)

	useEffect(() => {
		if (!open) return
		const onDoc = (e) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', onDoc)
		return () => document.removeEventListener('mousedown', onDoc)
	}, [open])

	const go = () => {
		setOpen(false)
		onAfterNavigate?.()
	}

	const onLogout = (e) => {
		e.preventDefault()
		logoutMutation.mutate(undefined, {
			onSettled: () => {
				go()
				const path = `/${locale}`
				if (typeof window !== 'undefined') window.location.href = path
			},
		})
	}

	if (placement === 'mobile') {
		return (
			<div
				style={{
					marginTop: 20,
					paddingTop: 16,
					borderTop: '1px solid rgba(0,0,0,0.08)',
				}}
			>
				{!isAuthed ? (
					<button
						type="button"
						className="tf-button-primary w-full"
						onClick={() => {
							handleLogin()
							onAfterNavigate?.()
						}}
						style={{ justifyContent: 'center' }}
					>
						Daxil ol / Qeydiyyat
					</button>
				) : (
					<div>
						<p style={{ fontWeight: 600, marginBottom: 4 }}>{display.title}</p>
						{display.subtitle ? (
							<p style={{ fontSize: 13, opacity: 0.75, marginBottom: 12 }}>{display.subtitle}</p>
						) : null}
						<ul className="navigation clearfix" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
							<li style={{ marginBottom: 8 }}>
								<Link href="/dashboard" onClick={go}>
									Dashboard
								</Link>
							</li>
							<li style={{ marginBottom: 8 }}>
								<Link href="/dashboard-my-profile" onClick={go}>
									Profilim
								</Link>
							</li>
							<li>
								<button
									type="button"
									onClick={onLogout}
									disabled={logoutMutation.isPending}
									style={{
										background: 'none',
										border: 'none',
										padding: 0,
										cursor: 'pointer',
										color: 'inherit',
										font: 'inherit',
									}}
								>
									{logoutMutation.isPending ? 'Çıxış…' : 'Çıxış'}
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		)
	}

	if (!isAuthed) {
		return (
			<button
				type="button"
				onClick={handleLogin}
				className={`header-user header-user--btn ${inverse ? 'style-white' : ''}`}
			>
				<div className="icon">
					<i className="flaticon-user" />
				</div>
			</button>
		)
	}

	return (
		<div ref={wrapRef} className="header-user-nav-wrap">
			<button
				type="button"
				className={`header-user-login header-user-login--btn ${inverse ? 'style-white' : ''}`}
				onClick={() => setOpen((v) => !v)}
			>
				<div className={`header-user ${inverse ? 'style-white' : ''}`}>
					<div className="icon">
						<i className="flaticon-user" />
					</div>
				</div>
				<span className="name">{display.title}</span>
			</button>
			{open ? (
				<div
					className={`header-user-dropdown header-user-dropdown--theme-${accountMenuTheme}`}
				>
					<p className="header-user-dropdown__title">{display.title}</p>
					{display.subtitle ? (
						<p className="header-user-dropdown__email">{display.subtitle}</p>
					) : null}
					<div className="header-user-dropdown__actions">
						<Link
							href="/dashboard-my-profile"
							className="header-user-dropdown__action"
							onClick={go}
						>
							Profilim
						</Link>
						<Link href="/dashboard" className="header-user-dropdown__action" onClick={go}>
							Dashboard
						</Link>
						<button
							type="button"
							className="header-user-dropdown__action header-user-dropdown__action--outline"
							onClick={onLogout}
							disabled={logoutMutation.isPending}
						>
							{logoutMutation.isPending ? 'Çıxış…' : 'Çıxış'}
						</button>
					</div>
				</div>
			) : null}
		</div>
	)
}
