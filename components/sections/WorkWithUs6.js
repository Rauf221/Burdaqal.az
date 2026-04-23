'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { announcementsListQuery, publicStorageUrl } from '@/services/client/properties'

const PLACEHOLDER_IMG = '/images/house/property-listing-1.jpg'

function cardImage(media) {
	const first = media?.cover_image || media?.gallery?.[0]
	const url = first ? publicStorageUrl(first) : null
	return url || PLACEHOLDER_IMG
}

export default function WorkWithUs6() {
	const locale = useLocale()
	const q = useQuery(announcementsListQuery(locale, 1))
	const items = (q.data?.data ?? []).slice(0, 6)

	return (
		<section className="tf-section work-with-us style-3">
			<div className="themesflat-container">
				<div className="row">
					<div className="col-12">
						<div className="heading-section text-center">
							<h2 className="wow fadeInUp">Istirahetin ucun ideal mekani sec</h2>
							<div className="text wow fadeInUp">
								Seherden uzaqlas, rahat bir mekan sec ve istirahetin dadini cixar.
							</div>
						</div>
					</div>
				</div>

				<div className="widget-tabs style-1">
					<div className="row">
						<div className="col-12">
							<ul className="widget-menu-tab">
								<li className="item-title">
									<span className="inner">Villa</span>
								</li>
								<li className="item-title active">
									<span className="inner">Apartments</span>
								</li>
								<li className="item-title">
									<span className="inner">Town House</span>
								</li>
								<li className="item-title">
									<span className="inner">Office</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="widget-content-tab">
						<div className="widget-content-inner active">
							<div className="row">
								{q.isError ? (
									<div className="col-12">
										<p style={{ padding: '8px 0' }}>Elanlar yuklenmedi.</p>
									</div>
								) : q.isPending ? (
									<div className="col-12">
										<p style={{ padding: '8px 0' }}>Yuklenir...</p>
									</div>
								) : items.length === 0 ? (
									<div className="col-12">
										<p style={{ padding: '8px 0' }}>Hele elan yoxdur.</p>
									</div>
								) : (
									items.map((row) => {
										const d = row.detail
										const street = row.address?.street || '-'
										const detailHref = `/elanlar/${row.slug}`
										return (
											<div className="col-xl-4 col-md-6 col-12" key={row.id}>
												<div className="box-dream style-absolute type-no-bg-content">
													<div className="image" style={{ height: 410 }}>
														<div className="list-tags">
															<Link href="/#" className="tags-item for-sell">
																ELAN
															</Link>
														</div>
														<img
															className="w-full"
															src={cardImage(row.media)}
															alt={row.title || ''}
															style={{ width: '100%', height: '100%', objectFit: 'cover' }}
														/>
													</div>
													<div className="content">
														<div className="head">
															<div className="title">
																<Link href={detailHref}>{row.title}</Link>
															</div>
														</div>
														<div className="location">
															<div className="icon">
																<i className="flaticon-location" />
															</div>
															<p>{street}</p>
														</div>
														<div className="flex justify-between items-center">
															<div className="icon-box">
																<div className="item">
																	<i className="flaticon-hotel" />
																	<p>{d ? d.bedroom : '-'}</p>
																</div>
																<div className="item">
																	<i className="flaticon-bath-tub" />
																	<p>{d ? d.bathroom : '-'}</p>
																</div>
																<div className="item">
																	<i className="flaticon-minus-front" />
																	<p>{d ? d.room : '-'}</p>
																</div>
															</div>
															<div className="price">{row.price ? `${row.price} AZN` : '-'}</div>
														</div>
													</div>
												</div>
											</div>
										)
									})
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Link href="/elanlar" className="tf-button-primary border-radius-corner m-auto wow fadeInUp">
							See All Listing<i className="icon-arrow-right-add" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
