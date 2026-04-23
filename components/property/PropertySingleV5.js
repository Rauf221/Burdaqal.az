'use client'
import Layout from "@/components/layout/Layout"
import SliderBoxDream from "@/components/slider/SliderBoxDream"
import { PROPERTY_GRID, getPropertyTitle, propertyDetailHref } from "@/utils/propertyRoutes"
import { Link } from '@/i18n/navigation'
import { publicStorageUrl } from '@/services/client/properties'
import { CalendarArrowDown, CalendarArrowUp } from 'lucide-react'
import { Fragment, useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FEATURE_PARENT_LABELS = {
	1: 'Interior Details',
	2: 'Outdoor Details',
	3: 'Utilities Central',
	4: 'Other Features',
}

function groupAttributesForFeatures(attributes) {
	const groups = { 1: [], 2: [], 3: [], 4: [] }
	for (const a of attributes ?? []) {
		const pid = groups[a.parent_id] !== undefined ? a.parent_id : 4
		groups[pid].push(a)
	}
	return groups
}

function extractMapEmbedSrc(mapValue) {
	if (!mapValue) return ''
	let raw = String(mapValue).trim()
	if (!raw) return ''

	// Backend bəzən HTML entity encode olunmuş string qaytara bilər.
	raw = raw
		.replace(/&quot;/gi, '"')
		.replace(/&#39;/gi, "'")
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&amp;/gi, '&')

	// API bəzən yalnız URL, bəzən isə tam <iframe ...> HTML qaytarır.
	if (!raw.includes('<')) {
		return /^https?:\/\//i.test(raw) ? raw : ''
	}

	const m = raw.match(/src\s*=\s*["']([^"']+)["']/i)
	const src = m?.[1] ? m[1].trim() : ''
	return /^https?:\/\//i.test(src) ? src : ''
}

function extractVideoEmbedSrc(videoValue) {
	if (!videoValue) return ''
	let raw = String(videoValue).trim()
	if (!raw) return ''
	raw = raw
		.replace(/&quot;/gi, '"')
		.replace(/&#39;/gi, "'")
		.replace(/&lt;/gi, '<')
		.replace(/&gt;/gi, '>')
		.replace(/&amp;/gi, '&')

	if (raw.includes('<')) {
		const m = raw.match(/src\s*=\s*["']([^"']+)["']/i)
		const src = m?.[1] ? m[1].trim() : ''
		return /^https?:\/\//i.test(src) ? src : ''
	}

	// YouTube watch/short URLs -> embed URL
	try {
		const u = new URL(raw)
		const host = u.hostname.replace(/^www\./, '').toLowerCase()
		if (host === 'youtube.com' || host === 'm.youtube.com') {
			if (u.pathname === '/watch') {
				const id = u.searchParams.get('v')
				return id ? `https://www.youtube.com/embed/${id}` : ''
			}
			if (u.pathname.startsWith('/embed/')) return raw
			if (u.pathname.startsWith('/shorts/')) {
				const id = u.pathname.split('/')[2]
				return id ? `https://www.youtube.com/embed/${id}` : ''
			}
		}
		if (host === 'youtu.be') {
			const id = u.pathname.replace(/^\/+/, '').split('/')[0]
			return id ? `https://www.youtube.com/embed/${id}` : ''
		}
		return raw
	} catch {
		return ''
	}
}

function attributeIconSrc(icon) {
	if (!icon) return null
	const raw = String(icon).trim()
	if (!raw) return null
	if (/^https?:\/\//i.test(raw)) return raw
	return publicStorageUrl(raw) || null
}

export default function PropertySingleV5({ slug, announcement }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const title = announcement?.title ?? getPropertyTitle(slug)
	const detail = announcement?.detail
	const address = announcement?.address
	const category = announcement?.category
	const media = announcement?.media
	const user = announcement?.user
	const checkIn = announcement?.check_in
	const checkOut = announcement?.check_out
	const attrGroups = groupAttributesForFeatures(announcement?.attributes)

	const placeholderImg = '/images/slider/slider-properties-detail-11.jpg'
	const mainSlides =
		media?.gallery?.length > 0
			? media.gallery
			: media?.cover_image
				? [media.cover_image]
				: [placeholderImg]
	const thumbSlides =
		media?.thumb_gallery?.length >= mainSlides.length
			? media.thumb_gallery.slice(0, mainSlides.length)
			: mainSlides

	const locationLine =
		[address?.street].filter(Boolean).join(', ') || '—'

	const phoneDigits = user?.mobile ? String(user.mobile).replace(/\D/g, '') : ''
	const whatsappHref = phoneDigits ? `https://wa.me/${phoneDigits}` : '/#'
	const telHref = user?.mobile ? `tel:${String(user.mobile).replace(/\s/g, '')}` : '/#'

	const mapSrcFromApi = extractMapEmbedSrc(address?.map)
	const mapEmbedSrc =
		mapSrcFromApi ||
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s'
	const videoEmbedSrc = extractVideoEmbedSrc(announcement?.video_youtube_url)

	// Swiper options for the main slider
	const mainSwiperOptions = {
		spaceBetween: 0,
		navigation: true,
		thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
		modules: [FreeMode, Navigation, Thumbs],
		navigation: {
			nextEl: ".thumbs-next",
			prevEl: ".thumbs-prev",
		},
	}

	// Swiper options for the thumbnail slider
	const thumbnailSwiperOptions = {
		modules: [FreeMode, Navigation, Thumbs],
		spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		direction: "vertical",
		watchSlidesProgress: true,
		breakpoints: {
			450: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			868: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
		},
	}

	return (
		<>

			<Layout mainContentCls="px-20 default">
				<div className="property-single-wrap v5">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="flex items-center justify-between gap30 flex-wrap pt-30 pb-30">
									<ul className="breadcrumbs style-1 justify-start">
										<li><Link href="/">Home</Link></li>
										<li>/</li>
										<li><Link href={PROPERTY_GRID}>Properties</Link></li>
										<li>/</li>
										<li>{title}</li>
									</ul>
									<div className="list-icons-page">
										<div className="item">
											<div className="icon">
												<i className="flaticon-heart" />
											</div>
											<p>Save</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="head-title">
									<div>
										<h3 className="wow fadeInUp">{title}</h3>
										<div className="location wow fadeInUp">
											<div className="icon">
												<i className="flaticon-location" />
											</div>
										<div className="text-content">{locationLine}</div>
									</div>
								</div>
								<div>
									<div className="square wow fadeInUp">Price</div>
									<div className="price wow fadeInUp"> {announcement?.price ?? '—'} ₼</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="thumbs-slider-column arrow-style-1">
									<Swiper {...mainSwiperOptions} className="swiper-container slider-thumbs-gallery-2">
										<div className="swiper-wrapper">
											{mainSlides.map((src, idx) => (
												<SwiperSlide key={`main-${idx}`}>
													<div className="relative h-full">
														<div className="list-tags">
															<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
															<Link href="/#" className="tags-item featured">FEATURED</Link>
														</div>
														<img src={src} alt="" />
													</div>
												</SwiperSlide>
											))}
										</div>
										<div className="swiper-button-next has-background thumbs-next" />
										<div className="swiper-button-prev has-background thumbs-prev" />
									</Swiper>
									<Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-container slider-thumbs-gallery-1">
										<div className="swiper-wrapper">
											{thumbSlides.map((src, idx) => (
												<SwiperSlide key={`thumb-${idx}`}>
													<img src={src} alt="" />
												</SwiperSlide>
											))}
										</div>
									</Swiper>
								</div>
							</div>
							<div className="col-xl-8">
								<div className="content-wrap">
									<div className="overview">
										<h4 className="wow fadeInUp">Overview</h4>
										<div className="box-items">
											<div className="item wow fadeInUp">
												<div className="icon">
													<i className="flaticon-city" />
												</div>
												<div className="text-content">
													{category?.name ??
														(detail?.room != null ? `${detail.room} Rooms` : '—')}
												</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.1s">
												<div className="icon">
													<CalendarArrowUp size={22} strokeWidth={1.75} aria-hidden />
												</div>
												<div className="text-content">Check-in {checkIn ? `${checkIn}` : '—'}</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.2s">
												<div className="icon">
													<CalendarArrowDown size={22} strokeWidth={1.75} aria-hidden />
												</div>
												<div className="text-content">Check-out {checkOut ? `${checkOut}` : '—'}</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.2s">
												<div className="icon">
													<i className="flaticon-minus-front" />
												</div>
												<div className="text-content">{detail?.guest != null ? `${detail.guest} Guests` : '—'}</div>
											</div>
											<div className="item wow fadeInUp">
												<div className="icon">
													<i className="flaticon-hotel" />
												</div>
												<div className="text-content">{detail?.bedroom != null ? `${detail.bedroom} Bedrooms` : '—'}</div>
											</div>
											<div className="item wow fadeInUp" data-wow-delay="0.1s">
												<div className="icon">
													<i className="flaticon-bath-tub" />
												</div>
												<div className="text-content">{detail?.bathroom != null ? `${detail.bathroom} Bathrooms` : '—'}</div>
											</div>
										
										</div>
									</div>
									<div className="widget-tabs style-2">
										<ul className="widget-menu-tab wow fadeInUp">
											<li className="item-title active">
												<span className="inner">Description</span>
											</li>
											<li className="item-title">
												<span className="inner">Address</span>
											</li>
											<li className="item-title">
												<span className="inner">Details</span>
											</li>
											<li className="item-title">
												<span className="inner">Features</span>
											</li>
											{/* Floor Plans tab — gələcəkdə bərpa üçün
											<li className="item-title">
												<span className="inner">Floor Plans</span>
											</li>
											*/}
											<li className="item-title">
												<span className="inner">Video</span>
											</li>
											<li className="item-title">
												<span className="inner">Maps</span>
											</li>
										</ul>
										<div className="widget-content-tab">
											<div className="widget-content-inner active">
												<div className="desc">
													<h4 className="wow fadeInUp">Description</h4>
													<p className="wow fadeInUp">
														{(announcement?.description ?? '—').split(/\r?\n/).map((line, i, arr) => (
															<Fragment key={i}>
																{line}
																{i < arr.length - 1 ? <br /> : null}
															</Fragment>
														))}
													</p>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="address">
													<div className="flex items-center justify-between gap30 flex-wrap">
														<h4 className="mb-0">Address</h4>
														<Link href={locationLine !== '—' ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationLine)}` : '/#'} className="tf-button-green"><i className="flaticon-location" />Open On Google Maps</Link>
													</div>
													<div className="list-item">
														<div className="item gap20">
															<div className="text">Address</div>
															<p>{address?.street ?? '—'}</p>
														</div>
														<div className="item">
															<div className="text">City</div>
															<p>{address?.region_name ?? '—'}</p>
														</div>
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="details">
													<h4>Details</h4>
													<div className="list-item">
														<div className="item">
															<div className="text">Price:</div>
															<p>{announcement?.price ?? '—'}</p>
														</div>
														
														<div className="item">
															<div className="text">Property Size:</div>
															<p>{detail?.room != null ? `${detail.room} rooms` : '—'}</p>
														</div>
													
														<div className="item">
															<div className="text">Bedrooms:</div>
															<p>{detail?.bedroom ?? '—'}</p>
														</div>
														<div className="item">
															<div className="text">Property Type:</div>
															<p>{category?.name ?? '—'}</p>
														</div>
														<div className="item">
															<div className="text">Bathrooms:</div>
															<p>{detail?.bathroom ?? '—'}</p>
														</div>
														
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="features">
													<h4>Facts &amp; Features</h4>
													<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
													<ul>
														{[1, 2, 3, 4].map((pid) => (
															<li key={pid}>
																<h5 style={{ fontSize: 17 , fontWeight: 700 , marginBottom: 10 }}>{FEATURE_PARENT_LABELS[pid]}</h5>
																<div className="wrap-check-ellipse" style={{ marginBottom: 30 }}>
																	{(attrGroups[pid] ?? []).map((attr) => (
																		<div key={attr.id} className="check-ellipse-item">
																			<div className="icon">
																				{attributeIconSrc(attr.icon) ? (
																					<img
																						src={attributeIconSrc(attr.icon)}
																						alt=""
																						style={{ width: 20, height: 20, objectFit: 'contain' }}
																						className=""
																					/>
																				) : (
																					<i className="flaticon-check" />
																				)}
																			</div>
																			<p>{attr.name}</p>
																		</div>
																	))}
																</div>
															</li>
														))}
													</ul>
												</div>
											</div>
											{/* Floor Plans panel — gələcəkdə bərpa: tab + aşağıdakı məzmun
											<div className="widget-content-inner">
												<div className="plans">
													<h4>Floor Plans</h4>
													<div className="widget-tabs-1 style-3">
														<ul className="widget-menu-tab-1">
															<li className="item-title-1 active-1">
																<span className="inner">First Floor</span>
															</li>
															<li className="item-title-1">
																<span className="inner">Second Floor</span>
															</li>
															<li className="item-title-1">
																<span className="inner">Third Floor</span>
															</li>
														</ul>
														<div className="widget-content-tab-1">
															<div className="widget-content-inner-1 active-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
															<div className="widget-content-inner-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
															<div className="widget-content-inner-1">
																<div className="icons">
																	<div className="item">
																		<i className="flaticon-hotel" />
																		<div className="text">Bedrooms</div>
																		<p>4</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-bath-tub" />
																		<div className="text">Bathrooms</div>
																		<p>2</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-minus-front" />
																		<div className="text">Size</div>
																		<p>200 SqFt</p>
																	</div>
																	<div className="item">
																		<i className="flaticon-tag" />
																		<div className="text">Price</div>
																		<p>$12.000</p>
																	</div>
																</div>
																<p>Lorem ipsum dolor sit amet, homero debitis temporibus in mei, at sit voluptua antiopam hendrerit. Lorem epicuri eu per. Mediocrem torquatos deseruisse te eum commodo.</p>
																<img src="/images/section/blueprint-1.png" alt="" />
															</div>
														</div>
													</div>
												</div>
											</div>
											*/}
											<div className="widget-content-inner">
												<div className="video">
													<h4>Video</h4>
													<div className="video-wrap">
														{videoEmbedSrc ? 
															<iframe
																src={videoEmbedSrc}
																height={400}
																style={{ border: 0, width: "100%", display: 'block' }}
																allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
																allowFullScreen
																loading="lazy"
																referrerPolicy="no-referrer-when-downgrade"
															/>
														
														: <p>No video available</p>}
													</div>
												</div>
											</div>
											<div className="widget-content-inner">
												<div className="map">
													<h4>Map</h4>
													<iframe src={mapEmbedSrc} height={400} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
												</div>
											</div>
										</div>
									</div>
									<div className="smilar-homes">
										<h4 className="wow fadeInUp">Similar Homes</h4>
										<div className="row">
											<div className="col-md-6">
												<div className="box-dream has-border wow fadeInUp">
													<div className="image-group relative">
														<div className="list-tags">
															<Link href="/#" className="tags-item for-sell">FOR RENT</Link>
															<Link href="/#" className="tags-item featured">FEATURED</Link>
														</div>
														<div className="button-heart"><i className="flaticon-heart-1" /></div>
														<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
															<SliderBoxDream path="house/home" start={1} end={3} />
														</div>
													</div>
													<div className="content">
														<div className="head">
															<div className="title">
																<Link href={propertyDetailHref('home-pitt-street')}>Home Pitt Street</Link>
															</div>
															<div className="price">$815,000</div>
														</div>
														<div className="location">
															<div className="icon">
																<i className="flaticon-location" />
															</div>
															<p>148-37 88th Ave, Jamaica, NY 11435</p>
														</div>
														<div className="icon-box">
															<div className="item">
																<i className="flaticon-hotel" />
																<p>4 Beds</p>
															</div>
															<div className="item">
																<i className="flaticon-bath-tub" />
																<p>3 Baths</p>
															</div>
															<div className="item">
																<i className="flaticon-minus-front" />
																<p>2660 Sqft</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="box-dream has-border wow fadeInUp" data-wow-delay="0.1s">
													<div className="image-group relative">
														<div className="list-tags">
															<Link href="/#" className="tags-item for-sell">FOR SELL</Link>
														</div>
														<div className="button-heart"><i className="flaticon-heart-1" /></div>
														<div className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
															<SliderBoxDream path="house/home" start={2} end={4} />
														</div>
													</div>
													<div className="content">
														<div className="head">
															<div className="title">
																<Link href={propertyDetailHref('luxury-mansion')}>Luxury Mansion</Link>
															</div>
															<div className="price">$815,000</div>
														</div>
														<div className="location">
															<div className="icon">
																<i className="flaticon-location" />
															</div>
															<p>148-37 88th Ave, Jamaica, NY 11435</p>
														</div>
														<div className="icon-box">
															<div className="item">
																<i className="flaticon-hotel" />
																<p>4 Beds</p>
															</div>
															<div className="item">
																<i className="flaticon-bath-tub" />
																<p>3 Baths</p>
															</div>
															<div className="item">
																<i className="flaticon-minus-front" />
																<p>2660 Sqft</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4">
								<div className="property-single-sidebar">
									<div className="sidebar-item sidebar-contact-info">
										<div className="sidebar-title">Contact Information</div>
										<div className="contact-info">
											<div className="person">
												<div className="image-group relative">
													<img src={user?.image || '/images/sidebar/agent-1.png'} alt="" />
												</div>
												<div className="content">
													<div className="name">
														<Link href="/#">{user?.name ?? '—'}</Link>
													</div>
													<p>{user?.email ?? '—'}</p>
													<p>{user?.mobile ?? '—'}</p>
												</div>
											</div>
											<form className="form-comment">
												<div className="flex gap20">
													<Link href={telHref} className="tf-button-primary w-full style-bg-white">Call<i className="flaticon-phone" /></Link>
													<Link href={whatsappHref} className="tf-button-primary w-full style-bg-white">WhatsApp<i className="flaticon-whatsapp" /></Link>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div >
					</div >
				</div >

			</Layout >
		</>
	)
}