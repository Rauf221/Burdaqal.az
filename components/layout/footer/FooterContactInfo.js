'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getContactQuery } from '@/services/client/contact'

export default function FooterContactInfo() {
	const locale = useLocale()
	const { data } = useQuery(getContactQuery(locale))
	const c = data?.data

	const line = c ? `${c.email} · ${c.phone}` : 'hi@justhome.com (123) 456-7890'
	const address = c?.address?.trim() || '90 Fifth Avenue, 3rd Floor San Francisco, CA 1980'

	return (
		<>
			<div className="footer-cl-4">
				<div className="ft-title">Contact Us</div>
				<ul className="navigation-menu-footer">
					<li>
						<div className="text">{line}</div>
					</li>
				</ul>
			</div>
			<div className="footer-cl-5">
				<div className="ft-title">Our Address</div>
				<ul className="navigation-menu-footer">
					<li>
						<div className="text">{address}</div>
					</li>
				</ul>
			</div>
		</>
	)
}
