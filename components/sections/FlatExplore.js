
import Link from "next/link"

export default function FlatExplore() {
	return (
		<>

			<section className="tf-section flat-explore">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Explore Our Properties</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-12">
							<div className="wrap">
								<div className="cities-item style-3 wow fadeInUp">
									<img src="/images/house/our-properties-1.jpg" alt="" />
									<div className="content">
										<h4>Town House</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-3 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/house/our-properties-2.jpg" alt="" />
									<div className="content">
										<h4>Modern Villa</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-3 wow fadeInUp" data-wow-delay="0.15s">
									<img src="/images/house/our-properties-3.jpg" alt="" />
									<div className="content">
										<h4>Apartment</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-3 wow fadeInUp" data-wow-delay="0.2s">
									<img src="/images/house/our-properties-4.jpg" alt="" />
									<div className="content">
										<h4>Single Family</h4>
										<p>17 Properties</p>
									</div>
									<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="cities-item style-3 wow fadeInUp" data-wow-delay="0.25s">
									<img src="/images/house/our-properties-5.jpg" alt="" />
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
