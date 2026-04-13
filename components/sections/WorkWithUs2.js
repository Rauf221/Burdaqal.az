
import Link from "next/link"

export default function WorkWithUs2() {
	return (
		<>

			<section className="tf-section work-with-us style-1">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Find Your Dream House as Easy as 1,2,3</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
					</div>
					<div className="row justify-center">
						<div className="col-xl-10">
							<div className="wrap">
								<div className="box-icon style-3 wow fadeInUp">
									<div className="image">
										<img src="/images/image-box/img-find-1.svg" alt="" />
									</div>
									<div className="content">
										<Link href="/#" className="h4">1. Search for you favorite house <br /> in your
											location</Link>
										<div className="text-content">Pellentesque egestas elementum <br />
											egestas faucibus sem. </div>
									</div>
								</div>
								<div className="box-icon style-3 wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/image-box/img-find-2.svg" alt="" />
									</div>
									<div className="content">
										<Link href="/#" className="h4">2. Make a visit appointment with <br /> one of your
											agents</Link>
										<div className="text-content">Pellentesque egestas elementum <br />
											egestas faucibus sem. </div>
									</div>
								</div>
								<div className="box-icon style-3 wow fadeInUp" data-wow-delay="0.15s">
									<div className="image">
										<img src="/images/image-box/img-find-3.svg" alt="" />
									</div>
									<div className="content">
										<Link href="/#" className="h4">3. Get your dream house in <br />
											a month, or less</Link>
										<div className="text-content">Pellentesque egestas elementum <br />
											egestas faucibus sem. </div>
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
