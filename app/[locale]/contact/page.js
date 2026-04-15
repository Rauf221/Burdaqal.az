
import Layout from "@/components/layout/Layout"
import SliderBrand from "@/components/slider/SliderBrand"
import { Link } from '@/i18n/navigation'
export default function Contact() {

	return (
		<>

			<Layout mainContentCls="spacing-20">
				<div>
					<div className="wrap-map-v5">
						{/* <div id="map-1" className="row-height" data-map-zoom={16} data-map-scroll="true" /> */}
						<iframe id="map-1" className="row-height" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
						<div className="grid-contact">
							<div className="contact-item wow fadeInUp">
								<div className="icon">
									<i className="flaticon-location-pin" />
								</div>
								<div className="content">
									<h4>Our Address</h4>
									<p>
										90 Fifth Avenue, 3rd Floor <br />
										San Francisco, CA 1980
									</p>
								</div>
								<div className="bot">
									<div className="text-content">See on Map</div>
								</div>
							</div>
							<div className="contact-item wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon">
									<i className="flaticon-phone" />
								</div>
								<div className="content">
									<h4>Contact Info</h4>
									<p>
										+088 (246) 642-27-10
									</p>
								</div>
								<div className="bot">
									<div className="text-content">Give us a call</div>
								</div>
							</div>
							<div className="contact-item wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon">
									<i className="flaticon-video-chat" />
								</div>
								<div className="content">
									<h4>Live Support</h4>
									<p>
										example@gmail.com
									</p>
								</div>
								<div className="bot">
									<div className="text-content">Open Live Chat</div>
								</div>
							</div>
						</div>
					</div>
					{/* send-message */}
					<section className="tf-section send-message">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Send Us a Message</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
									</div>
								</div>
							</div>
							<div className="row justify-center">
								<div className="col-xxl-8">
									<form className="form-send-message">
										<div className="cols">
											<fieldset className="name wow fadeInUp has-top-title">
												<input type="text" placeholder="Name" name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
												<label htmlFor>Name</label>
											</fieldset>
											<fieldset className="phone wow fadeInUp has-top-title">
												<input type="number" placeholder="Phone" name="phone" tabIndex={2} aria-required="true" required />
												<label htmlFor>Phone</label>
											</fieldset>
										</div>
										<fieldset className="email wow fadeInUp has-top-title">
											<input type="email" placeholder="Email" name="email" tabIndex={2} defaultValue="themesflat@gmail.com" aria-required="true" required />
											<label htmlFor>Email</label>
										</fieldset>
										<fieldset className="message wow fadeInUp has-top-title">
											<textarea name="message" rows={4} placeholder="Your Message" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum"} />
											<label htmlFor>Your Message</label>
										</fieldset>
										<div className="checkbox-item wow fadeInUp">
											<label>
												<p>I consent to having this website store my submitted information</p>
												<input type="checkbox" />
												<span className="btn-checkbox" />
											</label>
										</div>
										<div className="button-submit wow fadeInUp">
											<button className="tf-button-primary w-full" type="submit">Send Message<i className="icon-arrow-right-add" /></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					{/* /send-message */}
					{/* flat-partner */}
					<section className="tf-section flat-partner style-1 pt-0">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<div className="text wow fadeInUp">Thousands of world’s leading companies trust Space</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="flat-brand">
										<div className="swiper-container slider-brand">
											<SliderBrand />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /flat-partner */}
					{/* account-bar
					<section className="account-bar">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="flex justify-between items-center flex-wrap gap15">
										<div>
											<h3 className="wow fadeInUp">Become a Real Estate Agent</h3>
											<div className="text wow fadeInUp">We only work with the best companies around the globe</div>
										</div>
										<Link href="/#" className="tf-button-primary wow fadeInUp">Register Now<i className="icon-arrow-right-add" /></Link>
									</div>
								</div>
							</div>
						</div>
					</section> */}
				</div>

			</Layout>
		</>
	)
}