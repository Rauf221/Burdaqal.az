import CounterNumber from "../elements/CounterNumber"

export default function Slider8() {
	return (
		<>
			<section className="slider home8">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<div className="sub wow fadeInUp">LET US GUIDE YOUR HOME</div>
										<h1 className="wow fadeInUp">Enjoy The Finest Homes</h1>
										<p className="wow fadeInUp">From as low as $10 per day with limited time offer
											discounts.</p>
										<div className="widget-tabs style-5 wow fadeInUp">
											<ul className="widget-menu-tab">
												<li className="item-title active">
													<span className="inner">Buy</span>
												</li>
												<li className="item-title">
													<span className="inner">Rent</span>
												</li>
												<li className="item-title">
													<span className="inner">Sell</span>
												</li>
											</ul>
											<div className="widget-content-tab">
												<div className="widget-content-inner active">
													<form className="form-search-home6">
														<div className="list">
															<div className="group-form form-search-content">
																<div className="form-style-has-title">
																	<div className="title">Keyword</div>
																	<div className="relative">
																		<fieldset className="name">
																			<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} defaultValue aria-required="true" required />
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
																								<img src="images/author/avatar-8.png" alt />
																							</div>
																							<p>Archer House</p>
																						</div>
																						<div className="text">For Sale
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-7.png" alt />
																							</div>
																							<p>Home Pitt Street</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-9.png" alt />
																							</div>
																							<p>Villa One Hyde Park
																							</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-10.png" alt />
																							</div>
																							<p>House on the beverly
																								hills</p>
																						</div>
																						<div className="text">For Sale
																						</div>
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
																	<div className="title">Type</div>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected">
																			All Type</option>
																		<option data-value="Office" className="option">
																			Office</option>
																		<option data-value="Villa" className="option">
																			Villa</option>
																		<option data-value="Shop" className="option">
																			Shop</option>
																		<option data-value="Single Family" className="option">Single Family</option>

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


																					<option data-value className="option selected">
																						City</option>
																					<option data-value="New York" className="option">New York
																					</option>
																					<option data-value="Paris" className="option">Paris
																					</option>
																					<option data-value="Ha Noi" className="option">Ha Noi
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bedrooms</option>
																					<option data-value="1 Bed" className="option">1 Bed
																					</option>
																					<option data-value="2 Bed" className="option">2 Bed
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bathrooms</option>
																					<option data-value="1 Bath" className="option">1 Bath
																					</option>
																					<option data-value="2 Bath" className="option">2 Bath
																					</option>

																				</select>
																			</div>
																			<div className="grid-4-cols">
																				<fieldset className="name">
																					<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<fieldset className="name">
																					<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Min. Price</option>
																					<option data-value="100 $" className="option">100 $
																					</option>
																					<option data-value="150 $" className="option">150 $
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Max. Price</option>
																					<option data-value="1000 $" className="option">1000 $
																					</option>
																					<option data-value="1500 $" className="option">1500 $
																					</option>

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
													</form>
												</div>
												<div className="widget-content-inner">
													<form className="form-search-home6">
														<div className="list">
															<div className="group-form form-search-content">
																<div className="form-style-has-title">
																	<div className="title">Keyword</div>
																	<div className="relative">
																		<fieldset className="name">
																			<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} defaultValue aria-required="true" required />
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
																								<img src="images/author/avatar-8.png" alt />
																							</div>
																							<p>Archer House</p>
																						</div>
																						<div className="text">For Sale
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-7.png" alt />
																							</div>
																							<p>Home Pitt Street</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-9.png" alt />
																							</div>
																							<p>Villa One Hyde Park
																							</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-10.png" alt />
																							</div>
																							<p>House on the beverly
																								hills</p>
																						</div>
																						<div className="text">For Sale
																						</div>
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
																	<div className="title">Type</div>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected">
																			All Type</option>
																		<option data-value="Office" className="option">
																			Office</option>
																		<option data-value="Villa" className="option">
																			Villa</option>
																		<option data-value="Shop" className="option">
																			Shop</option>
																		<option data-value="Single Family" className="option">Single Family</option>

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


																					<option data-value className="option selected">
																						City</option>
																					<option data-value="New York" className="option">New York
																					</option>
																					<option data-value="Paris" className="option">Paris
																					</option>
																					<option data-value="Ha Noi" className="option">Ha Noi
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bedrooms</option>
																					<option data-value="1 Bed" className="option">1 Bed
																					</option>
																					<option data-value="2 Bed" className="option">2 Bed
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bathrooms</option>
																					<option data-value="1 Bath" className="option">1 Bath
																					</option>
																					<option data-value="2 Bath" className="option">2 Bath
																					</option>

																				</select>
																			</div>
																			<div className="grid-4-cols">
																				<fieldset className="name">
																					<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<fieldset className="name">
																					<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Min. Price</option>
																					<option data-value="100 $" className="option">100 $
																					</option>
																					<option data-value="150 $" className="option">150 $
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Max. Price</option>
																					<option data-value="1000 $" className="option">1000 $
																					</option>
																					<option data-value="1500 $" className="option">1500 $
																					</option>

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
													</form>
												</div>
												<div className="widget-content-inner">
													<form className="form-search-home6">
														<div className="list">
															<div className="group-form form-search-content">
																<div className="form-style-has-title">
																	<div className="title">Keyword</div>
																	<div className="relative">
																		<fieldset className="name">
																			<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} defaultValue aria-required="true" required />
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
																								<img src="images/author/avatar-8.png" alt />
																							</div>
																							<p>Archer House</p>
																						</div>
																						<div className="text">For Sale
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-7.png" alt />
																							</div>
																							<p>Home Pitt Street</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-9.png" alt />
																							</div>
																							<p>Villa One Hyde Park
																							</p>
																						</div>
																						<div className="text">For Rent
																						</div>
																					</div>
																				</li>
																				<li>
																					<div className="item1">
																						<div>
																							<div className="image">
																								<img src="images/author/avatar-10.png" alt />
																							</div>
																							<p>House on the beverly
																								hills</p>
																						</div>
																						<div className="text">For Sale
																						</div>
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
																	<div className="title">Type</div>
																	<select className="nice-select" tabIndex={0}>


																		<option data-value className="option selected">
																			All Type</option>
																		<option data-value="Office" className="option">
																			Office</option>
																		<option data-value="Villa" className="option">
																			Villa</option>
																		<option data-value="Shop" className="option">
																			Shop</option>
																		<option data-value="Single Family" className="option">Single Family</option>

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


																					<option data-value className="option selected">
																						City</option>
																					<option data-value="New York" className="option">New York
																					</option>
																					<option data-value="Paris" className="option">Paris
																					</option>
																					<option data-value="Ha Noi" className="option">Ha Noi
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bedrooms</option>
																					<option data-value="1 Bed" className="option">1 Bed
																					</option>
																					<option data-value="2 Bed" className="option">2 Bed
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>


																					<option data-value className="option selected">
																						Bathrooms</option>
																					<option data-value="1 Bath" className="option">1 Bath
																					</option>
																					<option data-value="2 Bath" className="option">2 Bath
																					</option>

																				</select>
																			</div>
																			<div className="grid-4-cols">
																				<fieldset className="name">
																					<input type="text" placeholder="Min. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<fieldset className="name">
																					<input type="text" placeholder="Max. Area" className name="name" tabIndex={2} defaultValue aria-required="true" required />
																				</fieldset>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Min. Price</option>
																					<option data-value="100 $" className="option">100 $
																					</option>
																					<option data-value="150 $" className="option">150 $
																					</option>

																				</select>
																				<select className="nice-select" tabIndex={0}>
																					<option data-value className="option selected">
																						Max. Price</option>
																					<option data-value="1000 $" className="option">1000 $
																					</option>
																					<option data-value="1500 $" className="option">1500 $
																					</option>

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
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="counter">
						<div className="number-counter">
							<div className>
								<CounterNumber count={620} />
							</div>
							<p>Awward Winning</p>
						</div>
						<div className="number-counter">
							<div className>
								<CounterNumber count={2} />K+
							</div>
							<p>Happy Customer</p>
						</div>
						<div className="number-counter">
							<div className>
								<CounterNumber count={500} />+
							</div>
							<p>Property Ready</p>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
