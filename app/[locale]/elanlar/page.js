import Layout from '@/components/layout/Layout'
import ElanlarListings from '@/components/elanlar/ElanlarListings'
import ElanlarFilterForm from '@/components/elanlar/ElanlarFilterForm'
import { Link } from '@/i18n/navigation'

export default function PropertyGridV2() {

	return (
		<>

			<Layout mainContentCls="px-20 default">
				<div>
					<div className="flat-title page-property-grid-2">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="content">
										<h2 className="wow fadeInUp">Real Estate &amp; Homes For Sale</h2>
										<ul className="breadcrumbs wow fadeInUp">
											<li><Link href="/">Home</Link></li><li>/</li><li>Properties</li>
										</ul>
										<ElanlarFilterForm />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* /flat-title */}
					<ElanlarListings />
				</div>

			</Layout>
		</>
	)
}