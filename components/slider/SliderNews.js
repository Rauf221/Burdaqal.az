'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getTeamsQuery } from '@/services/client/about'
import { getBlogsQuery } from '@/services/client/blogs'
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
	const {
		data: blogsPayload,
		isPending: blogsPending,
		isError: blogsError,
	} = useQuery({
		...getBlogsQuery(locale, { page: 1 }),
		enabled: !expert,
	})
	const latestBlogs = (blogsPayload?.data ?? []).slice(0, 4)

	return (
		<>
			<Swiper {...sliderNews}>
				{!expert ? (
					<>
						{blogsPending && (
							<SwiperSlide>
								<div className="wg-blog">
									<div className="content has-border">
										<p className="text-center mb-0 py-5">…</p>
									</div>
								</div>
							</SwiperSlide>
						)}
						{!blogsPending && !blogsError && latestBlogs.length > 0
							? latestBlogs.map((post, i) => (
									<SwiperSlide key={post.slug}>
										<div
											className="wg-blog wow fadeInUp"
											data-wow-delay={i ? `${i * 0.1}s` : undefined}
											style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
										>
											<div className="image" style={{ height: 225 }}>
												<img
													src={post.thumb_image || post.image || FALLBACK_BLOG_IMAGES[i % FALLBACK_BLOG_IMAGES.length]}
													alt={post.title}
													style={{ width: '100%', height: '100%', objectFit: 'cover' }}
												/>
											</div>
											<div className="content has-border" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
												<div className="sub-blog" style={{ minHeight: 24 }}>
													<div>{post.tags?.[0]?.name ?? 'Blog'}</div>
													<div>{post.created_at ?? '—'}</div>
												</div>
												<div className="name" style={{ minHeight: 56 }}>
													<Link
														href={blogPostPath(post.slug)}
														style={{
															display: '-webkit-box',
															WebkitLineClamp: 2,
															WebkitBoxOrient: 'vertical',
															overflow: 'hidden',
														}}
													>
														{post.title}
													</Link>
												</div>
												<Link href={blogPostPath(post.slug)} className="tf-button-no-bg" style={{ marginTop: 'auto' }}>
													Read More
													<i className="icon-arrow-right-add" />
												</Link>
											</div>
										</div>
									</SwiperSlide>
							  ))
							: null}
						{!blogsPending && blogsError && (
							<SwiperSlide>
								<div className="wg-blog">
									<div className="content has-border">
										<p className="text-center mb-0 py-5 small text-muted">Bloglar yüklənmədi.</p>
									</div>
								</div>
							</SwiperSlide>
						)}
						{!blogsPending && !blogsError && latestBlogs.length === 0 && (
							<SwiperSlide>
								<div className="wg-blog">
									<div className="content has-border">
										<p className="text-center mb-0 py-5 small text-muted">Hələ blog yoxdur.</p>
									</div>
								</div>
							</SwiperSlide>
						)}
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
