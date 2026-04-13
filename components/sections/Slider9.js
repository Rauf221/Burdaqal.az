
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Slider9() {
	return (
		<>

			<section className="slider home9">
				<div className="top">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-5">
								<h2 className="wow fadeInUp">
									Buy or rent <br />
									properties with no <br />
									commission
								</h2>
							</div>
							<div className="col-lg-4">
								<Link href="/#" className="tf-button-primary type-1 style-bg-white wow fadeInUp">Browse More
									Properties<i className="icon-arrow-right-add" /></Link>
							</div>
							<div className="col-lg-3">
								<div className="box-agents">
									<div className="list-user wow fadeInUp">
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
									<div className="text wow fadeInUp" data-wow-delay="0.1s"><span>1000K+</span>
										<div>Exclusive Agetns</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-md-8">
									<div className="button-play-video wow fadeInUp">
										<div className="video-wrap">
										<VideoPopup />
										</div>
										<p>PLAY INTRO VIDEO</p>
									</div>
								</div>
								<div className="col-md-4">
									<form className="form-search-home9 wow fadeInUp">
										<div className="list">
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
											<div className="group-form">
												<div className="form-style-has-title">
													<div className="title">Type</div>
													<select className="nice-select" tabIndex={0}>
														<option data-value className="option selected focus">All Type</option>
														<option data-value="Office" className="option">Office</option>
														<option data-value="Villa" className="option">Villa</option>
														<option data-value="Shop" className="option">Shop</option>
														<option data-value="Single Family" className="option">Single Family</option>
													</select>
												</div>
											</div>
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
										</div>
										<div className="button-submit">
											<button className="tf-button-primary" type="submit">Search<i className="icon-arrow-right-add" /></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div >
				</div >
			</section >
		</>
	)
}
