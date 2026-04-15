
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import { Link } from '@/i18n/navigation'
export default function PropertyGridV2() {

	return (
		<>

			<Layout>
				<div>
					<div className="flat-title page-property-grid-2">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="content">
										<h2 className="wow fadeInUp">Real Estate &amp; Homes For Sale</h2>
										<ul className="breadcrumbs wow fadeInUp">
											<li><Link href="/">Home</Link></li><li>/</li><li>Properties</li>
										</ul>
										<div className="form-filter wow fadeInUp">
											<form className="form-search-home5">
												<div className="list">
													<div className="group-form form-search-content">
														<div className="form-style-has-title">
															<div className="title">Keyword</div>
															<div className="relative">
																<fieldset className="name">
																	<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} aria-required="true" required />
																</fieldset>
																<div className="style-absolute-right">
																	<div className="style-icon-default"><i className="flaticon-magnifiying-glass" /></div>
																</div>
																<div className="box-content-search style-1">
																	<ul>
																		<li>
																			<div className="item1">
																				<div>
																					<div className="image-group relative">
																						<img src="/images/author/avatar-8.png" alt="" />
																					</div>
																					<p>Archer House</p>
																				</div>
																				<div className="text">For Sale</div>
																			</div>
																		</li>
																		<li>
																			<div className="item1">
																				<div>
																					<div className="image-group relative">
																						<img src="/images/author/avatar-7.png" alt="" />
																					</div>
																					<p>Home Pitt Street</p>
																				</div>
																				<div className="text">For Rent</div>
																			</div>
																		</li>
																		<li>
																			<div className="item1">
																				<div>
																					<div className="image-group relative">
																						<img src="/images/author/avatar-9.png" alt="" />
																					</div>
																					<p>Villa One Hyde Park</p>
																				</div>
																				<div className="text">For Rent</div>
																			</div>
																		</li>
																		<li>
																			<div className="item1">
																				<div>
																					<div className="image-group relative">
																						<img src="/images/author/avatar-10.png" alt="" />
																					</div>
																					<p>House on the beverly hills</p>
																				</div>
																				<div className="text">For Sale</div>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="divider-1" />
													<div className="group-form">
														<div className="form-style-has-title">
															<div className="title">Status</div>
															<select className="nice-select" tabIndex={0}>

																<option data-value="For Sale" className="option selected">For Sale</option>
																<option data-value="For Ren" className="option">For Ren</option>
																<option data-value="Sold" className="option">Sold</option>

															</select>
														</div>
													</div>
													<div className="divider-1" />
													<div className="group-form">
														<div className="form-style-has-title">
															<div className="title">Type</div>
															<select className="nice-select" tabIndex={0}>
																<option data-value className="option selected focus">All Type</option>
																<option data-value="Office" className="option">Office</option>
																<option data-value="Villa" className="option">Villa</option>
																<option data-value="Shop" className="option">Shop</option>

															</select>
														</div>
													</div>
												</div>
												<div className="flex gap10">
													<div className="group-form">
														<div className="wg-filter">
															<div className="tf-button-filter btn-filter"><i className="flaticon-filter" />Filter</div>
															<div className="open-filter filter-no-content" id="a1">
																<div>
																	<div className="grid-3-cols mb-20">
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected">City</option>
																			<option data-value="New York" className="option">New York</option>
																			<option data-value="Paris" className="option">Paris</option>
																			<option data-value="Ha Noi" className="option">Ha Noi</option>

																		</select>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected">Bedrooms</option>
																			<option data-value="1 Bed" className="option">1 Bed</option>
																			<option data-value="2 Bed" className="option">2 Bed</option>

																		</select>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected">Bathrooms</option>
																			<option data-value="1 Bath" className="option">1 Bath</option>
																			<option data-value="2 Bath" className="option">2 Bath</option>

																		</select>
																	</div>
																	<div className="grid-4-cols">
																		<fieldset className="name">
																			<input type="text" placeholder="Min. Area" name="name" tabIndex={2} aria-required="true" required />
																		</fieldset>
																		<fieldset className="name">
																			<input type="text" placeholder="Max. Area" name="name" tabIndex={2} aria-required="true" required />
																		</fieldset>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected">Min. Price</option>
																			<option data-value="100 $" className="option">100 $</option>
																			<option data-value="150 $" className="option">150 $</option>

																		</select>
																		<select className="nice-select" tabIndex={0}>

																			<option data-value className="option selected">Max. Price</option>
																			<option data-value="1000 $" className="option">1000 $</option>
																			<option data-value="1500 $" className="option">1500 $</option>

																		</select>
																	</div>
																</div>
																<div>
																	<div className="title">Amenities</div>
																	<ul className="grid-checkbox">
																		<li className="checkbox-item">
																			<label>
																				<p>Air Conditioning</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Barbeque</p>
																				<input type="checkbox" defaultChecked />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Dryer</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Gym</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Lawn</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Microwave</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Refrigerator</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Sauna</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Swimming Pool</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>TV Cable</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>Washer</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																		<li className="checkbox-item">
																			<label>
																				<p>WiFi</p>
																				<input type="checkbox" />
																				<span className="btn-checkbox" />
																			</label>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="group-form">
														<div className="button-submit">
															<button type="submit">Search</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /flat-title */}
					{/* property-grid */}
					<div className="property-grid-wrap-v2">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="top">
										<div className="sub wow fadeInUp">
											<p>9,998 results</p>
											<div className="sort-wrap">
												<p>Sort by</p>
												<select className="nice-select default" tabIndex={0}>

													<option data-value className="option selected">Newest</option>
													<option data-value="For Ren" className="option">Oldest</option>
													<option data-value="Sold" className="option">3 days</option>

												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR RENT</span>
												<span className="tags-item featured">FEATURED</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={1} end={3} detailHref="/property-grid-v2/archer-house" />
											</div>
										</div>
										<Link href="/property-grid-v2/archer-house" className="content">
											<div className="head">
												<div className="title">
													Archer House
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={2} end={4} detailHref="/property-grid-v2/villa-one-hyde-park" />
											</div>
										</div>
										<Link href="/property-grid-v2/villa-one-hyde-park" className="content">
											<div className="head">
												<div className="title">
													Villa One Hyde Park
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.2s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={3} end={5} detailHref="/property-grid-v2/home-pitt-street" />
											</div>
										</div>
										<Link href="/property-grid-v2/home-pitt-street" className="content">
											<div className="head">
												<div className="title">
													Home Pitt Street
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={4} end={6} detailHref="/property-grid-v2/relaxing-villa" />
											</div>
										</div>
										<Link href="/property-grid-v2/relaxing-villa" className="content">
											<div className="head">
												<div className="title">
													Relaxing Villa
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={5} end={7} detailHref="/property-grid-v2/luxury-mansion" />
											</div>
										</div>
										<Link href="/property-grid-v2/luxury-mansion" className="content">
											<div className="head">
												<div className="title">
													Luxury Mansion
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.2s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={6} end={8} detailHref="/property-grid-v2/home-in-merrick-way" />
											</div>
										</div>
										<Link href="/property-grid-v2/home-in-merrick-way" className="content">
											<div className="head">
												<div className="title">
													Home in Merrick Way
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={7} end={9} detailHref="/property-grid-v2/villa-in-coral-gables" />
											</div>
										</div>
										<Link href="/property-grid-v2/villa-in-coral-gables" className="content">
											<div className="head">
												<div className="title">
													Villa in Coral Gables
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={8} end={10} detailHref="/property-grid-v2/modern-house-in-greenville" />
											</div>
										</div>
										<Link href="/property-grid-v2/modern-house-in-greenville" className="content">
											<div className="head">
												<div className="title">
													Modern House in Greenville
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
										</Link>
									</div>
								</div>
								<div className="col-xl-4 col-md-6">
									<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.2s">
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">FOR SELL</span>
											</div>
											<div className="button-heart"><i className="flaticon-heart-1" /></div>
											<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
												<SliderBoxDream path="house/property-listing" start={9} end={11} detailHref="/property-grid-v2/garden-villa-house" />
											</div>
										</div>
										<Link href="/property-grid-v2/garden-villa-house" className="content">
											<div className="head">
												<div className="title">
													Garden Villa House
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
										</Link>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<ul className="wg-pagination justify-center wow fadeInUp">
										<li>
											<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
										</li>
										<li>
											<Link href="/#">1</Link>
										</li>
										<li className="active">
											<Link href="/#">2</Link>
										</li>
										<li>
											<Link href="/#">3</Link>
										</li>
										<li>
											<Link href="/#">4</Link>
										</li>
										<li>
											<Link href="/#">...</Link>
										</li>
										<li>
											<Link href="/#">20</Link>
										</li>
										<li>
											<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}