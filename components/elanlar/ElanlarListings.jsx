'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import SliderBoxDream from '@/components/slider/SliderBoxDream'
import { announcementsListQuery, publicStorageUrl } from '@/services/client/properties'

const PLACEHOLDER_IMG = '/images/house/property-listing-1.jpg'

function sliderImageUrls(media) {
	if (!media?.cover_image && !(media?.gallery?.length)) {
		return [PLACEHOLDER_IMG]
	}
	const paths = [media.cover_image, ...(media.gallery ?? [])].filter(Boolean)
	const uniq = [...new Set(paths)]
	const urls = uniq
		.map((p) => publicStorageUrl(p))
		.filter((u) => u != null && u !== '')
	return urls.length ? urls : [PLACEHOLDER_IMG]
}

export default function ElanlarListings() {
	const locale = useLocale()
	const [page, setPage] = useState(1)
	const q = useQuery(announcementsListQuery(locale, page))

	const items = q.data?.data ?? []
	const meta = q.data?.meta
	const total = meta?.total ?? 0
	const lastPage = meta?.last_page ?? 1
	const currentPage = meta?.current_page ?? page

	return (
		<div className="property-grid-wrap-v2">
			<div className="themesflat-container">
				<div className="row">
					<div className="col-12">
						<div className="top">
							<div className="sub wow fadeInUp">
								<p>{q.isPending ? '…' : `${total} nəticə`}</p>
								<div className="sort-wrap">
									<p>Sırala</p>
									<select className="nice-select default" tabIndex={0} disabled aria-disabled="true">
										<option data-value className="option selected">
											Ən yeni
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{q.isError ? (
						<div className="col-12">
							<p className="text-danger" style={{ padding: '24px 12px' }}>
								Elanlar yüklənmədi. Bir az sonra yenidən yoxlayın.
							</p>
						</div>
					) : q.isPending ? (
						<div className="col-12">
							<p className="text-muted" style={{ padding: '24px 12px' }}>
								Yüklənir…
							</p>
						</div>
					) : (
						items.map((row, index) => {
							const wowDelay =
								index % 3 === 1 ? '0.1s' : index % 3 === 2 ? '0.2s' : undefined
							const d = row.detail
							const street = row.address?.street
							const images = sliderImageUrls(row.media)
							const detailHref = `/elanlar/${row.slug}`

							return (
								<div className="col-xl-4 col-md-6" key={row.id}>
									<div
										className="box-dream has-border wow fadeInUp"
										{...(wowDelay ? { 'data-wow-delay': wowDelay } : {})}
									>
										<div className="image-group relative">
											<div className="list-tags">
												<span className="tags-item for-sell">ELAN</span>
											</div>
											<div className="button-heart">
												<i className="flaticon-heart-1" />
											</div>
											<SliderBoxDream
												path="house/property-listing"
												start={1}
												end={3}
												detailHref={detailHref}
												images={images}
												navKey={`elan-${row.id}`}
											/>
										</div>
										<Link href={detailHref} className="box-dream-body-link">
											<div className="content">
												<div className="head">
													<div className="title">{row.title}</div>
													<div className="price">
														{row.price ? `${row.price} AZN` : '—'}
													</div>
												</div>
												<div className="location">
													<div className="icon">
														<i className="flaticon-location" />
													</div>
													<p>{street || '—'}</p>
												</div>
												<div className="icon-box">
													<div className="item">
														<i className="flaticon-hotel" />
														<p>{d ? `${d.bedroom} yataq` : '—'}</p>
													</div>
													<div className="item">
														<i className="flaticon-bath-tub" />
														<p>{d ? `${d.bathroom} hamam` : '—'}</p>
													</div>
													<div className="item">
														<i className="flaticon-minus-front" />
														<p>{d ? `${d.room} otaq` : '—'}</p>
													</div>
												</div>
											</div>
										</Link>
									</div>
								</div>
							)
						})
					)}
				</div>
				{!q.isPending && !q.isError && items.length === 0 ? (
					<div className="row">
						<div className="col-12">
							<p style={{ padding: '24px 12px' }}>Hələ elan yoxdur.</p>
						</div>
					</div>
				) : null}
				{lastPage > 1 ? (
					<div className="row">
						<div className="col-12">
							<ul
								className="wg-pagination justify-center wow fadeInUp"
								style={{
									listStyle: 'none',
									padding: 0,
									display: 'flex',
									gap: 8,
									flexWrap: 'wrap',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<li>
									<button
										type="button"
										className="tf-button-primary"
										style={{
											opacity: currentPage <= 1 ? 0.5 : 1,
											border: 'none',
											cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
										}}
										disabled={currentPage <= 1}
										onClick={() => setPage((p) => Math.max(1, p - 1))}
										aria-label="Əvvəlki səhifə"
									>
										<i className="icon-keyboard_arrow_left" />
									</button>
								</li>
								<li>
									<span style={{ padding: '0 12px', fontSize: 14 }}>
										Səhifə {currentPage} / {lastPage}
									</span>
								</li>
								<li>
									<button
										type="button"
										className="tf-button-primary"
										style={{
											opacity: currentPage >= lastPage ? 0.5 : 1,
											border: 'none',
											cursor: currentPage >= lastPage ? 'not-allowed' : 'pointer',
										}}
										disabled={currentPage >= lastPage}
										onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
										aria-label="Növbəti səhifə"
									>
										<i className="icon-keyboard_arrow_right" />
									</button>
								</li>
							</ul>
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}
