
import SliderNews from "../slider/SliderNews"

export default function FlatExperts3() {
	return (
		<>

			<section className="tf-section flat-experts style-1">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Meet Our Team Of Experts</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row wrap-experts">
						<div className="col-12">
							<div className="swiper-container slider-news slider-auto">
								<SliderNews />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
