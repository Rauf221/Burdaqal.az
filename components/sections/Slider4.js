
import Link from "next/link"

export default function Slider4() {
	return (
		<>

			<section className="slider home4">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<div className="sub wow fadeInUp">LET US GUIDE YOUR HOME</div>
										<div className="text-content wow fadeInUp">We’ve more than 745,000 apartments,
											place &amp; plot.</div>
										<h1 className="wow fadeInUp">Find Your Perfect Home</h1>
										<form className="form-search-content flex-grow wow fadeInUp">
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
										<div className="text-1 wow fadeInUp">Explore all things property</div>
										<div className="list-links wow fadeInUp">
											<Link href="/#">Buying</Link>
											<Link href="/#">Renting</Link>
											<Link href="/#">Selling</Link>
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
