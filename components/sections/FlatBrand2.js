
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"

export default function FlatBrand2() {
	return (
		<>

			<section className="tf-section-default flat-brand background-secondary">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<p>Thousands of world’s leading companies trust Space</p>
						</div>
						<div className="col-12">
							<div className="swiper-container slider-brand">
								<SliderBrand colorWhite/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
