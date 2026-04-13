
import Link from "next/link"

export default function PerfectHome1() {
	return (
		<>

			<section className="tf-section perfect-home">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="wrap-image">
								<div className="image mb-20 wow fadeInDown">
									<img src="/images/section/perfect-home-1.jpg" alt="" />
								</div>
								<div className="flex gap20">
									<div className="image wow fadeInLeft">
										<img src="/images/section/perfect-home-2.jpg" alt="" />
									</div>
									<div className="image wow fadeInRight">
										<img src="/images/section/perfect-home-3.jpg" alt="" />
									</div>
								</div>
								<div className="box wow fadeInUp">
									<div className="icon">
										<i className="flaticon-buy-home" />
									</div>
									<div>
										<p>Properties For Sel</p>
										<h4>14K</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="content-right">
								<h2 className="wow fadeInUp">How It works? <br /> Find a perfect home</h2>
								<div className="text-content wow fadeInUp" data-wow-delay="0.1s">Pellentesque egestas
									elementum egestas faucibus sem. Velit <br /> nunc egestas ut morbi. Leo diam diam.
								</div>
								<div className="list">
									<div className="box-icon style-2 wow fadeInUp">
										<div className="icon has-ellipse small">
											<i className="flaticon-house" />
										</div>
										<div className="content">
											<Link href="/#" className="title">Find Real Estate</Link>
											<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei
												graeco</p>
										</div>
									</div>
									<div className="box-icon style-2 wow fadeInUp">
										<div className="icon has-ellipse small">
											<i className="flaticon-online-meeting" />
										</div>
										<div className="content">
											<Link href="/#" className="title">Meet Relator</Link>
											<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei
												graeco</p>
										</div>
									</div>
									<div className="box-icon style-2 wow fadeInUp">
										<div className="icon has-ellipse small">
											<i className="flaticon-rental" />
										</div>
										<div className="content">
											<Link href="/#" className="title">Take The Keys</Link>
											<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei
												graeco</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
