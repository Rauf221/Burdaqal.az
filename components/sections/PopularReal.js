
import Link from "next/link"

export default function PopularReal() {
	return (
		<>

			<section className="tf-section popular-real">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Popular Real Estate Markets</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<ul className="grid-tags">
								<li><Link href="/#">The Villages, FL real estate</Link></li>
								<li><Link href="/#">New York, NY real estate</Link></li>
								<li><Link href="/#">Madera, CA real estate</Link></li>
								<li><Link href="/#">Fontana, CA real estate</Link></li>
								<li><Link href="/#">Moreno Valley, CA real estate</Link></li>
								<li><Link href="/#">Aurora, IL real estate</Link></li>
								<li><Link href="/#">Perris, CA real estate</Link></li>
								<li><Link href="/#">Minnesota Lake, MN real estate</Link></li>
								<li><Link href="/#">Woodbridge, VA real estate</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
