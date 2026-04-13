
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Compare() {

	return (
		<>

			<Layout mainContentCls="px-20 default">
				<div className="space-20" />

				<section className="flat-title inner-page">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Compare Properties</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Compare Properties</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="tf-section flat-compare">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="table-compare">
									<div className="head">
										<div className="item">
											<div className="image">
												<img src="/images/image-box/compare-1.jpg" alt="" />
												<div className="icon">
													<i className="flaticon-delete" />
												</div>
											</div>
											<div className="title">
												<Link href="/#">Archer House</Link>
											</div>
											<p>For Sale</p>
											<div className="price">$815,000</div>
										</div>
										<div className="item">
											<div className="image">
												<img src="/images/image-box/compare-2.jpg" alt="" />
												<div className="icon">
													<i className="flaticon-delete" />
												</div>
											</div>
											<div className="title">
												<Link href="/#">Villa One Hyde Park</Link>
											</div>
											<p>For Sale</p>
											<div className="price">$815,000</div>
										</div>
										<div className="item">
											<div className="image">
												<img src="/images/image-box/compare-3.jpg" alt="" />
												<div className="icon">
													<i className="flaticon-delete" />
												</div>
											</div>
											<div className="title">
												<Link href="/#">Home Pitt Street</Link>
											</div>
											<p>For Sale</p>
											<div className="price">$815,000</div>
										</div>
									</div>
									<ul className>
										<li className="wow fadeInUp">
											<div className="title">Type</div>
											<div>
												<p>Villa</p>
											</div>
											<div>
												<p>Apartments</p>
											</div>
											<div>
												<p>Single Family</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Location</div>
											<div>
												<p>New York</p>
											</div>
											<div>
												<p>New York</p>
											</div>
											<div>
												<p>New York</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Lot Size</div>
											<div>
												<p>4800 sq ft</p>
											</div>
											<div>
												<p>4800 sq ft</p>
											</div>
											<div>
												<p>4800 sq ft</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Property Size</div>
											<div>
												<p>3500 sq ft</p>
											</div>
											<div>
												<p>3500 sq ft</p>
											</div>
											<div>
												<p>3500 sq ft</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Property ID</div>
											<div>
												<p>JH-2024-10</p>
											</div>
											<div>
												<p>JH-2024-10</p>
											</div>
											<div>
												<p>JH-2024-10</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Year Built</div>
											<div>
												<p>2024</p>
											</div>
											<div>
												<p>2024</p>
											</div>
											<div>
												<p>2024</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Bedrooms</div>
											<div>
												<p>3</p>
											</div>
											<div>
												<p>3</p>
											</div>
											<div>
												<p>3</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Bathrooms</div>
											<div>
												<p>3.5</p>
											</div>
											<div>
												<p>3.5</p>
											</div>
											<div>
												<p>3.5</p>
											</div>
										</li>
										<li className="wow fadeInUp">
											<div className="title">Garages</div>
											<div>
												<p>2</p>
											</div>
											<div>
												<p>2</p>
											</div>
											<div>
												<p>2</p>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">2 Stories</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Bike Path</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Central Cooling</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
											<div>
												<div className="uncheck-ellipse-item">
													<div className="icon">
														<i className="icon-close" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Refrigerator</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Sauna</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Swimming Pool</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">TV Cable</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">Washer</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
										<li className="h-58 wow fadeInUp">
											<div className="title">WiFi</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
											<div>
												<div className="check-ellipse-item">
													<div className="icon">
														<i className="flaticon-check" />
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}