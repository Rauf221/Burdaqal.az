
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"

export default function LuxuryHome2() {
	return (
		<>

			<section className="tf-section luxury-home style-1">
				<div className="themesflat-container">
					<div className="row justify-between">
						<div className="col-md-6">
							<div className="image wow fadeInLeft">
								<img src="/images/section/luxury-home-2.jpg" alt="" />
								<div className="box">
									<div className="icon">
										<i className="flaticon-customer" />
									</div>
									<div>
										<p>Total Clients</p>
										<h4>7,000 M</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-md-6">
							<div className="content">
								<h2 className="wow fadeInUp">Why You Should Work <br />
									With Us</h2>
								<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas
									faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum
									massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
								<ul>
									<li className="wow fadeInUp">
										<h4>Buy or Rent Homes</h4>
										<p>We sell your home at the best <br />
											market price and very quickly as well.</p>
									</li>
									<li className=" wow fadeInUp" data-wow-delay="0.1s">
										<h4>Thrusted by Thousands</h4>
										<p>We offer you free consultancy to <br />
											get a loan for your new home.</p>
									</li>
								</ul>
								<Link href="/#" className="tf-button-primary style-green wow fadeInUp">Learn More<i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<div className="text">Thousands of world’s leading companies trust Space</div>
							</div>
						</div>
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
		</>
	)
}
