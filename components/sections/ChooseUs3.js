
import Link from "next/link"

export default function ChooseUs3() {
	return (
		<>

			<section className="tf-section choose-us style-2">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">How It works? Find a perfect home</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-12">
							<div className="box-icon style-5 wow fadeInUp">
								<div className="icon">
									<i className="flaticon-house" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Find Real Estate</Link>
									<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei graeco</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className="box-icon style-5 wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon">
									<i className="flaticon-online-meeting" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Meet Relator</Link>
									<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei graeco</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12">
							<div className="box-icon style-5 wow fadeInUp" data-wow-delay="0.15s">
								<div className="icon">
									<i className="flaticon-rental" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Take The Keys</Link>
									<p>Sumo petentium ut per, at his wisim utinam <br /> adipiscing. Est ei graeco</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
