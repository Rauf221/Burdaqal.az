
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import { Link } from '@/i18n/navigation'
export default function DashboardMyProperties() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="My Properties">
				<div className="wg-box pl-44">
					<div className="table-listing-properties mb-40">
						<div className="head">
							<div className="item">
								<div className="text">Listing Title</div>
							</div>
							<div className="item">
								<div className="text">Expiry</div>
							</div>
							<div className="item">
								<div className="text">Status</div>
							</div>
							<div className="item">
								<div className="text">View</div>
							</div>
							<div className="item">
								<div className="text">Action</div>
							</div>
						</div>
						<ul>
							<li>
								<div className="my-properties-item item">
									<div>
										<div className="property">
											<div className="image">
												<img src="/images/house/property-1.jpg" alt="" />
											</div>
											<div>
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/#">Archer House</Link>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<p>April 7, 2030</p>
									</div>
									<div>
										<div className="box-status">Published</div>
									</div>
									<div>
										<p>10660</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="my-properties-item item">
									<div>
										<div className="property">
											<div className="image">
												<img src="/images/house/property-1.jpg" alt="" />
											</div>
											<div>
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/#">Archer House</Link>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<p>April 7, 2030</p>
									</div>
									<div>
										<div className="box-status">Published</div>
									</div>
									<div>
										<p>10660</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="my-properties-item item">
									<div>
										<div className="property">
											<div className="image">
												<img src="/images/house/property-1.jpg" alt="" />
											</div>
											<div>
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/#">Archer House</Link>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<p>April 7, 2030</p>
									</div>
									<div>
										<div className="box-status">Published</div>
									</div>
									<div>
										<p>10660</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="my-properties-item item">
									<div>
										<div className="property">
											<div className="image">
												<img src="/images/house/property-1.jpg" alt="" />
											</div>
											<div>
												<div className="price">$815,000</div>
												<div className="title">
													<Link href="/#">Archer House</Link>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>148-37 88th Ave, Jamaica, NY 11435</p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<p>April 7, 2030</p>
									</div>
									<div>
										<div className="box-status">Published</div>
									</div>
									<div>
										<p>10660</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="edit-btns">
												<i className="flaticon-edit" />
											</li>
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
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