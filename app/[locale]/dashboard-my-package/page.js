
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import { Link } from '@/i18n/navigation'
export default function DashboardMyPackage() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="My Package">
				<div className="wg-box pl-44 pr-29">
					<div className="table-text-infor default mb-40">
						<div className="head">
							<div className="item">
								<div className="text">Order ID</div>
							</div>
							<div className="item">
								<div className="text">Package</div>
							</div>
							<div className="item">
								<div className="text">Amount</div>
							</div>
							<div className="item">
								<div className="text">Date</div>
							</div>
							<div className="item">
								<div className="text">Payment Mode</div>
							</div>
							<div className="item">
								<div className="text">Status</div>
							</div>
						</div>
						<ul>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">3684</div>
									</div>
									<div>
										<p>Premium Plan</p>
									</div>
									<div>
										<p>$291</p>
									</div>
									<div>
										<p>May 29, 2023</p>
									</div>
									<div>
										<p>Cash on Delivery</p>
									</div>
									<div>
										<div className="box-status">Processing</div>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">3684</div>
									</div>
									<div>
										<p>Premium Plan</p>
									</div>
									<div>
										<p>$291</p>
									</div>
									<div>
										<p>May 29, 2023</p>
									</div>
									<div>
										<p>Cash on Delivery</p>
									</div>
									<div>
										<div className="box-status">Processing</div>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">3684</div>
									</div>
									<div>
										<p>Premium Plan</p>
									</div>
									<div>
										<p>$291</p>
									</div>
									<div>
										<p>May 29, 2023</p>
									</div>
									<div>
										<p>Cash on Delivery</p>
									</div>
									<div>
										<div className="box-status">Processing</div>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">3684</div>
									</div>
									<div>
										<p>Premium Plan</p>
									</div>
									<div>
										<p>$291</p>
									</div>
									<div>
										<p>May 29, 2023</p>
									</div>
									<div>
										<p>Cash on Delivery</p>
									</div>
									<div>
										<div className="box-status">Processing</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<ul className="wg-pagination justify-center">
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

			</LayoutAdmin>
		</>
	)
}