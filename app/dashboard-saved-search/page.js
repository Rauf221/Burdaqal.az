
import LayoutAdmin from "@/components/layout/LayoutAdmin"
export default function DashboardSavedSearch() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Saved Search">
				<div className="wg-box pl-44 pr-45">
					<div className="table-text-infor no-border-bottom">
						<div className="head">
							<div className="item">
								<div className="text">Title</div>
							</div>
							<div className="item">
								<div className="text">Saved Search Query</div>
							</div>
							<div className="item">
								<div className="text">Number Properties</div>
							</div>
							<div className="item">
								<div className="text">Times</div>
							</div>
							<div className="item">
								<div className="text">Action</div>
							</div>
						</div>
						<ul>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">Condo</div>
									</div>
									<div>
										<p>Status: For Sale <br /> Home area (sqft) to: 350</p>
									</div>
									<div>
										<p>Properties found 2</p>
									</div>
									<div>
										<p>Daily</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">Fox</div>
									</div>
									<div>
										<p>Status: For Sale</p>
									</div>
									<div>
										<p>Properties found 2</p>
									</div>
									<div>
										<p>Daily</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">Condo 2</div>
									</div>
									<div>
										<p>Status: For Sale <br /> Home area (sqft) to: 350</p>
									</div>
									<div>
										<p>Properties found 2</p>
									</div>
									<div>
										<p>Daily</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">Condo 4</div>
									</div>
									<div>
										<p>Status: For Sale <br /> Home area (sqft) to: 350</p>
									</div>
									<div>
										<p>Properties found 2</p>
									</div>
									<div>
										<p>Daily</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<div className="text-infor-item item">
									<div>
										<div className="title">Condo 4</div>
									</div>
									<div>
										<p>Status: For Sale <br /> Home area (sqft) to: 350</p>
									</div>
									<div>
										<p>Properties found 2</p>
									</div>
									<div>
										<p>Daily</p>
									</div>
									<div>
										<ul className="wg-icon">
											<li className="delete-btns">
												<i className="flaticon-delete" />
											</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

			</LayoutAdmin>
		</>
	)
}