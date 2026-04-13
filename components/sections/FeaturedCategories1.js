
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

export default function FeaturedCategories1() {
	return (
		<>

			<section className="tf-section featured-categories">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Featured Categories</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-12">
							<Swiper {...sliderRecentProperties} className="swiper-container padding-bottom-80 slider-recent-properties pagination-style-2">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="categories-item wow fadeInUp">
											<div className="icon">
												<i className="flaticon-building" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Town House</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="categories-item wow fadeInUp" data-wow-delay="0.1s">
											<div className="icon">
												<i className="flaticon-cottage" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Modern Villa</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="categories-item wow fadeInUp" data-wow-delay="0.15s">
											<div className="icon">
												<i className="flaticon-buildings" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Apartment</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="categories-item wow fadeInUp" data-wow-delay="0.15s">
											<div className="icon">
												<i className="flaticon-office-building" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Office</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="categories-item">
											<div className="icon">
												<i className="flaticon-buildings" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Apartment</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="categories-item">
											<div className="icon">
												<i className="flaticon-office-building" />
											</div>
											<div>
												<div className="name">
													<Link href="/#">Office</Link>
												</div>
												<div className="text">20 Properties</div>
											</div>
											<Link href="/#" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination recent-properties-pagination" />
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
