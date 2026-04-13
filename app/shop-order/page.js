
import Layout from "@/components/layout/Layout"
export default function ShopOrder() {

	return (
		<>

			<Layout mainContentCls="pt-200">
				<div className="shop-order-wrap">
					<div className="themesflat-container">
						<div className="row justify-center">
							<div className="col-xl-8">
								<div className="order-completed">
									<div className="icon">
										<svg width={26} height={20} viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M25.9487 3.88393C25.9487 3.4654 25.7812 3.04688 25.4799 2.74554L23.2031 0.46875C22.9018 0.167411 22.4833 0 22.0647 0C21.6462 0 21.2277 0.167411 20.9263 0.46875L9.9442 11.4676L5.02232 6.52902C4.72098 6.22768 4.30246 6.06027 3.88393 6.06027C3.4654 6.06027 3.04688 6.22768 2.74554 6.52902L0.46875 8.8058C0.167411 9.10714 0 9.52567 0 9.9442C0 10.3627 0.167411 10.7813 0.46875 11.0826L6.52902 17.1429L8.8058 19.4196C9.10714 19.721 9.52567 19.8884 9.9442 19.8884C10.3627 19.8884 10.7812 19.721 11.0826 19.4196L13.3594 17.1429L25.4799 5.02232C25.7812 4.72098 25.9487 4.30246 25.9487 3.88393Z" fill="#1A1A1A" />
										</svg>
									</div>
									<h2>Your order is completed!</h2>
									<div className="text-content">Thank you. Your order has been received.</div>
									<div className="order-info">
										<div className="item">
											<p>Order Number</p>
											<p>13119</p>
										</div>
										<div className="item">
											<p>Date</p>
											<p>27/07/2022</p>
										</div>
										<div className="item">
											<p>Total</p>
											<p>$40.10</p>
										</div>
										<div className="item">
											<p>Payment Method</p>
											<p>Direct Bank Transfer</p>
										</div>
									</div>
									<div className="sidebar-shop">
										<div className="sidebar-shop-item your-order">
											<div className="title">Your order</div>
											<div className="flex items-center justify-between">
												<div className="text-1">Product</div>
												<div className="text-1">Subtotal</div>
											</div>
											<div className="divider" />
											<div className="flex items-center justify-between">
												<div className="text">12v Compact Battery Jump Starter x2</div>
												<div className="text">$59.00</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="text">Road and Track Suspensio x 3</div>
												<div className="text">$67.00</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="text-1">Subtotal</div>
												<div className="text-1">$178.00</div>
											</div>
											<div className="divider" />
											<div className="flex items-center justify-between">
												<div className="text-1">Shipping</div>
												<div className="text-1">$178.00</div>
											</div>
											<div className="divider" />
											<div className="flex items-center justify-between">
												<div className="text-1">Total</div>
												<div className="text-1">$9,218.00</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}