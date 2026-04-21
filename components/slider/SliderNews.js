'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getTeamsQuery } from '@/services/client/about'
import { blogPostPath } from '@/utils/blogRoutes'
import { Link } from '@/i18n/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const sliderNews = {
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}

function toExternalHref(raw) {
	if (!raw || !String(raw).trim()) return '#'
	const t = String(raw).trim()
	if (/^https?:\/\//i.test(t)) return t
	return `https://${t}`
}

function socialIconClass(link) {
	if (!link) return 'flaticon-share'
	const l = String(link).toLowerCase()
	if (l.includes('linkedin')) return 'flaticon-linkedin'
	if (l.includes('twitter') || l.includes('x.com')) return 'flaticon-twitter'
	if (l.includes('instagram')) return 'flaticon-instagram'
	if (l.includes('facebook')) return 'flaticon-facebook'
	return 'flaticon-share'
}

/** Layihə `public/images/blog/*.jpg` daşımır — mövcud SVG ilə 404 qarşısı alınır */
const FALLBACK_BLOG_IMAGES = [
	'/images/image-box/img-1.svg',
	'/images/image-box/img-2.svg',
	'/images/image-box/img-3.svg',
]

export default function SliderNews({ expert }) {
	const locale = useLocale()
	const { data, isPending, isError } = useQuery({
		...getTeamsQuery(locale),
		enabled: Boolean(expert),
	})

	return (
		<>
			<Swiper {...sliderNews}>
				{!expert ? (
					<>
						<SwiperSlide>
							<div className="wg-blog wow fadeInUp">
								<div className="image">
									<img src={FALLBACK_BLOG_IMAGES[0]} alt="" />
								</div>
								<div className="content has-border">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath('chip-joanna-gaines-fixer-upper-open-visitors')}>
											Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors
										</Link>
									</div>
									<Link href={blogPostPath('chip-joanna-gaines-fixer-upper-open-visitors')} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
								<div className="image">
									<img src={FALLBACK_BLOG_IMAGES[1]} alt="" />
								</div>
								<div className="content has-border">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath('homebuyers-thankful-to-hear-these')}>
											Homebuyers Will Be So Thankful To Hear These{' '}
										</Link>
									</div>
									<Link href={blogPostPath('homebuyers-thankful-to-hear-these')} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
								<div className="image">
									<img src={FALLBACK_BLOG_IMAGES[2]} alt="" />
								</div>
								<div className="content has-border">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')}>
											That’s Life! Frank Sinatra’s Former Los Angeles-Area{' '}
										</Link>
									</div>
									<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
								<div className="image">
									<img src={FALLBACK_BLOG_IMAGES[0]} alt="" />
								</div>
								<div className="content has-border">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath('affordability-crisis-tiny-living')}>
											Affordability crisis buyers and renters turn to tiny living
										</Link>
									</div>
									<Link href={blogPostPath('affordability-crisis-tiny-living')} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-blog">
								<div className="image">
									<img src={FALLBACK_BLOG_IMAGES[1]} alt="" />
								</div>
								<div className="content has-border">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')}>
											That’s Life! Frank Sinatra’s Former Los Angeles-Area{' '}
										</Link>
									</div>
									<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</>
				) : (
					<>
						{isPending && (
							<SwiperSlide>
								<div className="experts-item">
									<p className="text-center mb-0 py-5">…</p>
								</div>
							</SwiperSlide>
						)}
						{!isPending && !isError && data?.data?.length > 0
							? data.data.map((member, i) => {
									const img = member.image
									const href = toExternalHref(member.link)
									const icon = socialIconClass(member.link)
									return (
										<SwiperSlide key={`${member.name}-${i}`}>
											<div className="experts-item wow fadeInUp" data-wow-delay={i ? `${i * 0.1}s` : undefined}>
												<div className="image">
													<img src={img} alt={member.name || ''} />
													<ul className="wg-social-1">
														<li>
															<a href={href} target="_blank" rel="noopener noreferrer">
																<i className={icon} />
															</a>
														</li>
													</ul>
												</div>
												<h4>
													<a href={href} target="_blank" rel="noopener noreferrer">
														{member.name}
													</a>
												</h4>
												<p>{member.profession}</p>
											</div>
										</SwiperSlide>
									)
							  })
							: null}
						{!isPending && isError && (
							<SwiperSlide>
								<div className="experts-item">
									<p className="text-center mb-0 py-5 small text-muted">Team could not be loaded.</p>
								</div>
							</SwiperSlide>
						)}
						{!isPending && !isError && data?.data?.length === 0 && (
							<SwiperSlide>
								<div className="experts-item">
									<p className="text-center mb-0 py-5 small text-muted">No team members yet.</p>
								</div>
							</SwiperSlide>
						)}
					</>
				)}
			</Swiper>
		</>
	)
}
