
import Link from "next/link"

export default function FlatArea() {
	return (
		<>

			<section className="tf-section flat-area">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Properties by Area</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp">
								<div className="image">
									<img src="/images/image-box/area-1.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/property-grid-v2">New York</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.1s">
								<div className="image">
									<img src="/images/image-box/area-2.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">San Dieago</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.15s">
								<div className="image">
									<img src="/images/image-box/area-3.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">Arizona</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp">
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
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.1s">
								<div className="image">
									<img src="/images/image-box/area-5.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">Los Angeles</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.15s">
								<div className="image">
									<img src="/images/image-box/area-6.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">Hawaii</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp">
								<div className="image">
									<img src="/images/image-box/area-7.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">Florida</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.1s">
								<div className="image">
									<img src="/images/image-box/area-8.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/property-grid-v2">Chicago</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-6">
							<div className="area-item wow fadeInUp" data-wow-delay="0.15s">
								<div className="image">
									<img src="/images/image-box/area-9.jpg" alt="" />
								</div>
								<div>
									<div className="name">
										<Link href="/#">Washington</Link>
									</div>
									<div className="text">20 Properties</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
