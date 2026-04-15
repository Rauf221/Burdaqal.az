'use client'
import ChartList from "@/components/chart/ChartList"
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import { PROPERTY_GRID, getPropertyTitle, propertyDetailHref } from "@/utils/propertyRoutes"
import { Link } from '@/i18n/navigation'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function PropertySingleV5({ slug }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const title = getPropertyTitle(slug)

	// Swiper options for the main slider
	const mainSwiperOptions = {
		spaceBetween: 0,
		navigation: true,
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
		navigation: {
			nextEl: ".thumbs-next",
			prevEl: ".thumbs-prev",
		},
	}

	// Swiper options for the thumbnail slider
	const thumbnailSwiperOptions = {
		modules: [FreeMode, Navigation, Thumbs],
		spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		direction: "vertical",
		watchSlidesProgress: true,
		breakpoints: {
			450: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			868: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
		},
	}

	return (
		<>

			<Layout>
				<div className="property-single-wrap v5">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="flex items-center justify-between gap30 flex-wrap pt-30 pb-30">
									<ul className="breadcrumbs style-1 justify-start">
										<li><Link href="/">Home</Link></li>
										<li>/</li>
										<li><Link href={PROPERTY_GRID}>Properties</Link></li>
										<li>/</li>
										<li>{title}</li>
									</ul>
									<div className="list-icons-page">
										<div className="item">
											<div className="icon">
												<i className="flaticon-heart" />
											</div>
											<p>Save</p>
										</div>
										<div className="item">
											<div className="icon">
												<i className="flaticon-before-after" />
											</div>
											<p>Compare</p>
										</div>
										<div className="item">
											<div className="icon">
												<i className="flaticon-outbox" />
											</div>
											<p>Share</p>
										</div>
										<div className="item">
											<div className="icon">
												<i className="flaticon-tools-and-utensils" />
											</div>
											<p>Print</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="head-title">
									<div>
										<h3 className="wow fadeInUp">{title}</h3>
										<div className="location wow fadeInUp">
											<div className="icon">
												<i className="flaticon-location" />
											</div>
											<div className="text-content">148-37 88th Ave, Jamaica, NY 11435</div>
										</div>
									</div>
									<div>
										<div className="square wow fadeInUp">Price</div>
										<div className="price wow fadeInUp">$989,000</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="thumbs-slider-column arrow-style-1">
									<Swiper {...mainSwiperOptions} className="swiper-container slider-thumbs-gallery-2">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="relative h-full">
													<div className="list-tags">
														<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
														<Link href="/#" className="tags-item featured">FEATURED</Link>
													</div>
													<img src="/images/slider/slider-properties-detail-11.jpg" alt="" />
												</div>
											</SwiperSlide>
										</div>
										<div className="swiper-button-next has-background thumbs-next" />
										<div className="swiper-button-prev has-background thumbs-prev" />
									</Swiper>
									<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-container slider-thumbs-gallery-1">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-12.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-13.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-14.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-15.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-16.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-15.jpg" alt="" />
											</SwiperSlide>
											<SwiperSlide>
												<img src="/images/slider/slider-properties-detail-16.jpg" alt="" />
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
							<div className="col-xl-8">
								<div className="content-wrap">
									<div className="overview">
										<h4 className="wow fadeInUp">Overview</h4>
										<div className="box-items">
											<div className="item wow fadeInUp">
												<div className="icon">
													<i className="flaticon-city" />
												</div>
												<div className="text-content">Multi Family</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.1s">
												<div className="icon">
													<i className="flaticon-hammer" />
												</div>
												<div className="text-content">Built in 1940</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.2s">
												<div className="icon">
													<i className="flaticon-minus-front" />
												</div>
												<div className="text-content">1500 Sq Ft</div>
											</div>
											<div className="item wow fadeInUp">
												<div className="icon">
													<i className="flaticon-hotel" />
												</div>
												<div className="text-content">3 Bedrooms</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.1s">
												<div className="icon">
													<i className="flaticon-bath-tub" />
												</div>
												<div className="text-content">2 Bathrooms</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.2s">
												<div className="icon">
													<i className="flaticon-garage" />
												</div>
												<div className="text-content">1 Garage</div>
											</div>
										</div>
									</div>
									<div className="widget-tabs style-2">
										<ul className="widget-menu-tab wow fadeInUp">
											<li className="item-title active">
												<span className="inner">Description</span>
											</li>
											<li className="item-title">
												<span className="inner">Address</span>
											</li>
											<li className="item-title">
												<span className="inner">Details</span>
											</li>
											<li className="item-title">
												<span className="inner">Features</span>
											</li>
											<li className="item-title">
												<span className="inner">Floor Plans</span>
											</li>
											<li className="item-title">
												<span className="inner">Video</span>
											</li>
											<li className="item-title">
												<span className="inner">360 Tours</span>
											</li>
											<li className="item-title">
												<span className="inner">Maps</span>
											</li>
											<li className="item-title">
												<span className="inner">Property Views</span>
											</li>
										</ul>
										<div className="widget-content-tab">
											<div className="widget-content-inner active">
												<div className="desc">
													<h4 className="wow fadeInUp">Description</h4>
													<p className="wow fadeInUp">
														Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room.
														<br />
														<br />
														Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.
													</p>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="address">
													<div className="flex items-center justify-between gap30 flex-wrap">
														<h4 className="mb-0">Address</h4>
														<Link href="/#" className="tf-button-green"><i className="flaticon-location" />Open On Google Maps</Link>
													</div>
													<div className="list-item">
														<div className="item">
															<div className="text">Address</div>
															<p>10425 Tabor St</p>
														</div>
														<div className="item">
															<div className="text">Zip/Postal Code</div>
															<p>90034</p>
														</div>
														<div className="item">
															<div className="text">City</div>
															<p>Los Angeles</p>
														</div>
														<div className="item">
															<div className="text">Area</div>
															<p>Brookside</p>
														</div>
														<div className="item">
															<div className="text">State/county</div>
															<p>California</p>
														</div>
														<div className="item">
															<div className="text">Country</div>
															<p>United States</p>
														</div>
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="details">
													<h4>Details</h4>
													<div className="list-item">
														<div className="item">
															<div className="text">Property ID:</div>
															<p>HZ48</p>
														</div>
														<div className="item">
															<div className="text">Garage:</div>
															<p>1</p>
														</div>
														<div className="item">
															<div className="text">Price:</div>
															<p>$252,000</p>
														</div>
														<div className="item">
															<div className="text">Garage Size:</div>
															<p>200 SqFt</p>
														</div>
														<div className="item">
															<div className="text">Property Size:</div>
															<p>1500 Sq Ft</p>
														</div>
														<div className="item">
															<div className="text">Year Built:</div>
															<p>2024</p>
														</div>
														<div className="item">
															<div className="text">Bedrooms:</div>
															<p>6</p>
														</div>
														<div className="item">
															<div className="text">Property Type:</div>
															<p>Apartment</p>
														</div>
														<div className="item">
															<div className="text">Bathrooms:</div>
															<p>4</p>
														</div>
														<div className="item">
															<div className="text">Property Status:</div>
															<p>For Sale</p>
														</div>
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="features">
													<h4>Facts &amp; Features</h4>
													<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
													<ul>
														<li>
															<h5>Interior Details</h5>
															<div className="wrap-check-ellipse">
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Equipped Kitchen</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Gym</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Laundry</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Media Room</p>
																</div>
															</div>
														</li>
														<li>
															<h5>Outdoor Details</h5>
															<div className="wrap-check-ellipse">
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Back yard</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Basketball court</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Front yard</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Garage Attached</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Hot Bath</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Pool</p>
																</div>
															</div>
														</li>
														<li>
															<h5>Utilities Central</h5>
															<div className="wrap-check-ellipse">
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Central Air</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Electricity</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Heating</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Natural Gas</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Ventilation</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Water</p>
																</div>
															</div>
														</li>
														<li>
															<h5>Other Features</h5>
															<div className="wrap-check-ellipse">
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Chair Accessible</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Elevator </p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Fireplace</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Smoke detectors</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>Washer and dryer</p>
																</div>
																<div className="check-ellipse-item">
																	<div className="icon">
																		<i className="flaticon-check" />
																	</div>
																	<p>WiFi</p>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="plans">
													<h4>Floor Plans</h4>
													<div className="widget-tabs-1 style-3">
														<ul className="widget-menu-tab-1">
															<li className="item-title-1 active-1">
																<span className="inner">First Floor</span>
															</li>
															<li className="item-title-1">
																<span className="inner">Second Floor</span>
															</li>
															<li className="item-title-1">
																<span className="inner">Third Floor</span>
															</li>
														</ul>
														<div className="widget-content-tab-1">
															<div className="widget-content-inner-1 active-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
															<div className="widget-content-inner-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
															<div className="widget-content-inner-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="video">
													<h4>Video</h4>
													<div className="video-wrap">
														<img src="/images/image-box/video-2.jpg" alt="" />
														<VideoPopup />
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="tour">
													<h4>360° Virtual Tour</h4>
													<div className="image-group relative">
														<img src="/images/image-box/img-virtual-1.jpg" alt="" />
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="map">
													<h4>Map</h4>
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="page-views">
													<h4>Property Views</h4>
													<div className="area-chart">
														<ChartList style={1} />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="walk-score">
										<h4 className="wow fadeInUp">Walk Score</h4>
										<div className="wrap-walk-score">
											<div className="walk-score-item wow fadeInUp">
												<div className="icon">
													<i className="flaticon-walk" />
												</div>
												<div>
													<div className="title">Walk Score®</div>
													<p>96 / 100</p>
													<p>Walker's Paradise</p>
												</div>
											</div>
											<div className="walk-score-item wow fadeInUp" data-wow-delay="0.1s">
												<div className="icon">
													<i className="flaticon-bike" />
												</div>
												<div>
													<div className="title">Bike Score®</div>
													<p>96 / 100</p>
													<p>Bikeable</p>
												</div>
											</div>
										</div>
									</div>
									<div className="nearby">
										<h4 className="wow fadeInUp">What's Nearby?</h4>
										<div className="widget-tabs style-2 type-small">
											<ul className="widget-menu-tab wow fadeInUp">
												<li className="item-title active">
													<span className="inner">Schools</span>
												</li>
												<li className="item-title">
													<span className="inner">Food</span>
												</li>
												<li className="item-title">
													<span className="inner">Health &amp; Medical</span>
												</li>
											</ul>
											<div className="widget-content-tab">
												<div className="widget-content-inner active">
													<div className="wrap-nearby">
														<div className="nearby-item wow fadeInUp">
															<div className="number">
																<h4>9<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Ps 95 Eastwood</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item wow fadeInUp">
															<div className="number">
																<h4>5<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Is 238 Susan B Anthony</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item wow fadeInUp">
															<div className="number">
																<h4>3<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Cambria Heights Academy</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="widget-content-inner">
													<div className="wrap-nearby">
														<div className="nearby-item">
															<div className="number">
																<h4>9<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Ps 95 Eastwood</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item">
															<div className="number">
																<h4>5<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Is 238 Susan B Anthony</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item">
															<div className="number">
																<h4>3<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Cambria Heights Academy</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="widget-content-inner">
													<div className="wrap-nearby">
														<div className="nearby-item">
															<div className="number">
																<h4>9<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Ps 95 Eastwood</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item">
															<div className="number">
																<h4>5<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Is 238 Susan B Anthony</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
														<div className="nearby-item">
															<div className="number">
																<h4>3<span>/10</span></h4>
															</div>
															<div>
																<div className="title">Cambria Heights Academy</div>
																<div className="flex items-center gap15">
																	<p>Grades: <span>K-5</span></p>
																	<p>Distance: <span>0.3 mi</span></p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="reviews-wrap">
										<div className="flex justify-between items-center mb-40 wow fadeInUp">
											<h4 className="mb-0">4 Reviews</h4>
											<Link href="/#" className="tf-button-green">Leave a Review</Link>
										</div>
										<ul>
											<li className="wow fadeInUp">
												<div className="image-group relative">
													<img src="/images/author/author-5.png" alt="" />
												</div>
												<div className="content">
													<div className="ratings">
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
													</div>
													<div className="name">
														<Link href="/#">Jane Cooper</Link>
													</div>
													<div className="time">April 06, 2024 at 7:55 pm</div>
													<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!</p>
												</div>
											</li>
											<li className="wow fadeInUp">
												<div className="image-group relative">
													<img src="/images/author/author-6.png" alt="" />
												</div>
												<div className="content">
													<div className="ratings">
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
														<i className="flaticon-star-1" />
													</div>
													<div className="name">
														<Link href="/#">Jane Cooper</Link>
													</div>
													<div className="time">April 06, 2024 at 7:55 pm</div>
													<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!</p>
												</div>
											</li>
										</ul>
									</div>
									<div className="leave-a-review">
										<h4 className="wow fadeInUp">Leave A Review</h4>
										<p className="wow fadeInUp">Your email address will not be published. Required fields are marked *</p>
										<div>
											<p className="wow fadeInUp">Your Rating *</p>
											<div className="ratings wow fadeInUp">
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
												<i className="flaticon-star-1" />
											</div>
										</div>
										<form className="form-comment">
											<fieldset className="message wow fadeInUp has-top-title">
												<textarea name="message" rows={4} placeholder="Your Comment" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum"} />
												<label htmlFor>Your Comment</label>
											</fieldset>
											<div className="cols">
												<fieldset className="name wow fadeInUp has-top-title">
													<input type="text" placeholder="Name" name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
													<label htmlFor>Name</label>
												</fieldset>
												<fieldset className="email wow fadeInUp has-top-title">
													<input type="email" placeholder="Email" name="email" tabIndex={2} defaultValue="themesflat@gmail.com" aria-required="true" required />
													<label htmlFor>Email</label>
												</fieldset>
											</div>
											<fieldset className="website wow fadeInUp has-top-title">
												<input type="text" placeholder="Website" name="text" tabIndex={2} aria-required="true" required />
												<label htmlFor>Website</label>
											</fieldset>
											<div className="checkbox-item wow fadeInUp">
												<label>
													<p>Save my name, email, and website in this browser for the next time I comment.</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</div>
											<div className="button-submit wow fadeInUp">
												<button className="tf-button-primary" type="submit">Submit Review <i className="icon-arrow-right-add" /></button>
											</div>
										</form>
									</div>
									<div className="smilar-homes">
										<h4 className="wow fadeInUp">Similar Homes</h4>
										<div className="row">
											<div className="col-md-6">
												<div className="box-dream has-border wow fadeInUp">
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
																<Link href={propertyDetailHref('home-pitt-street')}>Home Pitt Street</Link>
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
											</div>
											<div className="col-md-6">
												<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
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
																<Link href={propertyDetailHref('luxury-mansion')}>Luxury Mansion</Link>
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
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="property-single-sidebar">
									<div className="sidebar-item sidebar-schedule">
										<div className="sidebar-title">Schedule a tour</div>
										<form className="form-schedule">
											<div className="cols">
												<fieldset className="message">
													<input type="date" name="date" defaultValue="2023-11-20" />
												</fieldset>
												<select className="nice-select" tabIndex={0}>


													<option data-value className="option selected">6 AM</option>
													<option data-value="For Ren" className="option">12 AM</option>
													<option data-value="Sold" className="option">6 PM</option>
												</select>
											</div>
											<div className="widget-tabs style-4">
												<ul className="widget-menu-tab">
													<li className="item-title active">
														<span className="inner">In Person</span>
													</li>
													<li className="item-title">
														<span className="inner">Video Chat</span>
													</li>
												</ul>
												<div className="widget-content-tab">
													<div className="widget-content-inner flex-display active">
														<div className="cols">
															<fieldset className="name has-top-title">
																<input type="text" placeholder="Name" name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
																<label htmlFor>Name</label>
															</fieldset>
															<fieldset className="phone has-top-title">
																<input type="number" placeholder="Phone" name="number" tabIndex={2} aria-required="true" required />
																<label htmlFor>Phone</label>
															</fieldset>
															<fieldset className="email has-top-title">
																<input type="email" placeholder="Email" name="email" tabIndex={2} aria-required="true" required />
																<label htmlFor>Email</label>
															</fieldset>
														</div>
														<fieldset className="message has-top-title">
															<textarea name="message" rows={4} placeholder="Your Comment" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
															<label htmlFor>Your Comment</label>
														</fieldset>
													</div>
													<div className="widget-content-inner flex-display">
														<div className="cols">
															<fieldset className="name has-top-title">
																<input type="text" placeholder="Name" name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
																<label htmlFor>Name</label>
															</fieldset>
															<fieldset className="phone has-top-title">
																<input type="number" placeholder="Phone" name="number" tabIndex={2} aria-required="true" required />
																<label htmlFor>Phone</label>
															</fieldset>
															<fieldset className="email has-top-title">
																<input type="email" placeholder="Email" name="email" tabIndex={2} aria-required="true" required />
																<label htmlFor>Email</label>
															</fieldset>
														</div>
														<fieldset className="message has-top-title">
															<textarea name="message" rows={4} placeholder="Your Comment" tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum Dolar Sit Amet"} />
															<label htmlFor>Your Comment</label>
														</fieldset>
													</div>
												</div>
											</div>
											<div className="button-submit">
												<button className="tf-button-primary w-full" type="submit">Submit a Tour Request<i className="icon-arrow-right-add" /></button>
											</div>
										</form>
									</div>
									<div className="sidebar-item sidebar-contact-info">
										<div className="sidebar-title">Contact Information</div>
										<div className="contact-info">
											<div className="person">
												<div className="image-group relative">
													<img src="/images/sidebar/agent-1.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/#">Jane Cooper</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</div>
											<form className="form-comment">
												<div className="cols">
													<fieldset className="name has-top-title">
														<input type="text" placeholder="Name" name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
														<label htmlFor>Name</label>
													</fieldset>
													<fieldset className="phone has-top-title">
														<input type="number" placeholder="Phone" name="number" tabIndex={2} aria-required="true" required />
														<label htmlFor>Phone</label>
													</fieldset>
												</div>
												<div className="cols">
													<fieldset className="email has-top-title">
														<input type="email" placeholder="Email" name="email" tabIndex={2} aria-required="true" required />
														<label htmlFor>Email</label>
													</fieldset>
													<select className="nice-select" tabIndex={0}>


														<option data-value className="option selected">6 AM</option>
														<option data-value="For Ren" className="option">12 AM</option>
														<option data-value="Sold" className="option">6 PM</option>
													</select>
												</div>
												<fieldset className="message has-top-title">
													<textarea name="message" rows={4} placeholder="Message" tabIndex={2} aria-required="true" required defaultValue={""} />
													<label htmlFor>Message</label>
												</fieldset>
												<div className="button-submit">
													<button className="tf-button-primary w-full" type="submit">Send Message<i className="icon-arrow-right-add" /></button>
												</div>
												<div className="flex gap20">
													<Link href="/#" className="tf-button-primary w-full style-bg-white">Call<i className="flaticon-phone" /></Link>
													<Link href="/#" className="tf-button-primary w-full style-bg-white">WhatsApp<i className="flaticon-whatsapp" /></Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div >
					</div >
				</div >

			</Layout >
		</>
	)
}