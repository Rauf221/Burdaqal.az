import CounterNumber from "../elements/CounterNumber"


export default function FlatCounter1() {
	return (
		<>

			<section className="tf-section flat-counter">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Our mission is to redefine real estate <br /> in the
									customer's favor.</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
					</div>
					<div className="counter">
						<div className="row">
							<div className="col-xl-3 col-md-6">
								<div className="number-counter style-1">
									<div className="text-center">
										$<CounterNumber count={16} />.4M
									</div>
									<h4>Owned from properties <br /> transactions</h4>
									<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="number-counter style-1">
									<div className="text-center">
										<CounterNumber count={26} />K+
									</div>
									<h4>Properties For <br /> Buy</h4>
									<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="number-counter style-1">
									<div className="text-center">
										<CounterNumber count={26} />K+
									</div>
									<h4>Properties Buy <br /> Sell</h4>
									<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="number-counter style-1">
									<div className="text-center">
										<CounterNumber count={26} />
									</div>
									<h4>Daily Completed <br /> Transactions</h4>
									<p className="text-content">Pellentesque egestas elementum egestas faucibus sem.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
