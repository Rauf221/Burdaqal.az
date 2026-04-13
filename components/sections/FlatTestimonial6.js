
import Link from "next/link"
import SliderTestimonial from "../slider/SliderTestimonial"
import SliderBrand from "../slider/SliderBrand"

export default function FlatTestimonial6() {
	return (
		<>

			<section className="tf-section flat-testimonial style-1 background-secondary">
				<div className="testimonials">
					<div className="themesflat-container">
						<div className="row justify-between">
							<div className="col-xl-4 col-md-6">
								<div className="testimonials-inner">
									<h2 className="wow fadeInUp">What our customers are saying us?</h2>
									<div className="list">
										<div className="item wow fadeInUp">
											<h3>13m+</h3>
											<p>Happy People</p>
										</div>
										<div className="item wow fadeInUp" data-wow-delay="0.1s">
											<h3>4.88</h3>
											<p>Overall rating</p>
											<div className="ratings">
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5 col-md-6">
								<div className="swiper-container padding-bottom-80 slider-testimonials arrow-style-1 pagination-style-number">
									<SliderTestimonial styleWhite />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="divider" />
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section style-white text-center">
								<div className="text wow fadeInUp">Thousands of world’s leading companies trust Space
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="flat-brand">
								<div className="swiper-container slider-brand">
									<SliderBrand colorWhite />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
