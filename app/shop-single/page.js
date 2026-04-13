'use client'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
const sliderNews = {
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
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

import Layout from "@/components/layout/Layout"
export default function ShopSingle() {

	return (
		<>

			<Layout breadcrumbTitle="title">
				<div>
					<div className="shop-detail-wrap">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-lg-7">
									<div className>
										<div className="widget-tabs style-img">
											<ul className="widget-menu-tab">
												<li className="item-title active">
													<img src="/images/shop/shop-4.png" alt="" />
												</li>
												<li className="item-title">
													<img src="/images/shop/shop-8.png" alt="" />
												</li>
												<li className="item-title">
													<img src="/images/shop/shop-6.png" alt="" />
												</li>
											</ul>
											<div className="widget-content-tab">
												<div className="widget-content-inner active">
													<img src="/images/shop/shop-detail.png" alt="" />
												</div>
												<div className="widget-content-inner">
													<img src="/images/shop/shop-detail.png" alt="" />
												</div>
												<div className="widget-content-inner">
													<img src="/images/shop/shop-detail.png" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5">
									<div className="shop-detail-content">
										<h2>Coffe Thermos</h2>
										<h3>$399</h3>
										<div className="divider" />
										<div className="check">
											<div className="icon">
												<svg width={7} height={6} viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M6.91964 1.03572C6.91964 0.924108 6.875 0.8125 6.79464 0.732143L6.1875 0.125C6.10714 0.0446429 5.99554 0 5.88393 0C5.77232 0 5.66071 0.0446429 5.58036 0.125L2.65179 3.05803L1.33929 1.74107C1.25893 1.66071 1.14732 1.61607 1.03571 1.61607C0.924107 1.61607 0.8125 1.66071 0.732143 1.74107L0.125 2.34822C0.0446429 2.42857 0 2.54018 0 2.65178C0 2.76339 0.0446429 2.875 0.125 2.95536L1.74107 4.57143L2.34821 5.17857C2.42857 5.25893 2.54018 5.30357 2.65179 5.30357C2.76339 5.30357 2.875 5.25893 2.95536 5.17857L3.5625 4.57143L6.79464 1.33928C6.875 1.25893 6.91964 1.14732 6.91964 1.03572Z" fill="#1A1A1A" />
												</svg>
											</div>
											<p>432 in stock</p>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nulla faucibus viverra nisl non senectus tortor.</p>
										<div className="flex gap20">
											<form className>
												<div className="wg-quantity">
													<span className="btn-quantity minus-btn">-</span>
													<input type="text" name="number" defaultValue={12} />
													<span className="btn-quantity plus-btn">+</span>
												</div>
											</form>
											<Link href="/shop-cart" className="tf-button-primary">Add To Cart<i className="icon-arrow-right-add" /></Link>
										</div>
										<div className="bot">
											<div className="item">
												<p>Sku:</p>
												<p>JH-0946</p>
											</div>
											<div className="item">
												<p>Category:</p>
												<p>Furniture</p>
											</div>
											<div className="item">
												<p>Tags:</p>
												<p><Link href="/#">coffe</Link>,<Link href="/#">furniture</Link>,<Link href="/#">thermos</Link></p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="bottom">
										<div className="widget-tabs style-2">
											<ul className="widget-menu-tab">
												<li className="item-title active">
													<span className="inner">Description</span>
												</li>
												<li className="item-title">
													<span className="inner">Review</span>
												</li>
											</ul>
											<div className="widget-content-tab">
												<div className="widget-content-inner active">
													<p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis.</p>
												</div>
												<div className="widget-content-inner">
													<div className="reviews-wrap">
														<div className="flex justify-between items-center mb-40">
															<h4 className="mb-0">4 Reviews</h4>
															<Link href="/#" className="tf-button-green">Leave a Review</Link>
														</div>
														<ul>
															<li>
																<div className="image">
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
															<li>
																<div className="image">
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
														<h4>Leave A Review</h4>
														<p>Your email address will not be published. Required fields are marked *</p>
														<div>
															<p>Your Rating *</p>
															<div className="ratings">
																<i className="flaticon-star-1" />
																<i className="flaticon-star-1" />
																<i className="flaticon-star-1" />
																<i className="flaticon-star-1" />
																<i className="flaticon-star-1" />
															</div>
														</div>
														<form className="form-comment">
															<fieldset className="message wow fadeInUp has-top-title animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																<textarea name="message" rows={4} placeholder="Your Comment" className tabIndex={2} aria-required="true" required defaultValue={"Lorem Ipsum"} />
																<label htmlFor>Your Comment</label>
															</fieldset>
															<div className="cols">
																<fieldset className="name wow fadeInUp has-top-title animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																	<input type="text" placeholder="Name" className name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
																	<label htmlFor>Name</label>
																</fieldset>
																<fieldset className="email wow fadeInUp has-top-title animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																	<input type="email" placeholder="Email" className name="email" tabIndex={2} defaultValue="themesflat@gmail.com" aria-required="true" required />
																	<label htmlFor>Email</label>
																</fieldset>
															</div>
															<fieldset className="website wow fadeInUp has-top-title animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																<input type="text" placeholder="Website" className name="text" tabIndex={2} aria-required="true" required />
																<label htmlFor>Website</label>
															</fieldset>
															<div className="checkbox-item wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																<label>
																	<p>Save my name, email, and website in this browser for the next time I comment.</p>
																	<input type="checkbox" />
																	<span className="btn-checkbox" />
																</label>
															</div>
															<div className="button-submit wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
																<button className="tf-button-primary" type="submit">Submit Review <i className="icon-arrow-right-add" /></button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /shop-detail-wrap */}
					{/* flat-products */}
					<div className="tf-section flat-products style-1">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Related products</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="swiper-container slider-news slider-auto">
										<Swiper {...sliderNews}>
											<SwiperSlide>
												<div className="shop-item wow fadeInUp">
													<div className="image">
														<img src="/images/shop/shop-5.png" alt="" />
														<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
													</div>
													<div className="title">
														<Link href="/#">Sugar Bowl</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="shop-item wow fadeInUp" data-wow-delay="0.1s">
													<div className="image">
														<img src="/images/shop/shop-6.png" alt="" />
														<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
													</div>
													<div className="title">
														<Link href="/#">Water Jug</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="shop-item wow fadeInUp" data-wow-delay="0.2s">
													<div className="image">
														<img src="/images/shop/shop-7.png" alt="" />
														<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
													</div>
													<div className="title">
														<Link href="/#">Hanging Light</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="shop-item wow fadeInUp" data-wow-delay="0.3s">
													<div className="image">
														<img src="/images/shop/shop-8.png" alt="" />
														<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
													</div>
													<div className="title">
														<Link href="/#">Glass Vase</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="shop-item">
													<div className="image">
														<img src="/images/shop/shop-7.png" alt="" />
														<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
													</div>
													<div className="title">
														<Link href="/#">Hanging Light</Link>
													</div>
													<div className="price">$815,000</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}