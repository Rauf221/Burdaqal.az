'use client'

import { Link } from '@/i18n/navigation'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getSliderQuery } from '@/services/client/home'

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
	const { data, isPending } = useQuery(getSliderQuery(locale, 1))

	const slides = !isPending && data?.data?.length > 0 ? data.data : FALLBACK_SLIDES

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
				<form className="form-search-home5 background-secondary wow fadeInUp">
					<div className="list">
						<div className="group-form form-search-content">
							<div className="form-style-has-title">
								<div className="title">Axtar</div>
								<div className="relative">
									<fieldset className="name">
										<input type="text" placeholder="Enter Keyyword" className="show-search style-default" name="name" tabIndex={2} aria-required="true" required />
									</fieldset>
									<div className="style-absolute-right">
										<div className="style-icon-default"><i className="flaticon-magnifiying-glass" />
										</div>
									</div>
									<div className="box-content-search style-1">
										<ul>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-8.png" alt="" />
														</div>
														<p>Archer House</p>
													</div>
													<div className="text">For Sale</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-7.png" alt="" />
														</div>
														<p>Home Pitt Street</p>
													</div>
													<div className="text">For Rent</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-9.png" alt="" />
														</div>
														<p>Villa One Hyde Park</p>
													</div>
													<div className="text">For Rent</div>
												</div>
											</li>
											<li>
												<div className="item1">
													<div>
														<div className="image">
															<img src="/images/author/avatar-10.png" alt="" />
														</div>
														<p>House on the beverly hills</p>
													</div>
													<div className="text">For Sale</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Rayon</div>
								<select className="nice-select style-white" tabIndex={0}>
									<option data-value="For Sale" className="option selected">For Sale</option>
									<option data-value="For Ren" className="option">For Ren</option>

								</select>
							</div>
						</div>
						<div className="divider-1" />
						<div className="group-form">
							<div className="form-style-has-title">
								<div className="title">Kategoriya</div>
								<select className="nice-select" tabIndex={0}>
									<option data-value className="option selected focus">All Type</option>
									<option data-value="Office" className="option">Office</option>
									<option data-value="Villa" className="option">Villa</option>
									<option data-value="Shop" className="option">Shop</option>

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
												<input type="text" placeholder="Min. Area" name="name" tabIndex={2} aria-required="true" required />
											</fieldset>
											<fieldset className="name">
												<input type="text" placeholder="Max. Area" name="name" tabIndex={2} aria-required="true" required />
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
