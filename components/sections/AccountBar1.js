
import Link from "next/link"

export default function AccountBar1() {
	return (
		<>

			<section className="account-bar">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="flex justify-between items-center flex-wrap gap15">
								<div>
									<h3 className="wow fadeInUp">Become a Real Estate Agent</h3>
									<div className="text wow fadeInUp" data-wow-delay="0.1s">We only work with the best
										companies around the globe</div>
								</div>
								<Link href="/#" className="tf-button-primary wow fadeInRight">Register Now<i className="icon-arrow-right-add" /></Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
