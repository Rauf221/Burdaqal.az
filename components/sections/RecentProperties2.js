
'use client'
import Link from "next/link"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderRecentProperties = {
	modules: [Navigation, Pagination],
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".recent-properties-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}
import SliderBoxDream from "../slider/SliderBoxDream"

export default function RecentProperties2() {
	return (
		<>

			<section className="tf-section recent-properties pb-200">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center ps-0">
								<h2 className="wow fadeInUp">Recent Properties for Rent</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-12">
							<div className="swiper-container slider-recent-properties padding-bottom-80 pagination-style-2">
								<Swiper {...sliderRecentProperties}>
									<SwiperSlide>
										<div className="box-dream style-3 wow fadeInUp">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/archer-house">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-3 wow fadeInUp" data-wow-delay="0.1s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde Park</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-3 wow fadeInUp" data-wow-delay="0.15s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={3} end={5} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/home-pitt-street">Home Pitt Street</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-3 wow fadeInUp" data-wow-delay="0.2s">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={4} end={6} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/home-pitt-street">Home Pitt Street</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-3">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={1} end={3} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/archer-house">Archer House</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-3">
											<div className="image-group">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
													<SliderBoxDream path="house/home" start={2} end={4} />
												</div>
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-one-hyde-park">Villa One Hyde Park</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="icon-box style-border">
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
												<div className="bot">
													<div className="price">$815,000</div>
													<div className="button-heart style-1"><i className="flaticon-heart-1" /></div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className="swiper-pagination recent-properties-pagination" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
