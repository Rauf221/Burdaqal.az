

export default function Slider2() {
	return (
		<>

			<section className="slider home2">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<div className="sub wow fadeInUp">LET US GUIDE YOUR HOME</div>
										<h1 className=" wow fadeInUp" data-wow-delay="0.1s">Believe in finding it</h1>
										<div className="text wow fadeInUp" data-wow-delay="0.15s">Search properties for
											sale and to rent in the UK</div>
										<form className="form-search-content flex-grow wow fadeInUp" data-wow-delay="0.2s">
											<fieldset className="name">
												<input type="text" placeholder="Enter key word" className="show-search style-2" name="name" tabIndex={2} aria-required="true" required />
											</fieldset>
											<div className="button-submit style-absolute-right">
												<button className="style-icon-bg" type="submit"><i className="flaticon-magnifiying-glass" /></button>
											</div>
											<div className="box-content-search">
												<ul>
													<li>
														<div className="heading">Recent Search</div>
													</li>
													<li>
														<div className="item">
															<i className="flaticon-time" />
															<p>New York</p>
														</div>
													</li>
													<li>
														<div className="item">
															<i className="flaticon-time" />
															<p>Los Angeles</p>
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
														<div className="item">
															<i className="flaticon-time" />
															<p>Manhattan</p>
														</div>
													</li>
													<li>
														<div className="item">
															<i className="flaticon-time" />
															<p>Brooklyn</p>
														</div>
													</li>
												</ul>
											</div>
										</form>
										<div className="text-1 wow fadeInUp" data-wow-delay="0.25s">What are you looking
											for?</div>
										<div className="list-icon wow fadeInUp" data-wow-delay="0.3s">
											<div className="item">
												<div className="icon">
													<i className="flaticon-cottage" />
												</div>
												<p>Modern Villa</p>
											</div>
											<div className="item">
												<div className="icon">
													<i className="flaticon-buildings" />
												</div>
												<p>Apartment</p>
											</div>
											<div className="item">
												<div className="icon">
													<i className="flaticon-building" />
												</div>
												<p>Town House</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
