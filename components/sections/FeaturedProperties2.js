
'use client'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const sliderFeatured = {
	modules: [Navigation, Pagination],
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".featured-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".featured-next",
		prevEl: ".featured-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 4,
		},
	},
}

export default function FeaturedProperties2() {
	return (
		<>

			<section className="tf-section featured-properties style-1">
				<div className="themesflat-container full">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center style-white">
								<h2 className="wow fadeInUp">Featured Properties</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-12">
							<div className="swiper-container slider-auto carouselright slider-featured arrow-style-1 pagination-style-progressbar">
								<Swiper {...sliderFeatured}>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
													<Link href="/#" className="tags-item featured">FEATURED</Link>
												</div>
												<img className="w-full" src="/images/house/featured-1.jpg" alt="" />
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
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-2.jpg" alt="" />
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
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-3.jpg" alt="" />
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
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-on-hollywood-boulevard">Villa on Hollywood
															Boulevard</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-2.jpg" alt="" />
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
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-3.jpg" alt="" />
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
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="box-dream style-absolute type-no-bg-content">
											<div className="image">
												<div className="list-tags">
													<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
												</div>
												<img className="w-full" src="/images/house/featured-4.jpg" alt="" />
											</div>
											<div className="content">
												<div className="head">
													<div className="title">
														<Link href="/property-grid-v2/villa-on-hollywood-boulevard">Villa on Hollywood
															Boulevard</Link>
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
												<div className="flex justify-between items-center">
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
													<div className="price">$815,000</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className="swiper-pagination featured-pagination" />
								<div className="bottom-wrap">
									<div className="featured-prev has-border type-white swiper-button-prev" />
									<div className="featured-next has-border type-white swiper-button-next" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
