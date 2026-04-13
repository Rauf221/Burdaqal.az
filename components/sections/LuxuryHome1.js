
import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"

export default function LuxuryHome1() {
	return (
		<>

			<section className="tf-section luxury-home has-bg-vector-1">
				<div className="themesflat-container">
					<div className="row justify-between">
						<div className="col-md-6">
							<div className="image wow fadeInLeft">
								<img src="/images/section/luxury-home-1.jpg" alt="" />
								<div className="box">
									<div className="icon">
										<i className="flaticon-customer" />
									</div>
									<div>
										<p>Total Clients</p>
										<h4>7,000 M</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-md-6">
							<div className="content">
								<h2 className="wow fadeInUp">Local expertise for <br /> luxury homes</h2>
								<div className="text-content wow fadeInUp" data-wow-delay="0.1s">Pellentesque egestas
									elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh
									eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
								<Link href="/#" className="tf-button-primary wow fadeInUp" data-wow-delay="0.15s">Learn More
									<i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
						<div className="col-12">
							<div className="counter flex justify-between items-center">
								<div className="number-counter">
									<div className="text-center">
										$<CounterNumber count={16} />.4M
									</div>
									<p>Owned from properties transactions</p>
								</div>
								<div className="number-counter">
									<div className="text-center">
										$<CounterNumber count={26} />K+
									</div>
									<p>Properties for Buy</p>
								</div>
								<div className="number-counter">
									<div className="text-center">
										$<CounterNumber count={26} />K+
									</div>
									<p>Properties for Sell</p>
								</div>
								<div className="number-counter">
									<div className="text-center">
										$<CounterNumber count={26} />
									</div>
									<p>Daily completed transactions.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
