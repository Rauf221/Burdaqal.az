
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link"
export default function DashboardReviews() {

	return (
		<>

			<LayoutAdmin breadcrumbTitle="Reviews">
				<div className="wg-box pl-44">
					<div className="reviews-wrap mt-0 mb-40">
						<ul>
							<li>
								<div className="image">
									<img src="/images/author/author-5.png" alt="" />
								</div>
								<div className="content">
									<div className="ratings">
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
									</div>
									<div className="name">
										<Link href="/#">Jane Cooper</Link>
									</div>
									<div className="time">April 06, 2024 at 7:55 pm</div>
									<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!.Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam.
									</p></div>
							</li>
							<li>
								<div className="image">
									<img src="/images/author/author-6.png" alt="" />
								</div>
								<div className="content">
									<div className="ratings">
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
									</div>
									<div className="name">
										<Link href="/#">Jane Cooper</Link>
									</div>
									<div className="time">April 06, 2024 at 7:55 pm</div>
									<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!.Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam.</p>
								</div>
							</li>
							<li>
								<div className="image">
									<img src="/images/author/author-5.png" alt="" />
								</div>
								<div className="content">
									<div className="ratings">
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
									</div>
									<div className="name">
										<Link href="/#">Jane Cooper</Link>
									</div>
									<div className="time">April 06, 2024 at 7:55 pm</div>
									<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!.Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam.</p>
								</div>
							</li>
							<li>
								<div className="image">
									<img src="/images/author/author-6.png" alt="" />
								</div>
								<div className="content">
									<div className="ratings">
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
										<i className="flaticon-star-1" />
									</div>
									<div className="name">
										<Link href="/#">Jane Cooper</Link>
									</div>
									<div className="time">April 06, 2024 at 7:55 pm</div>
									<p>Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back during the cooler seasons!.Contentiones vituperatoribus id est, per prima nihil scripta no. No semper forensibus adipiscing quo. Amet deleniti lobortis et eam.</p>
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