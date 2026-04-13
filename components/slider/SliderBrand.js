'use client'
import Link from 'next/link'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const sliderBrand = {
	modules: [Autoplay],
	spaceBetween: 30,
	slidesPerView: 2,
	observer: true,
	observeParents: true,
	loop: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	speed: 10000,
	breakpoints: {
		450: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		868: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 171,
		},
	},
}

export default function SliderBrand({ colorWhite }) {
	return (
		<>
			<Swiper {...sliderBrand}>
				{!colorWhite ?
					<>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-1.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-2.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-3.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-4.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-5.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-6.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
					</> : <>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-7.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-8.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-9.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-10.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-11.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slogan-logo">
								<Link href="/#">
									<img src="/images/image-box/brand-12.png" alt="images" />
								</Link>
							</div>
						</SwiperSlide>
					</>
				}
			</Swiper>
		</>
	)
}
