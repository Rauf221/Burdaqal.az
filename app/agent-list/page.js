
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AgentList() {

	return (
		<>

			<Layout>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Agents Pages</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Agents Pages</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="agency-list-wrap">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-4">
								<form className="form-sidebar-left">
									<div className="input-search relative">
										<fieldset className="name">
											<input type="text" placeholder="Enter Agent Name" className name="name" tabIndex={2} aria-required="true" required />
										</fieldset>
										<div className="button-submit style-absolute-right-center">
											<button className="style-icon-default" type="submit"><i className="flaticon-magnifiying-glass" /></button>
										</div>
									</div>
									<select className="nice-select" tabIndex={0}>
										<option data-value className="option selected focus">All Type</option>
										<option data-value="Office" className="option">Office</option>
										<option data-value="Villa" className="option">Villa</option>
										<option data-value="Shop" className="option">Shop</option>
										<option data-value="Single Family" className="option">Single Family</option>
									</select>
									<select className="nice-select" tabIndex={0}>
										<option data-value className="option selected">USA</option>
										<option data-value="For Ren" className="option">Viet Nam</option>
										<option data-value="Sold" className="option">China</option>
									</select>
									<Link href="/#" className="tf-button-primary w-full">Search<i className="icon-arrow-right-add" /></Link>
								</form>
								<div className="sidebar">
									<div className="sidebar-item sidebar-agents-1">
										<div className="sidebar-title">Recent Agents</div>
										<ul>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-1.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/agent-single">Jane Cooper</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-2.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/agent-single">Marvin McKinney</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
											<li>
												<div className="image">
													<img src="/images/sidebar/agent-3.png" alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/agent-single">Cameron Williamson</Link>
													</div>
													<p>sale@justhome.com</p>
													<p>3-596 95 38 12</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="top">
									<div className="sub">
										<p className="wow fadeInUp">9,998 results</p>
										<div className="sort-wrap wow fadeInUp">
											<p>Sort by</p>
											<select className="nice-select default" tabIndex={0}>
												<option data-value className="option selected">Newest</option>
												<option data-value="For Ren" className="option">Oldest</option>
												<option data-value="Sold" className="option">3 days</option>
											</select>
										</div>
									</div>
								</div>
								<div className="flex gap30 mb-30 flex-column">
									<div className="agents-item wow fadeInUp">
										<div className="flex gap40">
											<div className="image">
												<img src="/images/author/author-4.png" alt="" />
											</div>
											<div>
												<div className="infor">
													<div className="name">
														<Link href="/agent-single">Samuel Palmer</Link>
													</div>
													<p>Company Agent at <span>The James Estate Agents</span></p>
												</div>
												<div className="flex gap30 flex-wrap wrap-contact">
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Office</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Mobile</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/#" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Email</div>
															<span>info@husthome.com</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
										<div className="bot">
											<div className="wg-social style-black">
												<ul className="list-social">
													<li>
														<Link href="/#">
															<i className="icon-facebook" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-twitter" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-instagram" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-linkedin2" />
														</Link>
													</li>
												</ul>
											</div>
											<Link href="/agent-single" className="tf-button-no-bg">
												4 Listed Properties
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
									<div className="agents-item wow fadeInUp">
										<div className="flex gap40">
											<div className="image">
												<img src="/images/author/author-12.png" alt="" />
											</div>
											<div>
												<div className="infor">
													<div className="name">
														<Link href="/agent-single">Samuel Palmer</Link>
													</div>
													<p>Company Agent at <span>The James Estate Agents</span></p>
												</div>
												<div className="flex gap30 flex-wrap wrap-contact">
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Office</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Mobile</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/#" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Email</div>
															<span>info@husthome.com</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
										<div className="bot">
											<div className="wg-social style-black">
												<ul className="list-social">
													<li>
														<Link href="/#">
															<i className="icon-facebook" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-twitter" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-instagram" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-linkedin2" />
														</Link>
													</li>
												</ul>
											</div>
											<Link href="/agent-single" className="tf-button-no-bg">
												4 Listed Properties
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
									<div className="agents-item wow fadeInUp">
										<div className="flex gap40">
											<div className="image">
												<img src="/images/author/author-13.png" alt="" />
											</div>
											<div>
												<div className="infor">
													<div className="name">
														<Link href="/agent-single">Samuel Palmer</Link>
													</div>
													<p>Company Agent at <span>The James Estate Agents</span></p>
												</div>
												<div className="flex gap30 flex-wrap wrap-contact">
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Office</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Mobile</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/#" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Email</div>
															<span>info@husthome.com</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
										<div className="bot">
											<div className="wg-social style-black">
												<ul className="list-social">
													<li>
														<Link href="/#">
															<i className="icon-facebook" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-twitter" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-instagram" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-linkedin2" />
														</Link>
													</li>
												</ul>
											</div>
											<Link href="/agent-single" className="tf-button-no-bg">
												4 Listed Properties
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
									<div className="agents-item wow fadeInUp">
										<div className="flex gap40">
											<div className="image">
												<img src="/images/author/author-14.png" alt="" />
											</div>
											<div>
												<div className="infor">
													<div className="name">
														<Link href="/agent-single">Samuel Palmer</Link>
													</div>
													<p>Company Agent at <span>The James Estate Agents</span></p>
												</div>
												<div className="flex gap30 flex-wrap wrap-contact">
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Office</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Mobile</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/#" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Email</div>
															<span>info@husthome.com</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
										<div className="bot">
											<div className="wg-social style-black">
												<ul className="list-social">
													<li>
														<Link href="/#">
															<i className="icon-facebook" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-twitter" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-instagram" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-linkedin2" />
														</Link>
													</li>
												</ul>
											</div>
											<Link href="/agent-single" className="tf-button-no-bg">
												4 Listed Properties
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
									<div className="agents-item wow fadeInUp">
										<div className="flex gap40">
											<div className="image">
												<img src="/images/author/author-15.png" alt="" />
											</div>
											<div>
												<div className="infor">
													<div className="name">
														<Link href="/agent-single">Samuel Palmer</Link>
													</div>
													<p>Company Agent at <span>The James Estate Agents</span></p>
												</div>
												<div className="flex gap30 flex-wrap wrap-contact">
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Office</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/tel:+68 685 93 283" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Mobile</div>
															<span>1-222-333-4444</span>
														</div>
													</Link>
													<Link href="/#" className="tf-button-icon-before style-1">
														<i className="flaticon-phone" />
														<div>
															<div className="title">Email</div>
															<span>info@husthome.com</span>
														</div>
													</Link>
												</div>
											</div>
										</div>
										<div className="bot">
											<div className="wg-social style-black">
												<ul className="list-social">
													<li>
														<Link href="/#">
															<i className="icon-facebook" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-twitter" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-instagram" />
														</Link>
													</li>
													<li>
														<Link href="/#">
															<i className="icon-linkedin2" />
														</Link>
													</li>
												</ul>
											</div>
											<Link href="/agent-single" className="tf-button-no-bg">
												4 Listed Properties
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
								</div>
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

			</Layout >
		</>
	)
}