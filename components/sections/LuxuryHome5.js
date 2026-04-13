
import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"

export default function LuxuryHome5() {
	return (
		<>

			<section className="tf-section luxury-home style-4">
				<div className="themesflat-container">
					<div className="row justify-between">
						<div className="col-xl-5 col-lg-6">
							<div className="content">
								<h2 className="wow fadeInUp">
									We Use Real Estate to Show <br />
									Our Appreciation of The <br />
									World
								</h2>
								<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas
									faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum
									massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
								<div className="counter">
									<div>
										<div className="number-counter">
											<div className="text-center">
												$<CounterNumber count={16} />.4M
											</div>
											<p>Owned from properties <br /> transactions</p>
										</div>
										<div className="number-counter">
											<div className="text-center">
												<CounterNumber count={26} />K+
											</div>
											<p>Properties for <br /> Buy</p>
										</div>
									</div>
									<div>
										<div className="number-counter">
											<div className="text-center">
												<CounterNumber count={26} />K+
											</div>
											<p>Properties for <br /> Sell</p>
										</div>
										<div className="number-counter">
											<div className="text-center">
												<CounterNumber count={26} />
											</div>
											<p>Daily completed <br /> transactions.</p>
										</div>
									</div>
								</div>
								<Link href="/#" className="tf-button-primary wow fadeInUp">Learn More <i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image wow fadeInRight">
								<img src="/images/section/luxury-home-6.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
