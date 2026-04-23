'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getContactQuery } from '@/services/client/contact'

export default function FooterContactInfo() {
	const locale = useLocale()
	const { data } = useQuery(getContactQuery(locale))
	const c = data?.data

	const email = c?.email?.trim() || ''
	const phone = c?.phone?.trim() || ''
	const phoneHref = phone ? `tel:${phone.replace(/\s+/g, '')}` : ''
	const address = c?.address?.trim() || ''

	return (
		<>
			<div className="footer-cl-5">
				<div className="ft-title">Contact Us</div>
				<ul className="navigation-menu-footer " >
					<li >
						<div className="text" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
							{email ? (
								<a href={`mailto:${email}`} style={{ color: 'inherit' }}>
									{email}
								</a>
							) : null}
						
							{phone ? (
								<a href={phoneHref} style={{ color: 'inherit' }}>
									{phone}
								</a>
							) : null}
						</div>
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
