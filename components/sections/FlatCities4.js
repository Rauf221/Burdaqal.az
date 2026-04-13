
import Link from "next/link"
import SliderBrand from "../slider/SliderBrand"

export default function FlatCities4() {
	return (
		<>

			<section className="tf-section flat-cities style-3">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section ">
									<h2 className="wow fadeInUp">Find Properties in These Cities</h2>
									<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.</div>
								</div>
								<Link href="/property-grid-v2" className="tf-button-no-bg wow fadeInUp">
									View All Cities
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="inner style-1">
								<div className="cities-item style-4 item-1 wow fadeInUp">
									<img src="/images/image-box/cities-1.jpg" alt="" />
									<div className="content">
										<p>13 Properties</p>
										<h4>New York</h4>
									</div>
								</div>
								<div className="cities-item style-4 item-2 wow fadeInUp">
									<img src="/images/image-box/cities-2.jpg" alt="" />
									<div className="content">
										<p>55 Properties</p>
										<h4>Chicago</h4>
									</div>
								</div>
								<div className="cities-item style-4 item-3 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/image-box/cities-3.jpg" alt="" />
									<div className="content">
										<p>37 Properties</p>
										<h4>Los Angeles</h4>
									</div>
								</div>
								<div className="cities-item style-4 item-4 wow fadeInUp">
									<img src="/images/image-box/cities-4.jpg" alt="" />
									<div className="content">
										<p>26 Properties</p>
										<h4>San Francisco</h4>
									</div>
								</div>
								<div className="cities-item style-4 item-5 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/image-box/cities-5.jpg" alt="" />
									<div className="content">
										<p>93 Properties</p>
										<h4>Florida</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
