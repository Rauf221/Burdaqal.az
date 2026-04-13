
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

export default function FlatCities5() {
	return (
		<>

			<section className="tf-section flat-cities style-4">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Find Properties in These Cities</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
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
												<img src="/images/image-box/cities-1.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>New York</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.1s">
												<img src="/images/image-box/cities-2.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Los Angeles</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.2s">
												<img src="/images/image-box/cities-3.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Miami</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.3s">
												<img src="/images/image-box/cities-4.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Florida</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2 wow fadeInUp" data-wow-delay="0.4s">
												<img src="/images/image-box/cities-5.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>San Francisco</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-4.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>Florida</h4>
												</div>
												<Link href="/property-grid-v2" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="cities-item style-2">
												<img src="/images/image-box/cities-5.jpg" alt="" />
												<div className="content">
													<p>23 Properties</p>
													<h4>San Francisco</h4>
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
