
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
const slider4Center = {
	spaceBetween: 28,
	loop: true,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 2,
		},
	},
}

import CounterNumber from '@/components/elements/CounterNumber'
import Layout from "@/components/layout/Layout"
import SliderBrand from "@/components/slider/SliderBrand"
import SliderNews from "@/components/slider/SliderNews"
import SliderTestimonial from "@/components/slider/SliderTestimonial"
import Link from "next/link"
export default function About() {

	return (
		<>

			<Layout breadcrumbTitle="title" mainContentCls="px-20 default">
				<div>
					<section className="tf-section vision-mission">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="content">
										<div className="vision">
											<h2 className="wow fadeInUp">Vision</h2>
											<p className="wow fadeInUp">Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.</p>
										</div>
										<div className="mission">
											<h2 className=" wow fadeInUp" data-wow-delay="0.1s">Mission</h2>
											<p className=" wow fadeInUp" data-wow-delay="0.1s">Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum. </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /vision-mission */}
					{/* slider */}
					<section className="tf-section-default">
						<div className="themesflat-container">
							<div className="row justify-center">
								<div className="col-xxl-10">
									<div className="swiper-container slider-4-center">
										<Swiper {...slider4Center}>
											<SwiperSlide>
												<img src="/images/slider/slider-about-1.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-2.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-3.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-4.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-1.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-2.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-1.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-2.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-3.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-4.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-1.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-about-2.jpg" alt="" />
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /slider */}
					{/* flat-counter */}
					<section className="tf-section flat-counter">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Take a look at our numbers</h2>
										<div className="text wow fadeInUp">Based on your view history</div>
									</div>
								</div>
							</div>
							<div className="counter">
								<div className="row">
									<div className="col-xl-3 col-md-6">
										<div className="number-counter style-1">
											<div className="text-center">
												$<CounterNumber count={16} /> M
											</div>
											<h4>Owned from properties <br /> transactions</h4>
											<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
										</div>
									</div>
									<div className="col-xl-3 col-md-6">
										<div className="number-counter style-1">
											<div className="text-center">
												<CounterNumber count={26} />K+
											</div>
											<h4>Properties For <br /> Buy</h4>
											<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
										</div>
									</div>
									<div className="col-xl-3 col-md-6">
										<div className="number-counter style-1">
											<div className="text-center">
												<CounterNumber count={26} />K+
											</div>
											<h4>Properties Buy <br /> Sell</h4>
											<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
										</div>
									</div>
									<div className="col-xl-3 col-md-6">
										<div className="number-counter style-1">
											<div className="text-center">
												<CounterNumber count={26} />
											</div>
											<h4>Daily Completed <br /> Transactions</h4>
											<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /flat-counter */}
					{/* luxury-home */}
					<section className="tf-section luxury-home style-5">
						<div className="themesflat-container">
							<div className="row justify-between">
								<div className="col-md-6">
									<div className="image wow fadeInLeft">
										<img src="/images/section/luxury-home-4.jpg" alt="" />
										<div className="box">
											<div className="icon">
												<i className="flaticon-customer" />
											</div>
											<div>
												<p>Total Clients</p>
												<h4>7,000 M</h4>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-md-6">
									<div className="content">
										<h2 className="wow fadeInUp">Local expertise for <br /> luxury homes</h2>
										<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
										<Link href="/#" className="tf-button-primary style-black wow fadeInUp">Learn More <i className="icon-arrow-right-add" /></Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /luxury-home */}
					{/* work-with-us */}
					<section className="tf-section work-with-us style-2 pt-0">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Why You Should Work With Us</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
									</div>
								</div>
							</div>
							<div className="row justify-center">
								<div className="col-xl-10">
									<div className="wrap">
										<div className="box-icon style-1 wow fadeInUp">
											<div className="icon has-ellipse">
												<i className="flaticon-house-1" />
											</div>
											<div className="content">
												<Link href="/#" className="title">Wide Range of Properties</Link>
												<p>We offer expert legal help for all related <br /> property items in Dubai.</p>
											</div>
										</div>
										<div className="box-icon style-1 wow fadeInUp" data-wow-delay="0.1s">
											<div className="icon has-ellipse">
												<i className="flaticon-home" />
											</div>
											<div className="content">
												<Link href="/#" className="title">Buy or Rent Homes</Link>
												<p>We sell your home at the best market price <br /> and very quickly as well.</p>
											</div>
										</div>
										<div className="box-icon style-1 wow fadeInUp" data-wow-delay="0.2s">
											<div className="icon has-ellipse">
												<i className="flaticon-shield" />
											</div>
											<div className="content">
												<Link href="/#" className="title">Thrusted by Thousands</Link>
												<p>We offer you free consultancy to get a loan <br /> for your new home.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /work-with-us */}
					{/* flat-testimonial */}
					<section className="tf-section flat-testimonial style-1">
						<div className="testimonials">
							<div className="themesflat-container">
								<div className="row justify-between">
									<div className="col-xl-4 col-md-6">
										<div className="testimonials-inner">
											<h2 className="wow fadeInUp">What our customers are saying us?</h2>
											<div className="text wow fadeInUp">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour <br /> and the like.</div>
											<div className="list">
												<div className="item wow fadeInUp">
													<h3>13m+</h3>
													<p>Happy People</p>
												</div>
												<div className="item wow fadeInUp" data-wow-delay="0.1s">
													<h3>4.88</h3>
													<p>Overall rating</p>
													<div className="ratings">
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-5 col-md-6">
										<div className="swiper-container padding-bottom-80 slider-testimonials arrow-style-1 pagination-style-number">
											<SliderTestimonial />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="divider" />
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<div className="text wow fadeInUp">Thousands of world’s leading companies trust Space</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="flat-brand">
										<div className="swiper-container slider-brand">
											<SliderBrand />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* /flat-testimonial */}
					{/* flat-experts */}
					<section className="tf-section flat-experts style-1">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Meet Our Team Of Experts</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
									</div>
								</div>
							</div>
							<div className="row wrap-experts">
								<div className="col-12">
									<div className="swiper-container slider-news slider-auto">
										<SliderNews />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}