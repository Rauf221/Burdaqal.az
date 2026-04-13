
'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderBoxDream from "../slider/SliderBoxDream"
import { Navigation } from 'swiper/modules'

const sliderHomes = {
	modules:[Navigation],
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".homes-next",
		prevEl: ".homes-prev",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}


export default function FlatHomes2() {
	return (
		<>

			<section className="tf-section flat-homes">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Homes For You</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className=" arrow-style-1 arrow-over">
								<div className="swiper-container slider-homes">
									<Swiper {...sliderHomes}>
										<SwiperSlide>
											<div className="box-dream wow fadeInUp">
												<div className="image-group relative">
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream wow fadeInUp" data-wow-delay="0.1s">
												<div className="image-group relative">
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
															<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde
																Park</Link>
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream wow fadeInUp" data-wow-delay="0.2s">
												<div className="image-group relative">
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream">
												<div className="image-group relative">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<div className="button-heart"><i className="flaticon-heart-1" /></div>
													<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
														<SliderBoxDream path="house/home" start={4} end={6} />
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
										</SwiperSlide>
										<SwiperSlide>
											<div className="box-dream">
												<div className="image-group relative">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
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
															<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde
																Park</Link>
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
										</SwiperSlide>
									</Swiper>
								</div>
								<div className="homes-prev has-border swiper-button-prev" />
								<div className="homes-next has-border swiper-button-next" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
