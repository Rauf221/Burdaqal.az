'use client'
import { Link } from '@/i18n/navigation'
import data from "@/utils/carousel.json"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


/**
 * @param {{ start: number, end: number, path: string, detailHref?: string, images?: string[], navKey?: string }} props
 * `images` veriləndə uzaq URL-lərlə slaydlar; əks halda mövzunun `/images/${path}-${id}.jpg` nümunəsi.
 */
export default function SliderBoxDream({ start, end, path, detailHref, images, navKey }) {
	const useRemoteImages = Array.isArray(images) && images.length > 0

	const slideEntries = useRemoteImages
		? images.map((src, i) => ({ src, key: `remote-${i}` }))
		: data.slice(start, end).map((item) => ({
				src: `/images/${path}-${item.id}.jpg`,
				key: item.id,
			}))

	const navId = useRemoteImages ? (navKey ?? `r-${start}-${end}`) : null
	const nextNavClass = useRemoteImages ? `sdp-next-${navId}` : `sdp${start}`
	const prevNavClass = useRemoteImages ? `sdp-prev-${navId}` : `sdp${end}`

	const sliderBoxDream = {
		modules: [Navigation, Pagination, Autoplay],
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: `.${nextNavClass}`,
			prevEl: `.${prevNavClass}`,
			clickable: true,
		},
		pagination: {
			el: ".box-dream-pagination",
			clickable: true,
		},
	}
	return (
		<>
			<Swiper {...sliderBoxDream} className="swiper-container slider-box-dream arrow-style-1 pagination-style-1">
				<div className="swiper-wrapper">
					{slideEntries.map((entry, i) => (
						<SwiperSlide key={entry.key ?? `${start}-${i}`}>
							<div className="w-full">
								{detailHref ? (
									<Link href={detailHref} className="block">
										<img src={entry.src} alt="" />
									</Link>
								) : (
									<img src={entry.src} alt="" />
								)}
							</div>
						</SwiperSlide>
					))}
				</div>
				<div className="swiper-pagination box-dream-pagination" />
				<div className={`box-dream-next swiper-button-next ${nextNavClass}`} />
				<div className={`box-dream-prev swiper-button-prev ${prevNavClass}`} />
			</Swiper>
		</>
	)
}
