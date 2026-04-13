
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"

export default function FlatBrand1() {
	return (
		<>

			<section className="tf-section-default flat-brand bg-fourth">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<p className="wow fadeInUp">Trusted by the world’s best</p>
						</div>
						<div className="col-12">
							<div className="swiper-container slider-brand">
								<SliderBrand colorWhite />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
