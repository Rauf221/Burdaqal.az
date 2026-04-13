
import Link from "next/link"

export default function FeaturedCategories5() {
	return (
		<>

			<section className="tf-section featured-categories style-4">
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
								<div className="cities-item style-6 wow fadeInUp">
									<div className="image">
										<img src="/images/house/featured-12.jpg" alt="" />
									</div>
									<div className="content">
										<h4>Town House</h4>
										<p>17 Properties</p>
									</div>
								</div>
								<div className="cities-item style-6 wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/house/featured-13.jpg" alt="" />
									</div>
									<div className="content">
										<h4>Apartment</h4>
										<p>17 Properties</p>
									</div>
								</div>
								<div className="cities-item style-6 wow fadeInUp" data-wow-delay="0.2s">
									<div className="image">
										<img src="/images/house/featured-14.jpg" alt="" />
									</div>
									<div className="content">
										<h4>Modern Villa</h4>
										<p>17 Properties</p>
									</div>
								</div>
								<div className="cities-item style-6 wow fadeInUp" data-wow-delay="0.3s">
									<div className="image">
										<img src="/images/house/featured-15.jpg" alt="" />
									</div>
									<div className="content">
										<h4>Office</h4>
										<p>17 Properties</p>
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
