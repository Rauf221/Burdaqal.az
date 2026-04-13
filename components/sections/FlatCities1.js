
import Link from "next/link"

export default function FlatCities1() {
	return (
		<>

			<section className="tf-section flat-cities">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className=" wow fadeInUp" data-wow-delay="0.1s">Find Properties in These Cities</h2>
								<div className="text wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="inner">
								<div className="cities-item item-1 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/image-box/cities-1.jpg" alt="" />
									<div className="content">
										<p>13 Properties</p>
										<h4>New York</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item item-2 wow fadeInUp" data-wow-delay="0.15s">
									<img src="/images/image-box/cities-2.jpg" alt="" />
									<div className="content">
										<p>55 Properties</p>
										<h4>Chicago</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item item-3 wow fadeInUp" data-wow-delay="0.2s">
									<img src="/images/image-box/cities-3.jpg" alt="" />
									<div className="content">
										<p>37 Properties</p>
										<h4>Los Angeles</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item item-4 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/image-box/cities-4.jpg" alt="" />
									<div className="content">
										<p>26 Properties</p>
										<h4>San Francisco</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item item-5 wow fadeInUp" data-wow-delay="0.15s">
									<img src="/images/image-box/cities-5.jpg" alt="" />
									<div className="content">
										<p>93 Properties</p>
										<h4>Florida</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item item-6 wow fadeInUp" data-wow-delay="0.2s">
									<img src="/images/image-box/cities-6.jpg" alt="" />
									<div className="content">
										<p>84 Properties</p>
										<h4>Miami</h4>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
