'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import FooterContactInfo from '@/components/layout/footer/FooterContactInfo'
import FooterNewsletterForm from '@/components/layout/footer/FooterNewsletterForm'
import { useSiteBranding } from '@/providers/SiteBrandingProvider'
import { Link } from '@/i18n/navigation'
import { categoriesListQuery } from '@/services/dashboard/Add-New-Properties/queries'
import { getSocialMediaListQuery } from '@/services/client/settings'

function normalizeExternalLink(raw) {
	if (!raw || !String(raw).trim()) return '/#'
	const val = String(raw).trim()
	if (/^https?:\/\//i.test(val)) return val
	return `https://${val}`
}

export default function Footer1({ footerCls }) {
	const locale = useLocale()
	const branding = useSiteBranding()
	const logoFooter = branding.logoOnDarkBg
	const { data: categoriesRes } = useQuery(categoriesListQuery(locale))
	const categories = (categoriesRes?.data ?? []).slice(0, 6)
	const { data: socialRes } = useQuery(getSocialMediaListQuery())
	const socials = socialRes?.data ?? []
	return (
		<>

			<footer className={`footer ${footerCls ? footerCls : ""}`}>
				<div className="footer-inner">
					<div className="footer-inner-wrap">
						<div className="top-footer">
							<div className="logo-footer">
								<Link href="/">
									{logoFooter ? (
										<img
											id="logo-footer"
											src={logoFooter}
											alt=""
											style={{ width: '100%', height: '100%', objectFit: 'contain' }}
										/>
									) : null}
								</Link>
							</div>
							<div className="wg-social">
								<span>Follow Us</span>
								<ul className="list-social">
									{socials.length ? (
										socials.map((s, i) => (
											<li key={`${s.link}-${i}`}>
												<a href={normalizeExternalLink(s.link)} target="_blank" rel="noopener noreferrer">
													<img
														src={s.icon}
														alt=""
														style={{ width: 16, height: 16, objectFit: 'contain' }}
													/>
												</a>
											</li>
										))
									) : (
										<>
											<li>
												<Link href="/#">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-instagram" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-linkedin2" />
												</Link>
											</li>
										</>
									)}
								</ul>
							</div>
						</div>
						<div className="center-footer">
							<div className="footer-cl-1">
								<div className="ft-title">Subscribe</div>
								<FooterNewsletterForm />
								<div className="text">Subscribe to our newsletter to receive our weekly feed.</div>
							</div>
							<div className="footer-cl-2">
								<div className="ft-title">Discover</div>
								<ul className="navigation-menu-footer">
									{categories.length ? (
										categories.map((cat) => (
											<li key={cat.id}>
												<Link href={`/elanlar?category=${encodeURIComponent(cat.slug)}`}>{cat.name}</Link>
											</li>
										))
									) : (
										<li>
											<Link href="/elanlar">Elanlar</Link>
										</li>
									)}
								</ul>
							</div>
							<div className="footer-cl-3">
								<div className="ft-title">Quick Links</div>
								<ul className="navigation-menu-footer">
									<li><Link href="/">Ana Sehife</Link></li>
							     	<li><Link href="/elanlar">Burda Qal</Link></li>
									<li><Link href="/about">About</Link></li>
									<li><Link href="/contact">Contact</Link></li>
									<li><Link href="/about#faq">Faq</Link></li>
									<li><Link href="/bloglar">Blog</Link></li>
								</ul>
							</div>
							<FooterContactInfo />
							
						</div>
						<div className="bottom-footer">
							<div className="text">Copyright © 2024. MarkUp Agency</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
