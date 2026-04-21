'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { useLogoutMutation } from '@/services/client/auth/mutations'

export default function Sidebar() {
	const pathname = usePathname()
	const locale = useLocale()
	const logoutMutation = useLogoutMutation(locale)

	const onLogout = (e) => {
		e.preventDefault()
		logoutMutation.mutate(undefined, {
			onSettled: () => {
				window.location.href = `/${locale}`
			},
		})
	}

	return (
		<>
			<div id="dashboard-sidebar-nav" className="section-menu-left">
				<div className="menu-content">
					<ul>
						<li className={`${pathname === '/dashboard' ? 'active' : ''}`}>
							<Link href="/dashboard">
								<i className="flaticon-hotel" />
								Dashboard
							</Link>
						</li>
						<li className={`${pathname === '/dashboard-my-profile' ? 'active' : ''}`}>
							<Link href="/dashboard-my-profile">
								<i className="flaticon-user" />
								My Profile
							</Link>
						</li>
						<li className={`${pathname === '/dashboard-add-properties' ? 'active' : ''}`}>
							<Link href="/dashboard-add-properties">
								<i className="flaticon-plus" />
								Add New Properties
							</Link>
						</li>
						<li className={`${pathname === '/dashboard-my-properties' ? 'active' : ''}`}>
							<Link href="/dashboard-my-properties">
								<i className="flaticon-home-2" />
								My Properties
							</Link>
						</li>
						<li>
							<button type="button" onClick={onLogout} disabled={logoutMutation.isPending}>
								<i className="flaticon-logout" aria-hidden />
								{logoutMutation.isPending ? '…' : 'Logout'}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
