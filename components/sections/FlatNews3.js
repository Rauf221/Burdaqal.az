
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"
import SliderNews from "../slider/SliderNews"

export default function FlatNews3() {
	return (
		<>

			<section className="tf-section flat-news style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Recent Articles &amp; News</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="swiper-container slider-news slider-auto">
							<SliderNews />
							</div>
						</div>
					</div>
				</div>
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<div className="text">Thousands of world’s leading companies trust Space</div>
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
		</>
	)
}
