
import Link from "next/link"

export default function WorkWithUs4() {
	return (
		<>

			<section className="tf-section work-with-us style-4">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Why You Should Work With Us</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="list-item">
								<div className="work-with-us-item wow fadeInUp">
									<div className="proces">Proces - 01</div>
									<h2>
										Buy a Property
										<Link href="/#" className="button-arrow-right style-third"><i className="icon-arrow-right-add" /></Link>
									</h2>
									<div className="text-content">Pellentesque egestas elementum egestas faucibus sem
										velit nunc egestas</div>
								</div>
								<div className="work-with-us-item wow fadeInUp" data-wow-delay="0.1s">
									<div className="proces">Proces - 02</div>
									<h2>
										Sell a Property
										<Link href="/#" className="button-arrow-right style-third"><i className="icon-arrow-right-add" /></Link>
									</h2>
									<div className="text-content">Pellentesque egestas elementum egestas faucibus sem
										velit nunc egestas</div>
								</div>
								<div className="work-with-us-item wow fadeInUp" data-wow-delay="0.2s">
									<div className="proces">Proces - 03</div>
									<h2>
										Rent a Property
										<Link href="/#" className="button-arrow-right style-third"><i className="icon-arrow-right-add" /></Link>
									</h2>
									<div className="text-content">Pellentesque egestas elementum egestas faucibus sem
										velit nunc egestas</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
