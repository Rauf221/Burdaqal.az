
import Link from "next/link"

export default function ChooseUs1() {
	return (
		<>

			<section className="tf-section choose-us has-bg-vector">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className=" wow fadeInUp" data-wow-delay="0.1s">Why Choose Us</h2>
								<div className="text wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-12">
							<div className="box-icon wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon">
									<i className="flaticon-house" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Find your future home</Link>
									<p>We help you find a new home by offering a smart real estate experience</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12">
							<div className="box-icon wow fadeInUp" data-wow-delay="0.15s">
								<div className="icon">
									<i className="flaticon-seller" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Experienced agents</Link>
									<p>Find an experienced agent who knows your market best</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12">
							<div className="box-icon wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon">
									<i className="flaticon-buy-home" />
								</div>
								<div className="content">
									<Link href="/#" className="title">Buy or rent homes</Link>
									<p>Millions of houses and apartments in your favourite cities</p>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12">
							<div className="box-icon wow fadeInUp" data-wow-delay="0.25s">
								<div className="icon">
									<i className="flaticon-computer" />
								</div>
								<div className="content">
									<Link href="/#" className="title">List your own property</Link>
									<p>Sign up now and sell or rent your own properties</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
