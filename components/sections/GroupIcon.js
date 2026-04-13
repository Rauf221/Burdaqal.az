
import Link from "next/link"

export default function GroupIcon() {
	return (
		<>

			<section className="tf-section">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="group-icon">
								<h3 className="wow fadeInUp">Looking for the new <br /> home?</h3>
								<div className="text-content wow fadeInUp">10 new offers every day. 350 offers on site,
									trusted by <br /> a community of thousands of users.</div>
								<Link href="/#" className="tf-button-primary style-blue wow fadeInUp">Get Started<i className="icon-arrow-right-add" /></Link>
								<div className="image wow fadeInUp"><img src="/images/image-box/img-1.svg" alt="" /></div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="group-icon style-1">
								<h3 className="wow fadeInUp">Want to sell your <br /> home?</h3>
								<div className="text-content wow fadeInUp">10 new offers every day. 350 offers on site,
									trusted by <br /> a community of thousands of users.</div>
								<Link href="/#" className="tf-button-primary style-blue wow fadeInUp">Get Started<i className="icon-arrow-right-add" /></Link>
								<div className="image wow fadeInUp"><img src="/images/image-box/img-2.svg" alt="" /></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
