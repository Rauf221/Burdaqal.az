
import ChartList from "@/components/chart/ChartList"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link"
export default function Dashboard() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Hello Ali Tufan">
				<div>
					<div className="grid-section-4 mb-20">
						<div className="wg-box">
							<div className="box-icon style-1 type-row">
								<div className="content">
									<Link href="/#" className="title">16</Link>
									<div className="text-content">Published</div>
								</div>
								<div className="icon has-ellipse">
									<i className="flaticon-outbox" />
								</div>
							</div>
						</div>
						<div className="wg-box">
							<div className="box-icon style-1 type-row">
								<div className="content">
									<Link href="/#" className="title">24</Link>
									<div className="text-content">Pending</div>
								</div>
								<div className="icon has-ellipse">
									<i className="flaticon-file" />
								</div>
							</div>
						</div>
						<div className="wg-box">
							<div className="box-icon style-1 type-row">
								<div className="content">
									<Link href="/#" className="title">39</Link>
									<div className="text-content">Favorites</div>
								</div>
								<div className="icon has-ellipse">
									<i className="flaticon-home-3" />
								</div>
							</div>
						</div>
						<div className="wg-box">
							<div className="box-icon style-1 type-row">
								<div className="content">
									<Link href="/#" className="title">48</Link>
									<div className="text-content">Reviews</div>
								</div>
								<div className="icon has-ellipse">
									<i className="flaticon-comment" />
								</div>
							</div>
						</div>
					</div>
					<div className="grid-section-1">
						<div className="wg-box pl-44">
							<h4>View Statistics</h4>
							<div className="area-chart">
								<ChartList style={1} />
							</div>
						</div>
						<div className="wg-box">
							<h4>Recent Activities</h4>
							<ul className="wrap-recent-activities">
								<li className="recent-activities-item">
									<div className="image" />
									<p>Your listing <span>Modern House in Greenville</span> has been approved!.</p>
								</li>
								<li className="recent-activities-item">
									<div className="image" />
									<p>Kathy Brown left a review on <span>Renovated Apartment</span></p>
								</li>
								<li className="recent-activities-item">
									<div className="image" />
									<p>Someone favorites your <span>Gorgeous Villa Bay</span> View listing!</p>
								</li>
								<li className="recent-activities-item">
									<div className="image" />
									<p>Your listing <span>Luxury Family Home</span> has been approved!</p>
								</li>
								<li className="recent-activities-item">
									<div className="image" />
									<p>Kathy Brown left a review on <span>Renovated Apartment</span></p>
								</li>
								<li className="recent-activities-item">
									<div className="image" />
									<p>Kathy Brown left a review on <span>Renovated Apartment</span></p>
								</li>
								<li>
									<Link href="/#" className="tf-button-primary w-full style-bg-white">View More<i className="icon-arrow-right-add" /></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</LayoutAdmin>
		</>
	)
}