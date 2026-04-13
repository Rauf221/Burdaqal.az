
import Link from "next/link"
import SliderTestimonial from "../slider/SliderTestimonial"

export default function FlatTestimonial3() {
	return (
		<>

			<section className="tf-section flat-testimonial style-2">
				<div className="testimonials">
					<div className="themesflat-container">
						<div className="row justify-between">
							<div className="col-xl-4 col-md-6">
								<div className="testimonials-inner">
									<h2 className="wow fadeInUp">What our customers are saying us?</h2>
									<div className="text wow fadeInUp">Various versions have evolved over the years,
										sometimes by accident, sometimes on purpose injected humour <br /> and the
										like.
									</div>
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
			</section>
		</>
	)
}
