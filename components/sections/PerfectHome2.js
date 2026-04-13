
import Link from "next/link"

export default function PerfectHome2() {
	return (
		<>

			<section className="tf-section perfect-home style-1">
				<div className="themesflat-container">
					<div className="row justify-between widget-tabs">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">How It works? Find a perfect home</h2>
								<div className="text wow fadeInUp">Based on your view history</div>
							</div>
						</div>
						<div className="col-md-5">
							<div className="content-left widget-menu-tab">
								<div className="box-icon has-bg item-title active">
									<div className="icon">
										<i className="flaticon-house" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Find Real Estate</Link>
										<p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
											Lorem ipsum dolor sit amet, consectetur adipiscing</p>
									</div>
								</div>
								<div className="box-icon has-bg item-title">
									<div className="icon">
										<i className="flaticon-online-meeting" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Meet Relator</Link>
										<p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
											Lorem ipsum dolor sit amet, consectetur adipiscing</p>
									</div>
								</div>
								<div className="box-icon has-bg item-title">
									<div className="icon">
										<i className="flaticon-rental" />
									</div>
									<div className="content">
										<Link href="/#" className="title">Take The Keys</Link>
										<p>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco
											Lorem ipsum dolor sit amet, consectetur adipiscing</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="widget-content-tab">
								<div className="widget-content-inner active">
									<div className="img-right">
										<img src="/images/section/works-step-1.jpg" alt="" />
									</div>
								</div>
								<div className="widget-content-inner">
									<div className="img-right">
										<img src="/images/section/works-step-1.jpg" alt="" />
									</div>
								</div>
								<div className="widget-content-inner">
									<div className="img-right">
										<img src="/images/section/works-step-1.jpg" alt="" />
									</div>
								</div>
							</div>
							{/* <div className="img-right">
                              <img src="/images/section/works-step-1.jpg" alt="">
                          </div> */}
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
