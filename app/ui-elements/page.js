'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function UiElements() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<>

			<Layout mainContentCls="spacing-20">
				<section className="flat-title inner-page">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>UI Element</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>UI Element</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="tf-section wg-component">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-6">
								<div className="mb-50">
									<h4>Accordions</h4>
									<div className="flat-accordion">
										<div className={`flat-toggle ${isAccordion == 1 ? "active" : ""}`}>
											<h4 className={`toggle-title ${isAccordion == 1 ? "active" : ""}`} onClick={() => handleAccordion(1)}>Can I change my reservation?</h4>
											<div className="toggle-content" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
												<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 2 ? "active" : ""}`}>
											<h4 className={`toggle-title ${isAccordion == 2 ? "active" : ""}`} onClick={() => handleAccordion(2)}>What happens if a host cancels?</h4>
											<div className="toggle-content" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
												<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 3 ? "active" : ""}`}>
											<h4 className={`toggle-title ${isAccordion == 3 ? "active" : ""}`} onClick={() => handleAccordion(3)}>How do I cancel my reservation?</h4>
											<div className="toggle-content" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
												<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-50">
									<h4>Table</h4>
									<div className="table-default">
										<div className="head">
											<div className="text">Description</div>
											<div className="text">Hour</div>
											<div className="text">Quantity</div>
										</div>
										<ul>
											<li>
												<div>
													<p>Design UX and UI</p>
												</div>
												<div>
													<p>14</p>
												</div>
												<div>
													<p>3</p>
												</div>
											</li>
											<li>
												<div>
													<p>Design UX and UI</p>
												</div>
												<div>
													<p>14</p>
												</div>
												<div>
													<p>3</p>
												</div>
											</li>
											<li>
												<div>
													<p>Design UX and UI</p>
												</div>
												<div>
													<p>14</p>
												</div>
												<div>
													<p>3</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="mb-50">
									<h4>Tabs</h4>
									<div className="widget-tabs style-2 type-small mb-40">
										<ul className="widget-menu-tab">
											<li className="item-title active">
												<span className="inner">Development &amp; IT</span>
											</li>
											<li className="item-title">
												<span className="inner">Design &amp; Creative</span>
											</li>
											<li className="item-title">
												<span className="inner">Digital Marketing</span>
											</li>
										</ul>
										<div className="widget-content-tab">
											<div className="widget-content-inner active">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
											<div className="widget-content-inner">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
											<div className="widget-content-inner">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
										</div>
									</div>
									<div className="widget-tabs style-2">
										<ul className="widget-menu-tab">
											<li className="item-title active">
												<span className="inner">Item 1</span>
											</li>
											<li className="item-title">
												<span className="inner">Item 2</span>
											</li>
											<li className="item-title">
												<span className="inner">Item 3</span>
											</li>
										</ul>
										<div className="widget-content-tab">
											<div className="widget-content-inner active">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
											<div className="widget-content-inner">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
											<div className="widget-content-inner">
												<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. </p>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-50">
									<h4>Message Boxes</h4>
									<div className="flex flex-column gap20">
										<div className="message-boxes-item">
											<div className="text">Info: User pending action</div>
											<i className="icon-close" />
										</div>
										<div className="message-boxes-item type-warning">
											<div className="text">Warning: User has to be admin</div>
											<i className="icon-close" />
										</div>
										<div className="message-boxes-item type-error">
											<div className="text">Error: Internal Server Error</div>
											<i className="icon-close" />
										</div>
										<div className="message-boxes-item type-success">
											<div className="text">Success: Updated members status</div>
											<i className="icon-close" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="mb-50">
									<h4>Buttons</h4>
									<div className="flex gap30 mb-30 flex-wrap">
										<Link href="/#" className="tf-button-primary">Learn More <i className="icon-arrow-right-add" /></Link>
										<Link href="/#" className="tf-button-primary active">Learn More <i className="icon-arrow-right-add" /></Link>
										<Link href="/#" className="tf-button-primary style-bg-white">Learn More <i className="icon-arrow-right-add" /></Link>
										<Link href="/#" className="tf-button-primary style-bg-white active">Learn More <i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="flex gap30 mb-30 flex-wrap">
										<Link href="/#" className="tf-button-primary style-black">Learn More <i className="icon-arrow-right-add" /></Link>
										<Link href="/#" className="tf-button-primary style-black active">Learn More <i className="icon-arrow-right-add" /></Link>
									</div>
								</div>
							</div>
							<div className="col-12">
								<form className="mb-50">
									<h4>Form</h4>
									<div className="row">
										<div className="col-lg-6 mb-50">
											<fieldset className="name mb-50">
												<input type="text" placeholder="First Name" className name="text" tabIndex={2} aria-required="true" required />
											</fieldset>
											<select className="nice-select mb-50" tabIndex={0}>


												<option data-value className="option selected">6 AM</option>
												<option data-value="For Ren" className="option">12 AM</option>
												<option data-value="Sold" className="option">6 PM</option>

											</select>
											<fieldset className="message mb-50">
												<textarea name="message" rows={4} placeholder="Textarea" className tabIndex={2} aria-required="true" required defaultValue={""} />
											</fieldset>
										</div>
										<div className="col-lg-6 mb-50">
											<fieldset className="name mb-50 has-top-title">
												<input type="text" placeholder="First Name" className name="text" tabIndex={2} defaultValue="Ali Tufan" aria-required="true" required />
												<label htmlFor>input hover</label>
											</fieldset>
											<select className="nice-select mb-50" tabIndex={0}>


												<option data-value className="option selected">6 AM</option>
												<option data-value="For Ren" className="option">12 AM</option>
												<option data-value="Sold" className="option">6 PM</option>

											</select>
											<div className="flex justify-between">
												<div>
													<h6 className="mb-20">Radiobox</h6>
													<ul className="flex flex-column gap15">
														<li className="radio-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="radio-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="radio-item">
															<label>
																<p>Items</p>
																<input type="checkbox" defaultChecked />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="radio-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
													</ul>
												</div>
												<div>
													<h6 className="mb-20">Checkbox</h6>
													<ul className="flex flex-column gap15">
														<li className="checkbox-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="checkbox-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="checkbox-item">
															<label>
																<p>Items</p>
																<input type="checkbox" defaultChecked />
																<span className="btn-checkbox" />
															</label>
														</li>
														<li className="checkbox-item">
															<label>
																<p>Items</p>
																<input type="checkbox" />
																<span className="btn-checkbox" />
															</label>
														</li>
													</ul>
												</div>
												<div>
													<h6 className="mb-20">Switch</h6>
													<ul className="flex flex-column gap15">
														<li className="switch-item">
															<label>
																<input className="check" type="checkbox" defaultValue="checkbox" name="check" />
																<p>Items</p>
															</label>
														</li>
														<li className="switch-item">
															<label>
																<input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
																<p>Items</p>
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="col-lg-6">
								<div className="mb-50">
									<h4>Tooltips</h4>
									<div className="flex gap10 flex-wrap">
										<div className="tooltips-item">
											<div className="tooltips-main">
												<p>Top</p>
											</div>
											<div className="sub-tooltips">
												<p>Top</p>
											</div>
										</div>
										<div className="tooltips-item">
											<div className="tooltips-main">
												<p>Bottom</p>
											</div>
											<div className="sub-tooltips bottom">
												<p>Bottom</p>
											</div>
										</div>
										<div className="tooltips-item">
											<div className="tooltips-main">
												<p>Left</p>
											</div>
											<div className="sub-tooltips left">
												<p>Left</p>
											</div>
										</div>
										<div className="tooltips-item">
											<div className="tooltips-main">
												<p>Right</p>
											</div>
											<div className="sub-tooltips right">
												<p>Right</p>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-50">
									<h4>Range Slider</h4>
									<div className="range-slider">
										<div id="range-two-val" />
										<div className="value">
											<div id="skip-value-lower" />&nbsp;-&nbsp;<div id="skip-value-upper" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="mb-50">
									<h4>Progress bars</h4>
									<div className="flex flex-column gap50">
										<div className="progress-bars">
											<div className="progress-bars-line">
												<div data-progress={90} data-max={100} className>
													<p className="progress-bars-number">90%</p>
												</div>
											</div>
										</div>
										<div className="progress-bars">
											<div className="progress-bars-line">
												<div data-progress={50} data-max={100} className>
													<p className="progress-bars-number">50%</p>
												</div>
											</div>
										</div>
										<div className="progress-bars">
											<div className="progress-bars-line">
												<div data-progress={40} data-max={100} className>
													<p className="progress-bars-number">40%</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="mb-50">
									<h4>Typography</h4>
									<p>
										Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.
										<br /><br />
										Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.
									</p>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="mb-50">
									<h4>Room Rules</h4>
									<ul className="list-text">
										<li><p>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p></li>
										<li><p>At urna condimentum mattis pellentesque id nibh.</p></li>
										<li><p>Laoreet non curabitur Magna etiam tempor orci eu lobortis elementum.</p></li>
										<li><p>Bibendum est ultricies integer quis. </p></li>
										<li><p>Semper eget duis at tellus.</p></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="mb-50">
									<div className="wg-blockquote">
										<blockquote>“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies.</blockquote>
										<cite>Ali Tufan - Trip Advisor</cite>
										<div className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" width={45} height={44} viewBox="0 0 45 44" fill="none">
												<g filter="url(#filter0_d_249_14836)">
													<path d="M9.67883 38C6.64234 38 4.27007 36.9524 2.56204 34.8571C0.854015 32.6667 0 29.4286 0 25.1429C0 20.6667 0.99635 16.381 2.98905 12.2857C5.07664 8.19048 8.01825 4.14286 11.8139 0.142864C11.9088 0.0476213 12.0511 0 12.2409 0C12.5255 0 12.7153 0.142858 12.8102 0.428574C13 0.619048 13.0474 0.857143 12.9526 1.14286C10.6752 4.19048 9.10949 7.14286 8.25548 10C7.49635 12.7619 7.11679 15.8571 7.11679 19.2857C7.11679 21.8571 7.44891 23.8571 8.11314 25.2857C8.77737 26.7143 9.67883 28 10.8175 29.1429L5.40876 30.1429C5.31387 28.5238 5.74088 27.2857 6.68978 26.4286C7.73358 25.5714 9.06205 25.1429 10.6752 25.1429C12.6679 25.1429 14.1861 25.7143 15.2299 26.8571C16.3686 28 16.938 29.5714 16.938 31.5714C16.938 33.6667 16.2737 35.2857 14.9453 36.4286C13.7117 37.4762 11.9562 38 9.67883 38ZM31.5985 38C28.562 38 26.1898 36.9524 24.4818 34.8571C22.8686 32.6667 22.062 29.4286 22.062 25.1429C22.062 20.5714 23.0584 16.2381 25.0511 12.1429C27.0438 8.04762 29.9854 4.04762 33.8759 0.142864C33.9708 0.0476213 34.1131 0 34.3029 0C34.5876 0 34.7774 0.142858 34.8723 0.428574C35.062 0.619048 35.1095 0.857143 35.0146 1.14286C32.7372 4.19048 31.1715 7.14286 30.3175 10C29.5584 12.7619 29.1788 15.8571 29.1788 19.2857C29.1788 21.8571 29.4635 23.9048 30.0328 25.4286C30.6971 26.8571 31.5985 28.0952 32.7372 29.1429L27.4708 30.1429C27.3759 28.5238 27.8029 27.2857 28.7518 26.4286C29.7007 25.5714 31.0292 25.1429 32.7372 25.1429C34.7299 25.1429 36.2482 25.7143 37.292 26.8571C38.4307 28 39 29.5714 39 31.5714C39 33.6667 38.3358 35.2857 37.0073 36.4286C35.7737 37.4762 33.9708 38 31.5985 38Z" fill="#1A1A1A" />
												</g>
												<defs>
													<filter id="filter0_d_249_14836" x={0} y={0} width={45} height={44} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
														<feFlood floodOpacity={0} result="BackgroundImageFix" />
														<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
														<feOffset dx={6} dy={6} />
														<feComposite in2="hardAlpha" operator="out" />
														<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
														<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_249_14836" />
														<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_249_14836" result="shape" />
													</filter>
												</defs>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<p>
									Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.
									<br /><br />
									Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.
								</p>
							</div>
						</div>
					</div >
				</section >

			</Layout >
		</>
	)
}