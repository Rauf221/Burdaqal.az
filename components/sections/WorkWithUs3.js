
import Link from "next/link"

export default function WorkWithUs3() {
	return (
		<>

			<section className="tf-section work-with-us style-2">
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
					<div className="row justify-center">
						<div className="col-xl-10">
							<div className="wrap">
								<div className="box-icon style-1 wow fadeInUp">
									<div className="icon has-ellipse">
										<i className="flaticon-house-1" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Wide Range of Properties</Link>
										<p>We offer expert legal help for all related <br /> property items in Dubai.
										</p>
									</div>
								</div>
								<div className="box-icon style-1 wow fadeInUp" data-wow-delay="0.1s">
									<div className="icon has-ellipse">
										<i className="flaticon-home" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Buy or Rent Homes</Link>
										<p>We sell your home at the best market price <br /> and very quickly as well.
										</p>
									</div>
								</div>
								<div className="box-icon style-1 wow fadeInUp" data-wow-delay="0.2s">
									<div className="icon has-ellipse">
										<i className="flaticon-shield" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Thrusted by Thousands</Link>
										<p>We offer you free consultancy to get a loan <br /> for your new home.</p>
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
