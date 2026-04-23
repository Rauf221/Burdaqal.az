
'use client'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getRandomRegionsQuery } from '@/services/client/home'
const sliderCities2 = {
	spaceBetween: 25,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4,
		},
		1440: {
			slidesPerView: 5,
		},
	},
}
import { Link } from '@/i18n/navigation'

const FALLBACK_CITY_IMAGES = [
	'/images/image-box/cities-1.jpg',
	'/images/image-box/cities-2.jpg',
	'/images/image-box/cities-3.jpg',
	'/images/image-box/cities-4.jpg',
	'/images/image-box/cities-5.jpg',
]

export default function FlatCities5() {
	const locale = useLocale()
	const { data: regionsPayload, isPending, isError } = useQuery(getRandomRegionsQuery(locale))
	const regions = regionsPayload?.data ?? []

	return (
		<>

			<section className="tf-section flat-cities style-4">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Bu Rayonlarda Qal</h2>
								<div className="text wow fadeInUp ">Azərbaycanın fərqli rayonlarında yerləşən günlük evləri araşdır, sənə uyğun olanı seç və rahatlıqla rezerv et.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="wrap">
								<div className="swiper-container slider-cities-2">
									<Swiper {...sliderCities2}>
										{isPending ? (
											<SwiperSlide>
												<div className="cities-item style-2 wow fadeInUp">
													<img src={FALLBACK_CITY_IMAGES[0]} alt="" />
													<div className="content">
														<p>...</p>
														<h4>Yuklenir</h4>
													</div>
													<Link href="/elanlar" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
												</div>
											</SwiperSlide>
										) : isError ? (
											<SwiperSlide>
												<div className="cities-item style-2 wow fadeInUp">
													<img src={FALLBACK_CITY_IMAGES[0]} alt="" />
													<div className="content">
														<p>0 Properties</p>
														<h4>Xeta</h4>
													</div>
													<Link href="/elanlar" className="button-arrow-right"><i className="icon-arrow-right-add" /></Link>
												</div>
											</SwiperSlide>
										) : (
											regions.map((region, idx) => (
												<SwiperSlide key={region.id}>
													<div
														className="cities-item style-2 wow fadeInUp"
														{...(idx ? { 'data-wow-delay': `${idx * 0.1}s` } : {})}
													>
														<img
															src={region.image || FALLBACK_CITY_IMAGES[idx % FALLBACK_CITY_IMAGES.length]}
															alt={region.name}
														/>
														<div className="content">
															<p>{region.announcements_count ?? 0} Properties</p>
															<h4>{region.name}</h4>
														</div>
														<Link
															href={`/elanlar?region=${encodeURIComponent(region.slug)}`}
															className="button-arrow-right"
														>
															<i className="icon-arrow-right-add" />
														</Link>
													</div>
												</SwiperSlide>
											))
										)}
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
