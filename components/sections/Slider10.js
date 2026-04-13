
import Link from "next/link"
import CounterNumber from "../elements/CounterNumber"

export default function Slider10() {
	return (
		<>

			<section className="slider home10">
				<div className="wrap-slider">
					<div className="slider-item">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="slider-content">
										<h1 className="wow fadeInUp">The <span>#1</span> site real estate <br />
											professionals trust*</h1>
										<div className="text wow fadeInUp">From as low as $10 per day with limited time
											offer discounts.</div>
										<Link href="/#" className="btns-more wow fadeInUp">Browse More Properties<i className="icon-arrow-right-add" /></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="counter">
						<div className="number-counter">
							<div className>
								<CounterNumber count={620} />
							</div>
							<p>Awward Winning</p>
						</div>
						<div className="number-counter">
							<div className>
								<CounterNumber count={2} />K+
							</div>
							<p>Happy Customer</p>
						</div>
						<div className="number-counter">
							<div className>
								<CounterNumber count={500} />+
							</div>
							<p>Property Ready</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
