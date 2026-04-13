
import Link from "next/link"
import SliderNews from "../slider/SliderNews"

export default function FlatNews6() {
	return (
		<>

			<section className="tf-section flat-news style-3">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section">
									<h2 className="wow fadeInUp">Recent Articles &amp; News</h2>
									<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.</div>
								</div>
								<Link href="/property-grid-v2" className="tf-button-no-bg wow fadeInUp">
									View All News
									<i className="icon-arrow-right-add" />
								</Link>
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
			</section>
		</>
	)
}
