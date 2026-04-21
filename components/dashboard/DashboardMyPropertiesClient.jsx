'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import LayoutAdmin from '@/components/layout/LayoutAdmin'
import { Link } from '@/i18n/navigation'
import { myAnnouncementsListQuery, useDeleteAnnouncementMutation } from '@/services/dashboard/My-properties'

function getMutationErrorMessage(err) {
	if (err == null) return 'Naməlum xəta'
	const data = err.response?.data
	if (data && typeof data === 'object') {
		if (typeof data.message === 'string' && data.message) return data.message
		const errors = data.errors
		if (errors && typeof errors === 'object') {
			const flat = Object.values(errors).flat()
			const first = flat[0]
			if (typeof first === 'string') return first
			if (Array.isArray(first) && typeof first[0] === 'string') return first[0]
		}
	}
	if (err instanceof Error) return err.message
	return 'Sorğu uğursuz oldu.'
}

const PLACEHOLDER_IMG = '/images/house/property-1.jpg'

/** API-dən gələn nisbi yolu tam şəkil URL-ə çevirir (storage əsas saytda ola bilər). */
function absoluteStorageUrl(path) {
	if (!path) return null
	if (path.startsWith('http')) return path
	const base = process.env.NEXT_PUBLIC_USER_API_BASE_URL || ''
	try {
		const u = new URL(base)
		const p = path.startsWith('/') ? path : `/${path}`
		return `${u.origin}${p}`
	} catch {
		return path
	}
}

/** API: status 1 = dərc, 0 = gözləmədə */
function announcementStatusLabel(status) {
	if (status === 1) return { label: 'Dərc edilib', active: true }
	if (status === 0) return { label: 'Gözləmədə', active: false }
	return { label: '—', active: false }
}

export default function DashboardMyPropertiesClient() {
	const locale = useLocale()
	const [page, setPage] = useState(1)
	const [deleteError, setDeleteError] = useState(null)
	const q = useQuery(myAnnouncementsListQuery(locale, page))
	const deleteM = useDeleteAnnouncementMutation(locale)

	function handleDeleteAnnouncement(announcementId, title, options) {
		const { goPrevPageIfLast } = options ?? {}
		if (
			typeof globalThis.confirm === 'function' &&
			!globalThis.confirm(`«${title}» elanını silmək istəyirsiniz? Bu əməliyyat geri qaytarılmır.`)
		) {
			return
		}
		setDeleteError(null)
		deleteM.mutate(announcementId, {
			onSuccess: () => {
				if (goPrevPageIfLast) setPage((p) => Math.max(1, p - 1))
			},
			onError: (err) => setDeleteError(getMutationErrorMessage(err)),
		})
	}

	const items = q.data?.data ?? []
	const meta = q.data?.meta
	const lastPage = meta?.last_page ?? 1
	const currentPage = meta?.current_page ?? page
	const total = meta?.total ?? 0

	return (
		<LayoutAdmin breadcrumbTitle="My Properties">
			<div className="wg-box pl-44">
				{q.isError ? (
					<p style={{ color: '#c0392b', marginBottom: 16 }}>
						Elanlar yüklənmədi. Giriş etdiyinizdən və ya şəbəkədən əmin olun.
					</p>
				) : null}
				{deleteError ? (
					<p role="alert" style={{ color: '#c0392b', marginBottom: 16 }}>
						{deleteError}
					</p>
				) : null}

				<div className="table-listing-properties mb-40">
					<div className="head">
						<div className="item">
							<div className="text">Elan</div>
						</div>
						<div className="item">
							<div className="text">Giriş / Çıxış</div>
						</div>
						<div className="item">
							<div className="text">Status</div>
						</div>
						<div className="item">
							<div className="text">Tutum</div>
						</div>
						<div className="item">
							<div className="text">Əməliyyat</div>
						</div>
					</div>
					{q.isPending ? (
						<p className="text-muted" style={{ padding: '24px 0' }}>
							Yüklənir…
						</p>
					) : items.length === 0 ? (
						<p style={{ padding: '24px 0' }}>Hələ elan yoxdur.</p>
					) : (
						<ul>
							{items.map((row) => {
								const imgSrc = absoluteStorageUrl(row.media?.cover_image) || PLACEHOLDER_IMG
								const street = row.address?.street
								const d = row.detail
								const st = announcementStatusLabel(row.status)
								const isOnlyRowOnPage = items.length === 1
								const goPrevAfterDelete = isOnlyRowOnPage && page > 1

								return (
									<li key={row.id}>
										<div className="my-properties-item item">
											<div>
												<div className="property">
													<div className="image">
														<img
															src={imgSrc}
															alt=""
															onError={(e) => {
																e.currentTarget.src = PLACEHOLDER_IMG
															}}
														/>
													</div>
													<div>
														<div className="price">{row.price ? `${row.price} AZN` : '—'}</div>
														<div className="title">
															<span style={{ cursor: 'default' }}>{row.title}</span>
														</div>
														<div className="location">
															<div className="icon">
																<i className="flaticon-location" />
															</div>
															<p>{street || '—'}</p>
														</div>
													</div>
												</div>
											</div>
											<div>
												<p>
													{row.check_in || '—'} / {row.check_out || '—'}
												</p>
											</div>
											<div>
												<div
													className="box-status"
													style={
														st.active
															? undefined
															: { backgroundColor: '#9e9e9e', color: '#fff' }
													}
												>
													{st.label}
												</div>
											</div>
											<div>
												{d ? (
													<p style={{ margin: 0, lineHeight: 1.4 }}>
														{d.room} otaq · {d.bedroom} yataq · {d.bathroom} hamam
														<br />
														<small className="text-muted">Maks. {d.guest} qonaq</small>
													</p>
												) : (
													<p>—</p>
												)}
											</div>
											
											<div>
												<ul className="wg-icon">
													<li className="edit-btns" title="Redaktə (tezliklə)">
														<Link href="/dashboard-add-properties">
															<i className="flaticon-edit" />
														</Link>
													</li>
													<li className="delete-btns">
														<button
															type="button"
															title="Sil"
															disabled={deleteM.isPending}
															onClick={() =>
																handleDeleteAnnouncement(row.id, row.title, {
																	goPrevPageIfLast: goPrevAfterDelete,
																})
															}
															style={{
																background: 'none',
																border: 0,
																padding: 0,
																cursor: deleteM.isPending ? 'wait' : 'pointer',
																color: 'inherit',
															}}
															aria-label="Elanı sil"
														>
															<i className="flaticon-delete" />
														</button>
													</li>
												</ul>
											</div>
										</div>
									</li>
								)
							})}
						</ul>
					)}
				</div>

				{!q.isPending && total > 0 && lastPage > 1 ? (
					<ul className="wg-pagination justify-center" style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
						<li>
							<button
								type="button"
								className="tf-button-primary"
								style={{ opacity: currentPage <= 1 ? 0.5 : 1 }}
								disabled={currentPage <= 1}
								onClick={() => setPage((p) => Math.max(1, p - 1))}
								aria-label="Əvvəlki səhifə"
							>
								<i className="icon-keyboard_arrow_left" />
							</button>
						</li>
						<li>
							<span style={{ padding: '0 12px', fontSize: 14 }}>
								Səhifə {currentPage} / {lastPage} (cəmi {total})
							</span>
						</li>
						<li>
							<button
								type="button"
								className="tf-button-primary"
								style={{ opacity: currentPage >= lastPage ? 0.5 : 1 }}
								disabled={currentPage >= lastPage}
								onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
								aria-label="Növbəti səhifə"
							>
								<i className="icon-keyboard_arrow_right" />
							</button>
						</li>
					</ul>
				) : null}
			</div>
		</LayoutAdmin>
	)
}
