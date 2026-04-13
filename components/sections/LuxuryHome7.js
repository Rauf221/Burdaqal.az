
import Link from "next/link"

export default function LuxuryHome7() {
	return (
		<>

			<section className="tf-section luxury-home style-5">
				<div className="themesflat-container">
					<div className="row justify-between">
						<div className="col-xl-5 col-md-6">
							<div className="content">
								<h2 className="wow fadeInUp">Local expertise for <br /> luxury homes</h2>
								<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas
									faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum
									massa pretium. Mi mauris nulla ac dictum ut mauris non.</div>
								<Link href="/#" className="tf-button-primary wow fadeInUp">Learn More <i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
						<div className="col-md-6">
							<div className="image wow fadeInRight">
								<img src="/images/section/luxury-home-5.jpg" alt="" />
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
					</div>
				</div>
			</section>
		</>
	)
}
