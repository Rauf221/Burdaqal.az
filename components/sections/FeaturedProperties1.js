
import Link from "next/link"
import SliderBoxDream from "../slider/SliderBoxDream"

export default function FeaturedProperties1() {
	return (
		<>

			<section className="tf-section featured-properties">
				<div className="widget-tabs style-3">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="flex justify-between items-center flex-wrap">
									<div className="heading-section">
										<h2 className="wow fadeInUp">Featured Properties</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur
											adipiscing elit.</div>
									</div>
									<ul className="widget-menu-tab mb-10">
										<li className="item-title active">
											<span className="inner">For Rent</span>
										</li>
										<li className="item-title">
											<span className="inner">For Sale</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="widget-content-tab">
							<div className="widget-content-inner active">
								<div className="row">
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/archer-house">Archer House</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={5} end={7} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde Park</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/home-pitt-street">Home Pitt Street</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={4} end={6} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-on-hollywood-boulevard">Villa on Hollywood
															Boulevard</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/house-on-the-beverly-hills">House on the beverly
															hills</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/house-on-the-beverly-hills">House on the beverly
															hills</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="widget-content-inner">
								<div className="row">
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/archer-house">Archer House</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={4} end={6} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde Park</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/home-pitt-street">Home Pitt Street</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={2} end={4} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-on-hollywood-boulevard">Villa on Hollywood
															Boulevard</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/house-on-the-beverly-hills">House on the beverly
															hills</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-md-6 col-12">
										<div className="box-dream mb-30 has-border">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="button-heart"><i className="flaticon-heart-1" /></div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={4} end={6} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/house-on-the-beverly-hills">House on the beverly
															hills</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>4 Beds</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>3 Baths</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>2660 Sqft</p>
													</div>
												</div>
											</div>
										</div>
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
