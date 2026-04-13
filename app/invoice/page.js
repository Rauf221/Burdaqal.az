
import Link from "next/link"
export default function Invoice() {

	return (
		<>

			<div id="wrapper">
				{/* #page */}
				<div id="page" className="background-F9F9F9">
					<div className="page-invoice">
						<div className="btns-print">
							<Link href="/#" className="tf-button-primary">Print this invoice<i className="icon-arrow-right-add" /></Link>
						</div>
						<div className="wrap">
							<div className="inner">
								<div className="invoice">Invoice #</div>
								<div className="number">0043128641</div>
								<div className="logo">
									<img src="/images/logo/logo-footer-black.svg" alt="" />
								</div>
								<div className="infor-item">
									<div>
										<p>Invoice date:</p>
										<div className="text">03/10/2022</div>
									</div>
									<div>
										<p>Due date:</p>
										<div className="text">03/10/2022</div>
									</div>
								</div>
								<div className="infor-item item-2">
									<div>
										<h4>Supplier</h4>
										<div className="text">Jobio LLC</div>
										<p>2301 Ravenswood Rd Madison, WI 53711</p>
									</div>
									<div>
										<h4>Customer</h4>
										<div className="text">John Doe</div>
										<p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
									</div>
								</div>
								<div className="table-total-due">
									<div className="head">
										<div className="title">Description</div>
										<div className="title">Price</div>
										<div className="title">VAT (20%)</div>
										<div className="title">Total</div>
									</div>
									<ul>
										<li>
											<div>
												<p>Standard Plan</p>
											</div>
											<div>
												<p>$443.00</p>
											</div>
											<div>
												<p>$921.80</p>
											</div>
											<div>
												<p>$9243</p>
											</div>
										</li>
										<li>
											<div>
												<p>Extra Plan</p>
											</div>
											<div>
												<p>$413.00</p>
											</div>
											<div>
												<p>$912.80</p>
											</div>
											<div>
												<p>$5943</p>
											</div>
										</li>
									</ul>
									<div className="total">
										<div className="title">Total Due</div>
										<div className="title">$9,750</div>
									</div>
								</div>
							</div>
							<div className="bottom">
								<p>www.justhome.com</p>
								<p>invoice@justhome.com</p>
								<p>(123) 123-456</p>
							</div>
						</div>
					</div>
				</div>
				{/* /#page */}
			</div>

		</>
	)
}