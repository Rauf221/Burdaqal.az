
'use client'
import Link from "next/link"
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderCities = {
	modules: [Navigation, Pagination],
	spaceBetween: 25,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".cities-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4,
		},
		1440: {
			slidesPerView: 5,
		},
	},
}

export default function FlatCities2() {
	return (
		<>

			<section className="tf-section flat-cities style-1">
				<div className="themesflat-container full">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2>Find Properties in These Cities</h2>
								<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="wrap">
								<div className="swiper-container padding-bottom-80 pagination-style-2 slider-cities">
									<Swiper {...sliderCities}>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp">
												<img src="/images/image-box/cities-1.jpg" alt="" />
												<div className="content">
													<p>13 Properties</p>
													<h4>New York</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.1s">
												<img src="/images/image-box/cities-2.jpg" alt="" />
												<div className="content">
													<p>55 Properties</p>
													<h4>Chicago</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.15s">
												<img src="/images/image-box/cities-3.jpg" alt="" />
												<div className="content">
													<p>37 Properties</p>
													<h4>Los Angeles</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.2s">
												<img src="/images/image-box/cities-4.jpg" alt="" />
												<div className="content">
													<p>26 Properties</p>
													<h4>San Francisco</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.25s">
												<img src="/images/image-box/cities-5.jpg" alt="" />
												<div className="content">
													<p>93 Properties</p>
													<h4>Florida</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-6.jpg" alt="" />
												<div className="content">
													<p>84 Properties</p>
													<h4>Miami</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-4.jpg" alt="" />
												<div className="content">
													<p>26 Properties</p>
													<h4>San Francisco</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-5.jpg" alt="" />
												<div className="content">
													<p>93 Properties</p>
													<h4>Florida</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-6.jpg" alt="" />
												<div className="content">
													<p>84 Properties</p>
													<h4>Miami</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
									</Swiper>
									<div className="swiper-pagination cities-pagination" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
