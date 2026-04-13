
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ShopCart() {

	return (
		<>

			<Layout>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Shop Cart</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Shop Cart</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form className="form-shop-cart">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-lg-8">
								<div className="table-shop-cart default mb-30">
									<div className="head">
										<div className="item">
											<div className="text">Product</div>
										</div>
										<div className="item">
											<div className="text">Price</div>
										</div>
										<div className="item">
											<div className="text">Quantity</div>
										</div>
										<div className="item">
											<div className="text">Subtotal</div>
										</div>
									</div>
									<ul>
										<li>
											<div className="shop-cart-item item">
												<div className="image">
													<img src="/images/shop/shop-8.png" alt="" />
												</div>
												<div>
													<div className="title">
														<Link href="/#">Coffe thermos</Link>
													</div>
												</div>
												<div>
													<p>$298</p>
												</div>
												<div>
													<div className="wg-quantity">
														<span className="btn-quantity minus-btn">-</span>
														<input type="text" name="number" defaultValue={12} />
														<span className="btn-quantity plus-btn">+</span>
													</div>
												</div>
												<div>
													<div className="flex justify-between items-center">
														<p>$1.298</p>
														<ul className="wg-icon">
															<li className="delete-btns">
																<i className="flaticon-delete" />
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="shop-cart-item item">
												<div className="image">
													<img src="/images/shop/shop-6.png" alt="" />
												</div>
												<div>
													<div className="title">
														<Link href="/#">Coffe table</Link>
													</div>
												</div>
												<div>
													<p>$298</p>
												</div>
												<div>
													<form className>
														<div className="wg-quantity">
															<span className="btn-quantity minus-btn">-</span>
															<input type="text" name="number" defaultValue={12} />
															<span className="btn-quantity plus-btn">+</span>
														</div>
													</form>
												</div>
												<div>
													<div className="flex justify-between items-center">
														<p>$1.298</p>
														<ul className="wg-icon">
															<li className="delete-btns">
																<i className="flaticon-delete" />
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="bottom">
									<div className="flex gap20 flex-grow flex-wrap">
										<fieldset className="name">
											<input type="text" placeholder="Name" className name="text" tabIndex={2} defaultValue="Coupon Code" aria-required="true" required />
										</fieldset>
										<button className="tf-button-primary style-black" type="submit">Apply Coupon<i className="icon-arrow-right-add" /></button>
									</div>
									<Link href="/shop-single" className="tf-button-primary type-1 style-bg-white">Update Cart<i className="icon-arrow-right-add" /></Link>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="sidebar-shop">
									<div className="sidebar-shop-item cart-totals">
										<div className="title">Cart Totals</div>
										<div className="flex items-center justify-between">
											<div className="text">Subtotal</div>
											<div className="text-1">$1.298</div>
										</div>
										<div className="divider" />
										<div className="flex items-center justify-between">
											<div className="text">Total</div>
											<div className="text-1">$3.298</div>
										</div>
										<Link href="/shop-checkout" className="tf-button-primary w-full">Proceed to Checkout<i className="icon-arrow-right-add" /></Link>
									</div>
								</div>
							</div>
						</div>
					</div></form>

			</Layout>
		</>
	)
}