
import Link from "next/link"

export default function FeaturedCategories4() {
	return (
		<>

			<section className="tf-section featured-categories style-3">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Featured Categories</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-12">
							<div className="wrap mobile-wrap">
								<div className="cities-item style-5 wow fadeInUp">
									<img src="/images/house/featured-7.jpg" alt="" />
									<div className="content">
										<h4>Town House</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-5 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/house/featured-8.jpg" alt="" />
									<div className="content">
										<h4>Apartment</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-5 wow fadeInUp" data-wow-delay="0.2s">
									<img src="/images/house/featured-9.jpg" alt="" />
									<div className="content">
										<h4>Modern Villa</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-5 wow fadeInUp" data-wow-delay="0.3s">
									<img src="/images/house/featured-10.jpg" alt="" />
									<div className="content">
										<h4>Single Family</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-5 wow fadeInUp" data-wow-delay="0.4s">
									<img src="/images/house/featured-11.jpg" alt="" />
									<div className="content">
										<h4>Office</h4>
										<p>17 Properties</p>
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
