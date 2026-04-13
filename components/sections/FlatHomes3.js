'use client'
import Link from "next/link"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const sliderHouseFull = {
	modules: [Navigation],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".house-full-next",
		prevEl: ".house-full-prev",
		clickable: true,
	},
}

export default function FlatHomes3() {
	return (
		<>

			<section className="tf-section flat-homes style-1">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="arrow-style-1 arrow-over">
								<div className="swiper-container slider-house-full">
									<Swiper {...sliderHouseFull}>
										<SwiperSlide>
											<div className="box-dream style-full">
												<div className="row justify-between">
													<div className="col-lg-6">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/section/archer-house-1.jpg" alt="" />
														</div>
													</div>
													<div className="col-lg-6 col-xl-5">
														<div className="content">
															<div className="head wow fadeInUp">
																<div className="title">
																	<Link href="/property-grid-v2/archer-house">Archer
																		House</Link>
																</div>
															</div>
															<div className="location wow fadeInUp">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="text-content wow fadeInUp">Pellentesque
																egestas elementum egestas faucibus sem. Velit nunc
																egestas ut morbi. Leo diam diam nibh eget fermentum
																massa pretium. Mi mauris nulla ac dictum ut mauris
																non.</div>
															<div className="icon-box wow fadeInUp">
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
															<div className="price wow fadeInUp">$815,000</div>
															<Link href="/#" className="tf-button-primary wow fadeInUp">Learn
																More<i className="icon-arrow-right-add" /></Link>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream style-full">
												<div className="row justify-between">
													<div className="col-lg-6">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/section/archer-house-1.jpg" alt="" />
														</div>
													</div>
													<div className="col-lg-6 col-xl-5">
														<div className="content">
															<div className="head">
																<div className="title">
																	<Link href="/property-grid-v2/archer-house">Archer
																		House</Link>
																</div>
															</div>
															<div className="location">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="text-content">Pellentesque egestas elementum
																egestas faucibus sem. Velit nunc egestas ut morbi.
																Leo diam diam nibh eget fermentum massa pretium. Mi
																mauris nulla ac dictum ut mauris non.</div>
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
															<div className="price">$815,000</div>
															<Link href="/#" className="tf-button-primary">Learn More<i className="icon-arrow-right-add" /></Link>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream style-full">
												<div className="row justify-between">
													<div className="col-lg-6">
														<div className="image">
															<div className="list-tags">
																<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
																<Link href="/#" className="tags-item featured">FEATURED</Link>
															</div>
															<img className="w-full" src="/images/section/archer-house-1.jpg" alt="" />
														</div>
													</div>
													<div className="col-lg-6 col-xl-5">
														<div className="content">
															<div className="head">
																<div className="title">
																	<Link href="/property-grid-v2/archer-house">Archer
																		House</Link>
																</div>
															</div>
															<div className="location">
																<div className="icon">
																	<i className="flaticon-location" />
																</div>
																<p>148-37 88th Ave, Jamaica, NY 11435</p>
															</div>
															<div className="text-content">Pellentesque egestas elementum
																egestas faucibus sem. Velit nunc egestas ut morbi.
																Leo diam diam nibh eget fermentum massa pretium. Mi
																mauris nulla ac dictum ut mauris non.</div>
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
															<div className="price">$815,000</div>
															<Link href="/#" className="tf-button-primary">Learn More<i className="icon-arrow-right-add" /></Link>
														</div>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
								<div className="house-full-prev has-border swiper-button-prev" />
								<div className="house-full-next has-border swiper-button-next" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
