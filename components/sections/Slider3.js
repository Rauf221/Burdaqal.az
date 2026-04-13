

export default function Slider3() {
	return (
		<>

			<section className="slider home3 relative z-5">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<h1 className="wow fadeInUp">The <span>#1</span> site real estate professionals
											trust*</h1>
										<div className="text wow fadeInUp">From as low as $10 per day with limited time
											offer discounts.</div>
										<div className="widget-tabs">
											<ul className="widget-menu-tab list-link wow fadeInUp" data-wow-delay="0.1s">
												<li className="item-title item active">Buy</li>
												<li className="item-title item">Rent</li>
											</ul>
											<div className="widget-content-tab">
												<div className="widget-content-inner active">
													<form className="form-search-home3 wow fadeInUp">
														<div className="group-form">
															<select className="nice-select border-radius-1" tabIndex={0}>


																<option data-value className="option selected">For Sale </option>
																<option data-value="For Ren" className="option">For Ren </option>
																<option data-value="Sold" className="option">Sold</option>

															</select>
														</div>
														<div className="group-form flex-grow form-search-content relative">
															<fieldset className="name">
																<input type="text" placeholder="Enter Keywords" className="show-search style-3" name="name" tabIndex={2} aria-required="true" required />
															</fieldset>
															<div className="style-absolute-left-center">
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
														<div className="group-form">
															<div className="wg-filter">
																<div className="tf-button-filter btn-filter border-radius">
																	<i className="flaticon-filter" />Filters</div>
																<div className="open-filter filter-no-content" id="a1">
																	<div>
																		<div className="grid-3-cols mb-20">
																			<select className="nice-select" tabIndex={0}>


																				<option data-value className="option selected">City </option>
																				<option data-value="New York" className="option">New York</option>
																				<option data-value="Paris" className="option">Paris</option>
																				<option data-value="Ha Noi" className="option">Ha Noi</option>

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
																<button className type="submit">Search</button>
															</div>
														</div>
													</form>
												</div>
												<div className="widget-content-inner">
													<form className="form-search-home3">
														<div className="group-form">
															<select className="nice-select border-radius-1" tabIndex={0}>


																<option data-value className="option selected">For Sale </option>
																<option data-value="For Ren" className="option">For Ren </option>
																<option data-value="Sold" className="option">Sold</option>

															</select>
														</div>
														<div className="group-form flex-grow form-search-content relative">
															<fieldset className="name">
																<input type="text" placeholder="Enter Keywords" className="show-search style-3" name="name" tabIndex={2} aria-required="true" required />
															</fieldset>
															<div className="style-absolute-left-center">
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
														<div className="group-form">
															<div className="wg-filter">
																<div className="tf-button-filter btn-filter border-radius">
																	<i className="flaticon-filter" />Filters</div>
																<div className="open-filter filter-no-content" id="a1">
																	<div>
																		<div className="grid-3-cols mb-20">
																			<select className="nice-select" tabIndex={0}>


																				<option data-value className="option selected">City </option>
																				<option data-value="New York" className="option">New York</option>
																				<option data-value="Paris" className="option">Paris</option>
																				<option data-value="Ha Noi" className="option">Ha Noi</option>

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
																</div >
															</div >
														</div >
														<div className="group-form">
															<div className="button-submit">
																<button className type="submit">Search</button>
															</div>
														</div>
													</form >
												</div >
											</div >
										</div >
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
