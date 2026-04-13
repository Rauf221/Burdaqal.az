
import Link from "next/link"

export default function DownloadApp() {
	return (
		<>

			<section className="tf-section-default">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="download-app">
								<div className="content-right">
									<div className="sub wow fadeInUp">Start today</div>
									<div className="heading wow fadeInUp">Download the App</div>
									<p className="wow fadeInUp">Take classes on the go with the just home app. Stream or
										download <br /> to watch on the plane, the subway, or wherever you learn best.
									</p>
									<ul className="ft-download style-1">
										<li className="wow fadeInUp">
											<Link href="/#">
												<div className="icon">
													<i className="icon-appleinc" />
												</div>
												<div className="app">
													<div>Download on the</div>
													<div>Apple Store</div>
												</div>
											</Link>
										</li>
										<li className=" wow fadeInUp" data-wow-delay="0.1s">
											<Link href="/#">
												<div className="icon">
													<i className="icon-ch-play" />
												</div>
												<div className="app">
													<div>Get in on</div>
													<div>Google Play</div>
												</div>
											</Link>
										</li>
									</ul>
								</div>
								<div className="image wow fadeInRight">
									<img src="/images/section/download-app.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
