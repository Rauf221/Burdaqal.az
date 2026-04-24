'use client'

import { Link } from '@/i18n/navigation'
import { useRouter } from '@/i18n/navigation'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getSliderQuery } from '@/services/client/home'
import { categoriesListQuery, regionsListQuery } from '@/services/dashboard/Add-New-Properties/queries'
import { useState } from 'react'
import { announcementsListQuery, publicStorageUrl } from '@/services/client/properties'

const sliderHome7 = {
	modules: [Navigation, EffectFade],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.home7-next',
		prevEl: '.home7-prev',
		clickable: true,
	},
}

const FALLBACK_SLIDES = [
	{
		title: 'Modern Apartment in \nMission District',
		description: '25 beds - 291 Bats - 2500 sq ft',
		image: '/images/slider/slider-home-7.jpg',
		thumb_image: '',
		btn: 'View Details',
		btn_link: '/elanlar/villa-one-hyde-park',
	},
	{
		title: 'Modern Apartment in \nMission District',
		description: '25 beds - 291 Bats - 2500 sq ft',
		image: '/images/slider/slider-home-71.jpg',
		thumb_image: '',
		btn: 'View Details',
		btn_link: '/elanlar/villa-one-hyde-park',
	},
	{
		title: 'Modern Apartment in \nMission District',
		description: '25 beds - 291 Bats - 2500 sq ft',
		image: '/images/slider/slider-home-72.jpg',
		thumb_image: '',
		btn: 'View Details',
		btn_link: '/elanlar/villa-one-hyde-park',
	},
]

function slideBtnTarget(raw) {
	const t = (raw || '').trim()
	if (!t) return { kind: 'internal', href: '/' }
	if (t.startsWith('/')) return { kind: 'internal', href: t }
	if (/^https?:\/\//i.test(t)) return { kind: 'external', href: t }
	return { kind: 'external', href: `https://${t}` }
}

function TitleLines({ text }) {
	const lines = String(text || '')
		.split(/\n/)
		.map((s) => s.trim())
		.filter(Boolean)
	if (lines.length === 0) return null
	return (
		<h1 className="fade-item fade-item-2">
			{lines.map((line, i) => (
				<span key={i}>
					{i > 0 ? <br /> : null}
					{line}
				</span>
			))}
		</h1>
	)
}

export default function Slider7() {
	const locale = useLocale()
	const router = useRouter()
	const { data, isPending } = useQuery(getSliderQuery(locale, 1))
	const categoriesQ = useQuery(categoriesListQuery(locale))
	const regionsQ = useQuery(regionsListQuery(locale))
	const [filters, setFilters] = useState({
		search: '',
		region_id: '',
		category_id: '',
	})
	const previewQ = useQuery(
		announcementsListQuery(locale, 1, {
			search: filters.search,
			category_id: filters.category_id,
			region_id: filters.region_id,
		})
	)

	const slides = !isPending && data?.data?.length > 0 ? data.data : FALLBACK_SLIDES
	const categories = categoriesQ.data?.data ?? []
	const regions = regionsQ.data?.data ?? []
	const previewItems = (previewQ.data?.data ?? []).slice(0, 4)
	const fallbackPreviewImage = '/images/author/avatar-8.png'

	const onSubmitFilters = (event) => {
		event.preventDefault()
		const query = {}
		const search = filters.search.trim()
		if (search) query.search = search
		if (filters.category_id) query.category_id = filters.category_id
		if (filters.region_id) query.region_id = filters.region_id
		router.push({
			pathname: '/elanlar',
			query,
		})
	}

	return (
		<>
			<section className="slider home7">
				<div className="swiper-container slider-home7 slider-effect-fade arrow-style-1 pagination-style-1">
					<Swiper
						key={!isPending && data?.data?.length ? `slider-api-${data.data.length}` : 'slider-fallback'}
						{...sliderHome7}
					>
						{slides.map((item, idx) => {
							const img = item.image || item.thumb_image
							const target = slideBtnTarget(item.btn_link)
							return (
								<SwiperSlide key={`${img}-${idx}`}>
									<div className="wrap-slider">
										<div className="image">
											<img src={img} alt={item.title?.replace(/\n/g, ' ') || ''} />
										</div>
										<div className="slider-item">
											<div className="themesflat-container">
												<div className="row">
													<div className="col-12">
														<div className="slider-content">
														
															<TitleLines text={item.title} />
															<div className="text fade-item fade-item-1">{item.description}</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
					<div className="home7-next has-background swiper-button-next" />
					<div className="home7-prev has-background swiper-button-prev" />
				</div>
				<form className="form-search-home5 background-secondary wow fadeInUp" onSubmit={onSubmitFilters}>
					<div className="list">
						<div className="group-form form-search-content">
							<div className="form-style-has-title">
								<div className="title">Axtar</div>
								<div className="relative">
									<fieldset className="name">
										<input
											type="text"
											placeholder="Axtar..."
											className="show-search style-default"
											name="search"
											value={filters.search}
											onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
											tabIndex={2}
											aria-required="false"
										/>
									</fieldset>
									<div className="style-absolute-right">
										<div className="style-icon-default"><i className="flaticon-magnifiying-glass" />
										</div>
									</div>
									<div className="box-content-search style-1">
										<ul>
											{previewItems.map((row) => (
												<li key={row.id}>
													<Link href={`/elanlar/${row.slug}`} className="item1">
														<div>
															<div
																className="image"
																style={{
																	width: 56,
																	height: 56,
																	borderRadius: '50%',
																	overflow: 'hidden',
																	flexShrink: 0,
																}}
															>
																<img
																	src={publicStorageUrl(row.media?.cover_image) || fallbackPreviewImage}
																	alt={row.title || ''}
																	style={{
																		width: '100%',
																		height: '100%',
																		objectFit: 'cover',
																		borderRadius: '50%',
																	}}
																/>
															</div>
															<p>{row.title}</p>
														</div>
														<div className="text">{row.category?.name || 'Elan'}</div>
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Rayon</div>
								<select
									className="nice-select style-white"
									tabIndex={0}
									name="region_id"
									value={filters.region_id}
									onChange={(e) =>
										setFilters((prev) => ({ ...prev, region_id: e.target.value }))
									}
								>
									<option value="">Hamısı</option>
									{regions.map((region) => (
										<option key={region.id} value={String(region.id)}>
											{region.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Kategoriya</div>
								<select
									className="nice-select"
									tabIndex={0}
									name="category_id"
									value={filters.category_id}
									onChange={(e) =>
										setFilters((prev) => ({ ...prev, category_id: e.target.value }))
									}
								>
									<option value="">Hamısı</option>
									{categories.map((category) => (
										<option key={category.id} value={String(category.id)}>
											{category.name}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className="flex gap10">
						<div className="group-form">
							<div className="wg-filter">
								<div className="tf-button-filter btn-filter"><i className="flaticon-filter" />Filter</div>
								<div className="open-filter filter-no-content" id="a1">
									<div>
										<div className="grid-2-cols mb-20">
											
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Bedrooms</option>
												<option data-value="1 Bed" className="option">1 Bed</option>
												<option data-value="2 Bed" className="option">2 Bed</option>

											</select>
											<select className="nice-select" tabIndex={0}>

												<option data-value className="option selected">Bathrooms</option>
												<option data-value="1 Bath" className="option">1 Bath</option>
												<option data-value="2 Bath" className="option">2 Bath</option>

											</select>
										</div>
										<div className="grid-4-cols">
											<fieldset className="name">
												<input type="text" placeholder="Min. Area" name="name" tabIndex={2} aria-required="false" />
											</fieldset>
											<fieldset className="name">
												<input type="text" placeholder="Max. Area" name="name" tabIndex={2} aria-required="false" />
											</fieldset>
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Min. Price</option>
												<option data-value="100 $" className="option">100 $</option>
												<option data-value="150 $" className="option">150 $</option>

											</select>
											<select className="nice-select" tabIndex={0}>


												<option data-value className="option selected">Max. Price</option>
												<option data-value="1000 $" className="option">1000 $</option>
												<option data-value="1500 $" className="option">1500 $</option>

											</select>
										</div>
									</div >
									<div>
										<div className="title">Amenities</div>
										<ul className="grid-checkbox">
											<li className="checkbox-item">
												<label>
													<p>Air Conditioning</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Barbeque</p>
													<input type="checkbox" defaultChecked />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Dryer</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Gym</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Lawn</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Microwave</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Refrigerator</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Sauna</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Swimming Pool</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>TV Cable</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>Washer</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
											<li className="checkbox-item">
												<label>
													<p>WiFi</p>
													<input type="checkbox" />
													<span className="btn-checkbox" />
												</label>
											</li>
										</ul>
									</div>
								</div >
							</div >
						</div >
						<div className="group-form">
							<div className="button-submit	">
								<button type="submit">Harda qalım ?</button>
							</div>
						</div>
					</div >
				</form >
			</section >
		</>
	)
}
