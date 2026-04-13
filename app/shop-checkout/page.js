
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ShopCheckout() {

	return (
		<>

			<Layout>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Shop Checkout</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Shop Checkout</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form className="form-shop-checkout">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-8">
								<h4>Billing details</h4>
								<div className="flex gap30 flex-column">
									<div className="cols wow fadeInUp">
										<fieldset className="name">
											<input type="text" placeholder="First Name" className name="text" tabIndex={2} aria-required="true" required />
										</fieldset>
										<fieldset className="name">
											<input type="text" placeholder="Last Name" className name="text" tabIndex={2} aria-required="true" required />
										</fieldset>
									</div>
									<fieldset className="name wow fadeInUp">
										<input type="text" placeholder="Company Name" className name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<select className="nice-select wow fadeInUp" tabIndex={0}>


										<option data-value="USA" className="option selected">USA</option>
										<option data-value="Viet Nam" className="option">Viet Nam</option>
										<option data-value="China" className="option">China</option>

									</select>
									<fieldset className="name wow fadeInUp">
										<input type="text" placeholder="House number and street name" className name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<fieldset className="name wow fadeInUp">
										<input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<select className="nice-select wow fadeInUp" tabIndex={0}>


										<option data-value="USA" className="option selected">USA</option>
										<option data-value="Viet Nam" className="option">Viet Nam</option>
										<option data-value="China" className="option">China</option>

									</select>
									<fieldset className="name wow fadeInUp">
										<input type="text" placeholder="State" className name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<fieldset className="name wow fadeInUp">
										<input type="text" placeholder="Zip code" className name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<fieldset className="number wow fadeInUp">
										<input type="number" placeholder="Phone" className name="number" tabIndex={2} aria-required="true" required />
									</fieldset>
									<fieldset className="email wow fadeInUp">
										<input type="email" placeholder="Email Address" className name="email" tabIndex={2} aria-required="true" required />
									</fieldset>
								</div>
								<div className="additional">
									<h4 className="wow fadeInUp">Additional information</h4>
									<fieldset className="description">
										<textarea name="description" rows={4} placeholder="Order Notes (optional)" className tabIndex={2} aria-required="true" required defaultValue={""} />
									</fieldset>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="sidebar-shop w-420">
									<div className="sidebar-shop-item your-order">
										<div className="title">Your order</div>
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text-1">Product</div>
											<div className="text-1">Subtotal</div>
										</div>
										<div className="divider" />
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text">12v Compact Battery Jump Starter x2</div>
											<div className="text">$59.00</div>
										</div>
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text">Road and Track Suspensio x 3</div>
											<div className="text">$67.00</div>
										</div>
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text-1">Subtotal</div>
											<div className="text-1">$178.00</div>
										</div>
										<div className="divider" />
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text-1">Shipping</div>
											<div className="text-1">$178.00</div>
										</div>
										<div className="divider" />
										<div className="flex items-center justify-between wow fadeInUp">
											<div className="text-1">Total</div>
											<div className="text-1">$9,218.00</div>
										</div>
									</div>
									<div className="sidebar-shop-item payment">
										<div className="title">Payment</div>
										<ul>
											<li className="radio-item wow fadeInUp">
												<label>
													<p>Direct bank transfer</p>
													<input type="checkbox" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="wow fadeInUp">
												<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.Your order will not be shipped until the funds have cleared in our account.</p>
											</li>
											<li className="radio-item wow fadeInUp">
												<label>
													<p>Check payments</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="radio-item wow fadeInUp">
												<label>
													<p>Cash on delivery</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="radio-item wow fadeInUp">
												<label>
													<p>PayPal</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
										</ul>
									</div>
									<Link href="/shop-order" className="tf-button-primary w-full wow fadeInUp">Place Order<i className="icon-arrow-right-add" /></Link>
								</div>
							</div>
						</div>
					</div>
				</form >

			</Layout >
		</>
	)
}