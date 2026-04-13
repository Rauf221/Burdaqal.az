
import Link from "next/link"

export default function PerfectHome3() {
	return (
		<>

			<section className="tf-section perfect-home style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-xl-7">
							<div className="wrap-image">
								<div>
									<div className="image item-1  wow fadeInUp" data-wow-delay="0.1s">
										<img src=" images/section/perfect-home-4.jpg" alt="" />
									</div>
									<div className="box  wow fadeInUp" data-wow-delay="0.1s">
										<div className=" icon">
											<i className="flaticon-buy-home" />
										</div>
										<div>
											<p>Properties For Sel</p>
											<h4>14K</h4>
										</div>
									</div>
								</div>
								<div className="image item-2  wow fadeInUp" data-wow-delay="0.1s">
									<img src=" images/section/perfect-home-5.jpg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-5">
							<div className="content-right">
								<h2 className="wow fadeInUp">Why You Should Work <br /> With Us</h2>
								<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas faucibus
									sem. Velit <br /> nunc egestas ut morbi. Leo diam diam.</div>
								<ul className="list">
									<li className="check-ellipse-item style-1 wow fadeInUp">
										<div className="icon">
											<i className="flaticon-check" />
										</div>
										<p>100% Secure</p>
									</li>
									<li className="check-ellipse-item style-1 wow fadeInUp">
										<div className="icon">
											<i className="flaticon-check" />
										</div>
										<p>Wide Range of Properties</p>
									</li>
									<li className="check-ellipse-item style-1 wow fadeInUp">
										<div className="icon">
											<i className="flaticon-check" />
										</div>
										<p>Buy or Rent Homes</p>
									</li>
									<li className="check-ellipse-item style-1 wow fadeInUp">
										<div className="icon">
											<i className="flaticon-check" />
										</div>
										<p>Truested by Thousands</p>
									</li>
								</ul>
								<Link href="/#" className="tf-button-primary style-blue wow fadeInUp">Learn More<i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
