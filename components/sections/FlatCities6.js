
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderCities2 = {
	spaceBetween: 25,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1.15,
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
import Link from "next/link"

export default function FlatCities6() {
	return (
		<>

			<section className="tf-section flat-cities py-200 style-4">
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
					</div>
					<div className="row">
						<div className="col-12">
							<div className="wrap">
								<div className="swiper-container slider-cities-2">
									<Swiper {...sliderCities2}>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp">
												<img src="/images/house/featured-12.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Town House</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.1s">
												<img src="/images/house/featured-13.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Modern Villa</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.2s">
												<img src="/images/house/featured-14.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Apartment</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.3s">
												<img src="/images/house/featured-15.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Single Family</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.4s">
												<img src="/images/house/featured-16.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Office</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/house/featured-12.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Town House</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
