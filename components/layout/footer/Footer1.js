import { Link } from '@/i18n/navigation'
import FooterContactInfo from '@/components/layout/footer/FooterContactInfo'
import FooterNewsletterForm from '@/components/layout/footer/FooterNewsletterForm'

export default function Footer1({ footerCls }) {
	return (
		<>

			<footer className={`footer ${footerCls ? footerCls : ""}`}>
				<div className="footer-inner">
					<div className="footer-inner-wrap">
						<div className="top-footer">
							<div className="logo-footer">
								<Link href="/">
									<img id="logo-footer" src="/images/logo/logo-footer.svg" alt="images" />
								</Link>
							</div>
							<div className="wg-social">
								<span>Follow Us</span>
								<ul className="list-social">
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
									<li><Link href="/elanlar">Miami</Link></li>
									<li><Link href="/elanlar">New York</Link></li>
									<li><Link href="/elanlar">Chicago</Link></li>
									<li><Link href="/elanlar">Sacramento</Link></li>
									<li><Link href="/elanlar">Los Angeles</Link></li>
									<li><Link href="/elanlar">San Francisco</Link></li>
								</ul>
							</div>
							<div className="footer-cl-3">
								<div className="ft-title">Quick Links</div>
								<ul className="navigation-menu-footer">
									<li><Link href="/about">About</Link></li>
									<li><Link href="/contact">Contact</Link></li>
									<li><Link href="/about#faq">Faq</Link></li>
									<li><Link href="/bloglar">Blog</Link></li>
									<li><Link href="/#">Privacy Policy</Link></li>
									<li><Link href="/#">Terms &amp; Conditions</Link></li>
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
