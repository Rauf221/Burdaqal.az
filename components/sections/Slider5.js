
import Link from "next/link"

export default function Slider5() {
	return (
		<>

			<section className="slider home5">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<p className="relative z-5 wow fadeInUp">From as low as $10 per day with limited
											time offer discounts.</p>
										<h1 className="wow fadeInUp">Your <span>Property</span>, Our Priority.</h1>
										<form className="form-search-home5 wow fadeInUp">
											<div className="list">
												<div className="group-form form-search-content">
													<div className="form-style-has-title">
														<div className="title">Keyword</div>
														<div className="relative">
															<fieldset className="name">
																<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} aria-required="true" required />
															</fieldset>
															<div className="style-absolute-right">
																<div className="style-icon-default"><i className="flaticon-magnifiying-glass" />
																</div>
															</div>
															<div className="box-content-search style-1">
																<ul>
																	<li>
																		<div className="item1">
																			<div>
																				<div className="image">
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
																				<div className="image">
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
																				<div className="image">
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
																				<div className="image">
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


															<option data-value="For Sale" className="option selected"> For Sale</option>
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


																		<option data-value className="option selected"> City</option>
																		<option data-value="New York" className="option">New York</option>
																		<option data-value="Paris" className="option"> Paris</option>
																		<option data-value="Ha Noi" className="option"> Ha Noi</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected"> Bedrooms</option>
																		<option data-value="1 Bed" className="option">1 Bed</option>
																		<option data-value="2 Bed" className="option">2 Bed</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>

																		<option data-value className="option selected"> Bathrooms</option>
																		<option data-value="1 Bath" className="option">1 Bath</option>
																		<option data-value="2 Bath" className="option">2 Bath</option>

																	</select>
																</div>
																<div className="grid-4-cols">
																	<fieldset className="name">
																		<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<fieldset className="name">
																		<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} aria-required="true" required />
																	</fieldset>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected"> Min. Price</option>
																		<option data-value="100 $" className="option"> 100 $</option>
																		<option data-value="150 $" className="option"> 150 $</option>

																	</select>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected"> Max. Price</option>
																		<option data-value="1000 $" className="option"> 1000 $</option>
																		<option data-value="1500 $" className="option"> 1500 $</option>

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
														<button className type="submit">Search</button>
													</div>
												</div>
											</div>
										</form >
										<div className="flex gap30 items-center flex-wrap relative z-5 wow fadeInUp">
											<div className="text-1">Popular Search</div>
											<div className="list-links">
												<Link href="/#">Modern Villa</Link>
												<Link href="/#">Studio Apartment</Link>
												<Link href="/#">Town House</Link>
											</div>
										</div>
										<div className="left">
											<form className="form-style-fourth flex-grow">
												<fieldset className="name">
													<input type="text" placeholder="Saerch Property" className="style-2" name="name" tabIndex={2} aria-required="true" required />
												</fieldset>
												<div className="button-submit style-absolute-right">
													<button className="style-icon-bg" type="submit"><i className="flaticon-magnifiying-glass" /></button>
												</div>
											</form>
											<div className="wrap-img flex gap10">
												<div className="flex gap10 flex-column">
													<img className="img-1" src="/images/image-box/grid-img-1.jpg" alt="" />
													<img className="img-2" src="/images/image-box/grid-img-2.jpg" alt="" />
												</div>
												<div className="flex gap10 flex-column">
													<img className="img-3" src="/images/image-box/grid-img-3.jpg" alt="" />
													<img className="img-4" src="/images/image-box/grid-img-4.jpg" alt="" />
												</div>
											</div>
											<div className="box-agents">
												<div className="list-user">
													<div className="item">
														<img src="/images/author/avatar-1.png" alt="" />
													</div>
													<div className="item">
														<img src="/images/author/avatar-2.png" alt="" />
													</div>
													<div className="item">
														<img src="/images/author/avatar-3.png" alt="" />
													</div>
												</div>
												<div className="text"><span>1000K+</span>Exclusive Agetns</div>
											</div>
										</div>
									</div >
								</div >
							</div >
						</div >
					</div >
				</div >
			</section >
		</>
	)
}
