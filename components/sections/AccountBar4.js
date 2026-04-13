
import Link from "next/link"

export default function AccountBar4() {
	return (
		<>

			<section className="account-bar style-1 type-container">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="wrap">
								<div className="row justify-center">
									<div className="col-10">
										<div className="flex justify-between items-center flex-wrap gap15">
											<div>
												<h3 className="wow fadeInUp">Sign in to streamline your search</h3>
												<div className="text wow fadeInUp">Save properties, create alerts and
													keep track of the enquiries you send to agents.</div>
											</div>
											<Link href="/#" className="tf-button-primary wow fadeInUp">Sign in or create an
												account<i className="icon-arrow-right-add" /></Link>
										</div>
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
