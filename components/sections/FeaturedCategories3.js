
import Link from "next/link"

export default function FeaturedCategories3() {
	return (
		<>

			<section className="tf-section featured-categories style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center top-heading">
								<div className="heading-section">
									<h2 className="wow fadeInUp">Featured Categories</h2>
									<div className="text wow fadeInUp">Based on your view history</div>
								</div>
								<Link href="/property-grid-v2" className="tf-button-no-bg wow fadeInUp">
									View All Categories
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
						<div className="col-12">
							<div className="wrap mobile-wrap">
								<div className="categories-item style-1 wow fadeInUp">
									<div className="icon">
										<i className="flaticon-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Town House</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="categories-item style-1 wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon">
										<i className="flaticon-cottage" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Modern Villa</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="categories-item style-1 wow fadeInUp" data-wow-delay="0.15s">
									<div className="icon">
										<i className="flaticon-buildings" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Apartment</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="categories-item style-1 wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon">
										<i className="flaticon-office-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Office</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="categories-item style-1 wow fadeInUp" data-wow-delay="0.25s">
									<div className="icon">
										<i className="flaticon-cottage" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Office</Link>
										</div>
										<div className="text">20 Properties</div>
									</div>
								</div>
								<div className="categories-item style-1 wow fadeInUp" data-wow-delay="0.3s">
									<div className="icon">
										<i className="flaticon-building" />
									</div>
									<div>
										<div className="name">
											<Link href="/#">Office</Link>
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
