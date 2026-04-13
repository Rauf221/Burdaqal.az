
import Link from "next/link"

export default function PropertiesCities() {
	return (
		<>

			<section className="tf-section properties-cities">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section">
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
						<div className="col-12">
							<div className="wrap mobile-wrap">
								<div className="area-item style-1 wow fadeInUp">
									<div className="image">
										<img src="/images/image-box/area-1.jpg" alt="" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">San Francisco</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="area-item style-1 wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/image-box/area-2.jpg" alt="" />
									</div>
									<div>
										<div className="name">
											<Link href="/property-grid-v2">New York</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="area-item style-1 wow fadeInUp" data-wow-delay="0.15s">
									<div className="image">
										<img src="/images/image-box/area-3.jpg" alt="" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Los Angeles</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="area-item style-1 wow fadeInUp" data-wow-delay="0.2s">
									<div className="image">
										<img src="/images/image-box/area-4.jpg" alt="" />
									</div>
									<div>
										<div className="name">
											<Link href="/property-grid-v2">Miami</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="area-item style-1 wow fadeInUp" data-wow-delay="0.25s">
									<div className="image">
										<img src="/images/image-box/area-5.jpg" alt="" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">San Diego</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
