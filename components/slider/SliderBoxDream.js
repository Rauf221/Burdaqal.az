'use client'
import { Link } from '@/i18n/navigation'
import data from "@/utils/carousel.json"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useMemo } from 'react'


/**
 * @param {{ start: number, end: number, path: string, detailHref?: string, images?: string[], navKey?: string, autoplayOnHover?: boolean, onSwiperReady?: (swiper: unknown) => void }} props
 * `images` veriləndə uzaq URL-lərlə slaydlar; əks halda mövzunun `/images/${path}-${id}.jpg` nümunəsi.
 * `autoplayOnHover` true olanda avtomatik oynatma söndürülür; valideyn (məs. elan kartı) üzərində hover ilə `onSwiperReady` ilə gələn instansda `autoplay.start` / `autoplay.stop` çağırıla bilər.
 */
export default function SliderBoxDream({ start, end, path, detailHref, images, navKey, autoplayOnHover, onSwiperReady }) {
	const useRemoteImages = Array.isArray(images) && images.length > 0

	const slideEntries = useMemo(
		() =>
			useRemoteImages
				? images.map((src, i) => ({ src, key: `remote-${i}` }))
				: data.slice(start, end).map((item) => ({
					src: `/images/${path}-${item.id}.jpg`,
					key: item.id,
				})),
		[useRemoteImages, images, path, start, end]
	)

	const navId = useRemoteImages ? (navKey ?? `r-${start}-${end}`) : null
	const nextNavClass = useRemoteImages ? `sdp-next-${navId}` : `sdp${start}`
	const prevNavClass = useRemoteImages ? `sdp-prev-${navId}` : `sdp${end}`
	const paginationClass = useRemoteImages ? `box-dream-pagination-${navId}` : `box-dream-pagination-${start}-${end}`

	const sliderBoxDream = useMemo(
		() => ({
			modules: [Navigation, Pagination, Autoplay],
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: autoplayOnHover
				? {
					delay: 3000,
					disableOnInteraction: false,
					enabled: false,
					pauseOnMouseEnter: false,
				}
				: {
					delay: 3000,
					disableOnInteraction: false,
					enabled: true,
				},
			// observer/reobserve hər kart sliderində CPU yükü yaradır.
			observer: false,
			observeParents: false,
			navigation: {
				nextEl: `.${nextNavClass}`,
				prevEl: `.${prevNavClass}`,
				clickable: true,
			},
			pagination: {
				el: `.${paginationClass}`,
				clickable: true,
			},
		}),
		[autoplayOnHover, nextNavClass, prevNavClass, paginationClass]
	)
	return (
		<>
			<Swiper
			{...sliderBoxDream}
			onSwiper={(swiper) => onSwiperReady?.(swiper)}
			className="swiper-container slider-box-dream arrow-style-1 pagination-style-1"
		>
			{slideEntries.map((entry, i) => (
				<SwiperSlide key={entry.key ?? `${start}-${i}`}>
					<div className="w-full">
						{detailHref ? (
							<Link href={detailHref} className="block">
								<img src={entry.src} alt="" loading="lazy" decoding="async" />
							</Link>
						) : (
							<img src={entry.src} alt="" loading="lazy" decoding="async" />
						)}
					</div>
				</SwiperSlide>
			))}
			<div className={`swiper-pagination ${paginationClass}`} />
				<div className={`box-dream-next swiper-button-next ${nextNavClass}`} />
				<div className={`box-dream-prev swiper-button-prev ${prevNavClass}`} />
			</Swiper>
		</>
	)
}
