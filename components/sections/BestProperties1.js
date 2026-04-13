
import Link from "next/link"
import SliderBoxDream from "../slider/SliderBoxDream"
import VideoPopup from "../elements/VideoPopup"

export default function BestProperties1() {
	return (
		<>

			<section className="tf-section best-properties">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className=" wow fadeInUp" data-wow-delay="0.1s">Best Properties</h2>
								<div className="text wow fadeInUp" data-wow-delay="0.1s">Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="inner">
								<div className="properties-slider item-1 wow fadeInUp">
									<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
										<SliderBoxDream path="slider/slider-properties" start={0} end={2} />
									</div>

								</div>
								<div className="properties-content-default item-2 wow fadeInUp">
									<div className="number">260<span>+</span></div>
									<div className="text">Properties</div>
									<p>Explore our wide variety of properties to fid your dream home today</p>
									<Link href="/property-grid-v2/luxury-condo" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="video-wrap item-3 wow fadeInUp" data-wow-delay="0.1s">
									<img src="/images/image-box/video-1.jpg" alt="" />
									<VideoPopup />
								</div>
								<div className="box-dream style-absolute type-no-bg-content style-properties item-4 wow fadeInUp">
									<div className="image">
										<div className="list-tags">
											<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
											<Link href="/#" className="tags-item featured">FEATURED</Link>
										</div>
										<img className="w-full" src="/images/house/best-properties-1.jpg" alt="" />
									</div>
									<div className="content">
										<div className="head">
											<div className="title">
												<Link href="/property-grid-v2/luxury-condo">Luxury Condo</Link>
											</div>
										</div>
										<div className="location">
											<div className="icon">
												<i className="flaticon-location" />
											</div>
											<p>148-37 88th Ave, Jamaica, NY 11435</p>
										</div>
										<div className="flex flex-wrap justify-between items-center">
											<div className="price">$815,000</div>
											<div className="icon-box">
												<div className="item">
													<i className="flaticon-hotel" />
													<p>4</p>
												</div>
												<div className="item">
													<i className="flaticon-bath-tub" />
													<p>3</p>
												</div>
												<div className="item">
													<i className="flaticon-minus-front" />
													<p>2660</p>
												</div>
											</div>
										</div>
									</div>
									<Link href="/property-grid-v2/luxury-condo" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
