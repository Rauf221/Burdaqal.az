
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"

export default function FlatPartner2() {
	return (
		<>

			<section className="tf-section flat-partner style-1">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<div className="text wow fadeInUp">Thousands of world’s leading companies trust Space
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="flat-brand">
							<div className="swiper-container slider-brand">
							<SliderBrand/>
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
