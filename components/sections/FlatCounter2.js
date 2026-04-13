import CounterNumber from "../elements/CounterNumber"


export default function FlatCounter2() {
	return (
		<>

			<section className="tf-section flat-counter style-1">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-lg-7">
							<div className="heading-section mb-0">
								<h2 className="wow fadeInUp">Take a look at our numbers</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="counter">
								<div className="number-counter">
									<div className>
										<CounterNumber count={99} />%
									</div>
									<p className="text-content">Customer satisfaction</p>
								</div>
								<div className="number-counter">
									<div className>
										<CounterNumber count={50} />M+
									</div>
									<p className="text-content">In property sales</p>
								</div>
								<div className="number-counter">
									<div className>
										<CounterNumber count={2400} />
									</div>
									<p className="text-content">Successful sales</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
