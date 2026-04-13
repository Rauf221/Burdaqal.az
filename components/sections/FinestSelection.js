
import Link from "next/link"

export default function FinestSelection() {
	return (
		<>

			<section className="tf-section-default finest-selection">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="inner">
								<div className="content">
									<h2 className="wow fadeInUp">Discover Our Finest <br /> Selection</h2>
									<div className="text-content wow fadeInUp">Pellentesque egestas elementum egestas
										faucibus sem. Velit <br /> nunc egestas ut morbi. Leo diam diam.</div>
									<Link href="/#" className="tf-button-primary style-black wow fadeInUp">Discover<i className="icon-arrow-right-add" /></Link>
								</div>
								<div className="image">
									<img src="/images/section/img-half-1.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
