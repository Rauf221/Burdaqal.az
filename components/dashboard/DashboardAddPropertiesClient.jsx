'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import LayoutAdmin from '@/components/layout/LayoutAdmin'
import TimeDigitsInput from '@/components/dashboard/TimeDigitsInput'
import {
	attributesListQuery,
	categoriesListQuery,
	groupAttributesByParent,
	regionsListQuery,
	useSaveAddressSectionMutation,
	useSaveAnnouncementCoreMutation,
	useSaveAttributeSectionMutation,
	useSaveDetailSectionMutation,
	useSaveMediaSectionMutation,
} from '@/services/dashboard/Add-New-Properties'

function getSubmitErrorMessage(err) {
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

/** Bakı mərkəzi — xəritə önizləməsi */
const MAP_EMBED_BAKU =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90504353077!2d49.8185576!3d40.3931052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd475b172%3A0xae10b7968942d9e8!2sBaku%2C%20Azerbaijan!5e0!3m2!1saz!2s!4v1700000000000!5m2!1saz!2s'

const MEDIA_RULES = {
	minWidth: 800,
	minHeight: 600,
	maxFileMb: 5,
}

const LABEL_ABOVE = { display: 'block', marginBottom: 10, fontWeight: 600, fontSize: 17 }

export default function DashboardAddPropertiesClient() {
	const locale = useLocale()
	const formRef = useRef(null)
	const [submitError, setSubmitError] = useState(null)
	const [submitSuccess, setSubmitSuccess] = useState(null)
	const [announcementId, setAnnouncementId] = useState(null)
	const [addressId, setAddressId] = useState(null)
	const [detailId, setDetailId] = useState(null)
	const [mediaId, setMediaId] = useState(null)
	const [attributesDidStore, setAttributesDidStore] = useState(false)

	const coverBlobRef = useRef(null)
	const galleryBlobsRef = useRef([])
	const [coverPreviewUrl, setCoverPreviewUrl] = useState(null)
	const [galleryPreviews, setGalleryPreviews] = useState([])

	useEffect(() => {
		return () => {
			if (coverBlobRef.current) {
				URL.revokeObjectURL(coverBlobRef.current)
				coverBlobRef.current = null
			}
			galleryBlobsRef.current.forEach((u) => URL.revokeObjectURL(u))
			galleryBlobsRef.current = []
		}
	}, [])

	function handleCoverPreviewChange(e) {
		const file = e.target.files?.[0]
		if (coverBlobRef.current) {
			URL.revokeObjectURL(coverBlobRef.current)
			coverBlobRef.current = null
		}
		if (file && file.type.startsWith('image/')) {
			const url = URL.createObjectURL(file)
			coverBlobRef.current = url
			setCoverPreviewUrl(url)
		} else {
			setCoverPreviewUrl(null)
		}
	}

	function handleGalleryPreviewChange(e) {
		galleryBlobsRef.current.forEach((u) => URL.revokeObjectURL(u))
		galleryBlobsRef.current = []
		const files = [...(e.target.files || [])].filter((f) => f.type.startsWith('image/'))
		const next = files.map((f) => {
			const url = URL.createObjectURL(f)
			galleryBlobsRef.current.push(url)
			return { url, name: f.name }
		})
		setGalleryPreviews(next)
	}

	const coreM = useSaveAnnouncementCoreMutation(locale)
	const addrM = useSaveAddressSectionMutation(locale)
	const detailM = useSaveDetailSectionMutation(locale)
	const mediaM = useSaveMediaSectionMutation(locale)
	const attrM = useSaveAttributeSectionMutation(locale)

	const catQ = useQuery(categoriesListQuery(locale))
	const regQ = useQuery(regionsListQuery(locale))
	const attrQ = useQuery(attributesListQuery(locale))

	function handleSaveCore() {
		setSubmitError(null)
		setSubmitSuccess(null)
		const form = formRef.current
		if (!form) return

		const raw = new FormData(form)
		const title = String(raw.get('title') ?? '').trim()
		const description = String(raw.get('description') ?? '').trim()
		const categoryId = String(raw.get('category_id') ?? '').trim()
		const price = String(raw.get('price') ?? '').trim()

		if (!title) {
			setSubmitError('Elan başlığını yazın.')
			return
		}
		if (!description) {
			setSubmitError('Təsviri yazın.')
			return
		}
		if (!categoryId) {
			setSubmitError('Kateqoriya seçin.')
			return
		}
		if (!price) {
			setSubmitError('Qiymət daxil edin.')
			return
		}

		coreM.mutate(
			{ source: raw, announcementId },
			{
				onSuccess: ({ id, created }) => {
					setAnnouncementId(id)
					setSubmitSuccess(
						created
							? `Əsas məlumatlar saxlanıldı. Elan ID: ${id}. Digər bölmələri doldura bilərsiniz.`
							: 'Əsas məlumatlar serverdə yeniləndi.'
					)
				},
				onError: (err) => setSubmitError(getSubmitErrorMessage(err)),
			}
		)
	}

	function requireAnnouncementId() {
		if (announcementId == null) {
			setSubmitError('Əvvəl «Əsas məlumatlar» bölməsindən elanı saxlayın.')
			return false
		}
		return true
	}

	function handleSaveLocation() {
		setSubmitError(null)
		setSubmitSuccess(null)
		if (!requireAnnouncementId()) return
		const form = formRef.current
		if (!form) return
		const raw = new FormData(form)
		const regionId = String(raw.get('region_id') ?? '').trim()
		const street = String(raw.get('street_address') ?? '').trim()
		if (!regionId) {
			setSubmitError('Şəhər (rayon) seçin.')
			return
		}
		if (!street) {
			setSubmitError('Tam ünvanı yazın.')
			return
		}

		addrM.mutate(
			{ source: raw, announcementId, addressId },
			{
				onSuccess: (data) => {
					if (data?.addressId != null) setAddressId(data.addressId)
					setSubmitSuccess('Ünvan saxlanıldı (announcement-address).')
				},
				onError: (err) => setSubmitError(getSubmitErrorMessage(err)),
			}
		)
	}

	function handleSaveCapacity() {
		setSubmitError(null)
		setSubmitSuccess(null)
		if (!requireAnnouncementId()) return
		const form = formRef.current
		if (!form) return
		const raw = new FormData(form)
		const room = String(raw.get('room_count') ?? '').trim()
		const bed = String(raw.get('bed_count') ?? '').trim()
		const bath = String(raw.get('bathroom_count') ?? '').trim()
		const guest = String(raw.get('max_guests') ?? '').trim()
		if (!room || !bed || !bath || !guest) {
			setSubmitError('Otaq, yataq, hamam və qonaq saylarını doldurun.')
			return
		}

		detailM.mutate(
			{ source: raw, announcementId, detailId },
			{
				onSuccess: (data) => {
					if (data?.detailId != null) setDetailId(data.detailId)
					setSubmitSuccess('Tutum məlumatları saxlanıldı (announcement-detail).')
				},
				onError: (err) => setSubmitError(getSubmitErrorMessage(err)),
			}
		)
	}

	function handleSaveMedia() {
		setSubmitError(null)
		setSubmitSuccess(null)
		if (!requireAnnouncementId()) return
		const form = formRef.current
		if (!form) return
		const raw = new FormData(form)

		const cover = raw.get('cover_image')
		const galleryFiles = [...raw.getAll('gallery_images[]')].filter(
			(f) => f instanceof File && f.size > 0
		)
		const hasVideo = String(raw.get('video_youtube_url') ?? '').trim() !== ''

		if (mediaId == null) {
			const onlyVideo =
				hasVideo &&
				galleryFiles.length === 0 &&
				(!(cover instanceof File) || cover.size === 0)
			if (!onlyVideo) {
				if (!(cover instanceof File) || cover.size === 0) {
					setSubmitError('Cover şəkil yükləyin (və ya yalnız YouTube linki ilə davam edin).')
					return
				}
				if (galleryFiles.length < 5) {
					setSubmitError('Ən azı 5 qalereya şəkli seçin.')
					return
				}
			}
		} else if (galleryFiles.length > 0 && galleryFiles.length < 5) {
			setSubmitError('Ən azı 5 qalereya şəkli seçin (və ya heç birini dəyişməyin).')
			return
		}

		mediaM.mutate(
			{ source: raw, announcementId, mediaId },
			{
				onSuccess: (data) => {
					if (data?.mediaId != null) setMediaId(data.mediaId)
					setSubmitSuccess('Media saxlanıldı (announcement-media).')
				},
				onError: (err) => setSubmitError(getSubmitErrorMessage(err)),
			}
		)
	}

	function handleSaveAmenities() {
		setSubmitError(null)
		setSubmitSuccess(null)
		if (!requireAnnouncementId()) return
		const form = formRef.current
		if (!form) return
		const raw = new FormData(form)

		attrM.mutate(
			{ source: raw, announcementId, didStoreOnce: attributesDidStore },
			{
				onSuccess: () => {
					setAttributesDidStore(true)
					setSubmitSuccess('İmkanlar saxlanıldı (announcement-attribute).')
				},
				onError: (err) => setSubmitError(getSubmitErrorMessage(err)),
			}
		)
	}

	const attributeSections = useMemo(() => {
		const raw = attrQ.data?.data
		if (!raw?.length) return []
		return groupAttributesByParent(raw)
	}, [attrQ.data])

	const categories = catQ.data?.data ?? []
	const regions = regQ.data?.data ?? []

	return (
		<>
			<LayoutAdmin breadcrumbTitle="Add New Property">
				<form
					ref={formRef}
					className="form-add-property flex gap30 flex-column"
					onSubmit={(e) => e.preventDefault()}
				>
					<div>
					{announcementId != null ? (
						<p
							style={{
								margin: '0 0 16px',
								padding: '10px 14px',
								fontSize: 14,
								background: '#e8f4fc',
								borderRadius: 8,
								color: '#1565a0',
							}}
						>
							Aktiv layihə — elan ID: <strong>{announcementId}</strong>. Əsas məlumatları dəyişib saxladıqda elan
							yeniləmə sorğusu göndərilir.
						</p>
					) : null}
					<div className="wg-box pl-44 mb-20">
						<h4>
							Əsas məlumatlar{' '}
							<span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Core Info)</span>
						</h4>
						<div className="form-bacsic-infomation flex gap30 flex-column">
							<fieldset className="text">
								<label htmlFor="property-title" style={LABEL_ABOVE}>
									Elan başlığı (maks. 100 simvol) *
								</label>
								<input
									id="property-title"
									type="text"
									name="title"
									maxLength={100}
									placeholder="Elan başlığı *"
									tabIndex={2}
									aria-required="true"
									required
								/>
							</fieldset>
							<div>
								<label htmlFor="property-category" style={LABEL_ABOVE}>
									Kateqoriya *
								</label>
								{catQ.isError ? (
									<p style={{ fontSize: 14, color: '#c0392b' }}>Kateqoriyalar yüklənmədi. Səhifəni yeniləyin.</p>
								) : null}
								<select
									id="property-category"
									className="nice-select"
									name="category_id"
									tabIndex={0}
									disabled={catQ.isPending || catQ.isError}
									required={!catQ.isPending && !catQ.isError && categories.length > 0}
									defaultValue=""
								>
									<option value="" disabled className="option">
										{catQ.isPending ? 'Yüklənir…' : 'Kateqoriya seçin'}
									</option>
									{categories.map((cat) => (
										<option key={cat.id} value={String(cat.id)} className="option">
											{cat.name}
										</option>
									))}
								</select>
							</div>
							<fieldset className="description">
								<label htmlFor="property-description" style={LABEL_ABOVE}>
									Təsvir *
								</label>
								<textarea
									id="property-description"
									name="description"
									rows={5}
									placeholder="Elanın təsviri *"
									tabIndex={2}
									aria-required="true"
									required
								/>
							</fieldset>
							<div className="cols cols-two">
								<fieldset className="text">
									<label htmlFor="property-check-in" style={LABEL_ABOVE}>
										Check-in
									</label>
									<TimeDigitsInput id="property-check-in" name="check_in" placeholder="14:00" tabIndex={2} />
								</fieldset>
								<fieldset className="text">
									<label htmlFor="property-check-out" style={LABEL_ABOVE}>
										Check-out
									</label>
									<TimeDigitsInput id="property-check-out" name="check_out" placeholder="11:00" tabIndex={2} />
								</fieldset>
							</div>
							<div className="cols">
								<fieldset className="text">
									<label htmlFor="property-price" style={LABEL_ABOVE}>
										Qiymət (AZN) *
									</label>
									<input
										id="property-price"
										type="text"
										name="price"
										inputMode="decimal"
										placeholder="Məs. 120"
										tabIndex={2}
										aria-required="true"
										required
									/>
								</fieldset>
							</div>
							<div className="button-submit mt-10">
								<button
									className="tf-button-primary"
									type="button"
									disabled={coreM.isPending}
									onClick={handleSaveCore}
								>
									{coreM.isPending
										? 'Göndərilir…'
										: announcementId == null
											? 'Əsas məlumatları saxla (yeni elan)'
											: 'Əsas məlumatları yenilə'}
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</div>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Ünvan və lokasiya{' '}
							<span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Location)</span>
						</h4>
						<div className="form-location flex gap30 flex-column">
							<div>
								<label htmlFor="property-city-region" style={LABEL_ABOVE}>
									Şəhər (rayon) *
								</label>
								{regQ.isError ? (
									<p style={{ fontSize: 14, color: '#c0392b' }}>Regionlar yüklənmədi. Səhifəni yeniləyin.</p>
								) : null}
								<select
									id="property-city-region"
									className="nice-select"
									name="region_id"
									tabIndex={0}
									disabled={regQ.isPending || regQ.isError}
									required={false}
									defaultValue=""
								>
									<option value="" disabled className="option">
										{regQ.isPending ? 'Yüklənir…' : 'Şəhər və ya rayon seçin'}
									</option>
									{regions.map((r) => (
										<option key={r.id} value={String(r.id)} className="option">
											{r.name}
										</option>
									))}
								</select>
							</div>
							<fieldset className="description">
								<label htmlFor="property-street-address" style={LABEL_ABOVE}>
									Tam ünvan (küçə, bina) *
								</label>
								<textarea
									id="property-street-address"
									name="street_address"
									rows={3}
									placeholder="Küçə, bina, mənzil *"
									tabIndex={2}
									aria-required="true"
								/>
							</fieldset>
							<div>
								<p style={{ fontWeight: 600, marginBottom: 12, fontSize: 15 }}>Xəritədə pin (Google Maps)</p>
								<iframe
									title="Xəritə — Bakı (önizləmə)"
									src={MAP_EMBED_BAKU}
									height={400}
									style={{ border: 0, width: '100%' }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>
							<fieldset className="description">
								<label htmlFor="property-landmark" style={LABEL_ABOVE}>
									Landmark (yaxın obyektlər)
								</label>
								<textarea
									id="property-landmark"
									name="landmark"
									rows={3}
									placeholder="Məs. metro, park, ticarət mərkəzi"
									tabIndex={2}
								/>
							</fieldset>
							<div className="button-submit mt-10">
								<button
									className="tf-button-primary"
									type="button"
									disabled={addrM.isPending}
									onClick={handleSaveLocation}
								>
									{addrM.isPending ? 'Göndərilir…' : 'Saxla və ön baxış'}
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</div>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Media <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Şəkillər və video)</span>
						</h4>
						<div className="form-media flex gap30 flex-column">
							<div
								style={{
									padding: '14px 16px',
									background: '#f5f5f5',
									borderRadius: 8,
									fontSize: 14,
									lineHeight: 1.5,
								}}
							>
								<p style={{ fontWeight: 600, marginBottom: 8 }}>Qaydalar</p>
								<ul style={{ margin: 0, paddingLeft: 20 }}>
									<li>
										Minimum ölçü (en × hündürlük): {MEDIA_RULES.minWidth}×{MEDIA_RULES.minHeight} px
									</li>
									<li>Hər fayl üçün maksimum ölçü: {MEDIA_RULES.maxFileMb} MB</li>
									<li>Format: JPG, PNG, WebP</li>
								</ul>
							</div>

							<div className="upload-image-wrap">
								<div className="text">Cover şəkil (1 ədəd – məcburi) *</div>
								<div
									className="list"
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'flex-start',
										flexWrap: 'wrap',
										gap: 16,
									}}
								>
									<div className="item" style={{ flexShrink: 0 }}>
										<label className="uploadfile" htmlFor="property-cover-image">
											<input
												id="property-cover-image"
												type="file"
												name="cover_image"
												accept="image/jpeg,image/png,image/webp"
												onChange={handleCoverPreviewChange}
											/>
											<i className="flaticon-gallery" />
											<div>Cover yüklə</div>
										</label>
									</div>
									{coverPreviewUrl ? (
										<div
											style={{
												flexShrink: 0,
												width: 290,
												height: 166,
												borderRadius: 8,
												overflow: 'hidden',
												border: '1px solid #ddd',
												background: '#fff',
												boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
											}}
										>
											<img
												src={coverPreviewUrl}
												alt=""
												style={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
													display: 'block',
												}}
											/>
										</div>
									) : null}
								</div>
							</div>

							<div className="upload-image-wrap">
								<div className="text">Gallery (ən azı 5 şəkil) *</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'flex-start',
										flexWrap: 'wrap',
										gap: 12,
									}}
								>
									<div className="list" style={{ flex: '0 1 auto', minWidth: 200, maxWidth: '100%' }}>
										<div className="item" style={{ minWidth: '100%', maxWidth: '100%' }}>
											<label className="uploadfile" htmlFor="property-gallery-images" style={{ width: '100%' }}>
												<input
													id="property-gallery-images"
													type="file"
													name="gallery_images[]"
													accept="image/jpeg,image/png,image/webp"
													multiple
													onChange={handleGalleryPreviewChange}
												/>
												<i className="flaticon-gallery" />
												<div>Şəkilləri seçin (Ctrl ilə çoxlu)</div>
											</label>
										</div>
									</div>
									{galleryPreviews.length > 0 ? (
										<div
											style={{
												display: 'flex',
												flexWrap: 'wrap',
												gap: 8,
												alignItems: 'flex-start',
												alignContent: 'flex-start',
												flex: '1 1 200px',
												minWidth: 0,
											}}
											>
											{galleryPreviews.map((item, idx) => (
												<div
													key={`${item.name}-${idx}`}
													title={item.name}
													style={{
														width:290,
														height: 166,
														borderRadius: 6,
														overflow: 'hidden',
														border: '1px solid #ddd',
														background: '#fff',
														flexShrink: 0,
														boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
													}}
												>
													<img
														src={item.url}
														alt=""
														style={{
															width: '100%',
															height: '100%',
															objectFit: 'cover',
															display: 'block',
														}}
													/>
												</div>
											))}
										</div>
									) : null}
								</div>
								<p style={{ marginTop: 10 }}>
									Ən azı 5 şəkil seçilməlidir; təsdiq server tərəfində də yoxlanılacaq.
								</p>
							</div>

							<fieldset className="text">
								<label htmlFor="property-video-youtube" style={LABEL_ABOVE}>
									Video (YouTube, opsional)
								</label>
								<input
									id="property-video-youtube"
									type="url"
									name="video_youtube_url"
									inputMode="url"
									autoComplete="off"
									placeholder="https://www.youtube.com/watch?v=… və ya youtu.be/…"
									tabIndex={2}
								/>
							</fieldset>

							<div className="button-submit">
								<button
									className="tf-button-primary"
									type="button"
									disabled={mediaM.isPending}
									onClick={handleSaveMedia}
								>
									{mediaM.isPending ? 'Göndərilir…' : 'Saxla və ön baxış'}
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</div>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>İmkanlar (Amenities)</h4>
						{attrQ.isError ? (
							<p style={{ fontSize: 14, color: '#c0392b' }}>İmkanlar yüklənmədi.</p>
						) : null}
						<div className="form-amenities flex gap30 flex-column">
							{attrQ.isPending ? (
								<p className="text-muted" style={{ margin: 0 }}>
									Yüklənir…
								</p>
							) : (
								attributeSections.map((section) => (
									<div key={section.parent.id}>
										<p style={{ fontWeight: 600, marginBottom: 12, fontSize: 17 }}>{section.parent.name}</p>
										<ul className="grid-checkbox">
											{section.children.map((item) => (
												<li key={item.id} className="checkbox-item">
													<label>
														<p>{item.name}</p>
														<input type="checkbox" name="attribute_id[]" value={String(item.id)} />
														<span className="btn-checkbox" />
													</label>
												</li>
											))}
										</ul>
									</div>
								))
							)}
							<div className="button-submit">
								<button
									className="tf-button-primary"
									type="button"
									disabled={attrM.isPending}
									onClick={handleSaveAmenities}
								>
									{attrM.isPending ? 'Göndərilir…' : 'Saxla və ön baxış'}
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</div>
					</div>
					<div className="wg-box pl-44 mb-20">
						<h4>
							Otaq və tutum <span style={{ fontWeight: 400, fontSize: 15, opacity: 0.85 }}>(Capacity)</span>
						</h4>
						<div className="form-capacity flex gap30 flex-column">
							<div className="cols cols-two">
								<fieldset className="number">
									<label htmlFor="property-room-count" style={LABEL_ABOVE}>
										Otaq sayı *
									</label>
									<input
										id="property-room-count"
										type="number"
										name="room_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
									/>
								</fieldset>
								<fieldset className="number">
									<label htmlFor="property-bed-count" style={LABEL_ABOVE}>
										Yataq sayı *
									</label>
									<input
										id="property-bed-count"
										type="number"
										name="bed_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
									/>
								</fieldset>
							</div>
							<div className="cols cols-two">
								<fieldset className="number">
									<label htmlFor="property-bathroom-count" style={LABEL_ABOVE}>
										Hamam sayı *
									</label>
									<input
										id="property-bathroom-count"
										type="number"
										name="bathroom_count"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
									/>
								</fieldset>
								<fieldset className="number">
									<label htmlFor="property-max-guests" style={LABEL_ABOVE}>
										Maksimum qonaq sayı *
									</label>
									<input
										id="property-max-guests"
										type="number"
										name="max_guests"
										min={1}
										step={1}
										inputMode="numeric"
										placeholder="0"
										tabIndex={2}
										aria-required="true"
									/>
								</fieldset>
							</div>
							<div className="button-submit">
								<button
									className="tf-button-primary"
									type="button"
									disabled={detailM.isPending}
									onClick={handleSaveCapacity}
								>
									{detailM.isPending ? 'Göndərilir…' : 'Saxla və ön baxış'}
									<i className="icon-arrow-right-add" />
								</button>
							</div>
						</div>
					</div>

					{submitError ? (
						<p role="alert" style={{ margin: '0 0 12px', padding: '12px 16px', fontSize: 14, color: '#c0392b', background: '#fdecea', borderRadius: 8 }}>
							{submitError}
						</p>
					) : null}
					{submitSuccess ? (
						<p style={{ margin: '0 0 12px', padding: '12px 16px', fontSize: 14, color: '#1e6b2f', background: '#e8f5e9', borderRadius: 8 }}>
							{submitSuccess}
						</p>
					) : null}

					</div>
				</form>
			</LayoutAdmin>
		</>
	)
}
