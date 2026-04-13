
import Layout from "@/components/layout/Layout"
export default function Error404() {

	return (
		<>

			<Layout mainContentCls="default">
				<section className="slider page-404">
					<div className="wrap-slider">
						<div className="slider-item">
							<div className="themesflat-container">
								<div className="row">
									<div className="col-12">
										<div className="slider-content">
											<div className="heading">404</div>
											<h2>Oops... Page Not Found!</h2>
											<div className="text-content">It looks like nothing was found at this location.
												Maybe try one of the links below or a search?</div>
											<form className="form-search-content">
												<fieldset className="name">
													<input type="text" placeholder="Enter Search" className="show-search style-2" name="name" tabIndex={2} aria-required="true" required />
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
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}