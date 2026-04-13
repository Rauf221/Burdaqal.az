'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	const pathname = usePathname()
	return (
		<>
			<div className="section-menu-left">
				<div className="menu-content">
					<ul>
						<li className={`${pathname === "/dashboard" ? "active" : ""}`}>
							<Link href="/dashboard"><i className="flaticon-hotel" />Dashboard</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-profile" ? "active" : ""}`}>
							<Link href="/dashboard-my-profile"><i className="flaticon-user" />My Profile</Link>
						</li>
						<li className={`${pathname === "/dashboard-add-properties" ? "active" : ""}`}>
							<Link href="/dashboard-add-properties"><i className="flaticon-plus" />Add New Properties</Link>
						</li>
						<li className={`${pathname === "/dashboard-my-properties" ? "active" : ""}`}>
							<Link href="/dashboard-my-properties"><i className="flaticon-home-2" />My Properties</Link>
						</li>
						<li>
							<Link href="/"><i className="flaticon-logout" />Logout</Link>
						</li>
					</ul>
				</div>
			</div>

		</>
	)
}
