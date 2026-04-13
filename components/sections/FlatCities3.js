
'use client'
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderCities1 = {
	modules: [Navigation, Pagination],
	spaceBetween: 19,
	slidesPerView: 5,
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
			slidesPerView: 5,
		},
	},
}

export default function FlatCities3() {
	return (
		<>

			<section className="tf-section flat-cities style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Explore Cities</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="wrap arrow-style-1 arrow-over">
								<div className="swiper-container slider-cities-1">
									<Swiper {...sliderCities1}>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp">
												<div className="image">
													<img src="/images/image-box/cities-1.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>New York</h4>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp" data-wow-delay="0.1s">
												<div className="image">
													<img src="/images/image-box/cities-2.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>Chicago</h4>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp" data-wow-delay="0.15s">
												<div className="image">
													<img src="/images/image-box/cities-3.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>Los Angeles</h4>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp" data-wow-delay="0.2s">
												<div className="image">
													<img src="/images/image-box/cities-4.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>Miami</h4>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp" data-wow-delay="0.25s">
												<div className="image">
													<img src="/images/image-box/cities-5.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>Florida</h4>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-1 wow fadeInUp" data-wow-delay="0.3s">
												<div className="image">
													<img src="/images/image-box/cities-4.jpg" alt="" />
												</div>
												<div className="content">
													<p>13 Properties</p>
													<h4>Miami</h4>
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
