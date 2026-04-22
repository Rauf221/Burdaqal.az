'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import Layout from '@/components/layout/Layout'
import { BLOG_LIST, blogPostPath } from '@/utils/blogRoutes'
import { Link } from '@/i18n/navigation'
import { getBlogRelatedQuery, getBlogShowQuery } from '@/services/client/blogs'
import BlogSingleSkeleton from '@/components/blog/BlogSingleSkeleton'

export default function BlogSingle({ slug }) {
	const locale = useLocale()
	const { data: showRes, isLoading: loadingShow, isError: errShow } = useQuery(
		getBlogShowQuery(slug, locale)
	)
	const { data: relatedRes } = useQuery(getBlogRelatedQuery(slug, locale))

	const post = showRes?.data
	const related = (relatedRes?.data ?? []).filter((p) => p.slug !== slug)

	if (loadingShow && !post) {
		return (
			<Layout mainContentCls="spacing-20">
				<BlogSingleSkeleton />
			</Layout>
		)
	}

	if (errShow || !post) {
		return (
			<Layout mainContentCls="spacing-20">
				<div className="themesflat-container py-5">
					<h2>Blog tapılmadı</h2>
					<p>
						<Link href={BLOG_LIST}>Blog siyahısına qayıt</Link>
					</p>
				</div>
			</Layout>
		)
	}

	const descriptionIsHtml = /<[a-z][\s\S]*>/i.test(post.description)

	return (
		<>
			<Layout mainContentCls="spacing-20">
				<div className="blog-single-wrap">
					<div className="image-head">
						<img src={post.image || post.thumb_image} alt={post.title} />
					</div>
					<div className="themesflat-container">
						<div className="row justify-center">
							<div className="col-xl-8 col-12">
								<div className="blog-single-inner">
									<ul className="breadcrumbs style-1 justify-start mb-20">
										<li>
											<Link href="/">Home</Link>
										</li>
										<li>/</li>
										<li>
											<Link href={BLOG_LIST}>Blog</Link>
										</li>
										<li>/</li>
										<li>{post.title}</li>
									</ul>
									<div>
										<h2 className="wow fadeInUp">{post.title}</h2>
										<div className="sub-blog style-color wow fadeInUp">
											
											<div>&nbsp;</div>
										</div>
									</div>
									<div className="mt-13">
										{descriptionIsHtml ? (
											<div
												className="wow fadeInUp blog-api-body"
												dangerouslySetInnerHTML={{ __html: post.description }}
											/>
										) : (
											<p className="wow fadeInUp" style={{ whiteSpace: 'pre-wrap' }}>
												{post.description}
											</p>
										)}
									</div>
									{post.tags && post.tags.length > 0 && (
										<div className="bottom wow fadeInUp mt-20">
											<ul className="tags">
												{post.tags.map((t) => (
													<li key={t.slug}>
														<Link href={`/bloglar?tag=${encodeURIComponent(t.slug)}`}>{t.name}</Link>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					{related.length > 0 && (
						<div className="wg-related-posts">
							<div className="themesflat-container">
								<div className="row">
									<div className="col-12">
										<div className="heading-section text-center">
											<h2 className="wow fadeInUp">Related Posts</h2>
											<div className="text wow fadeInUp">Oxşar yazılar</div>
										</div>
									</div>
								</div>
								<div className="row">
									{related.slice(0, 4).map((item, i) => (
										<div key={item.slug} className="col-xl-3 col-lg-6 col-12">
											<div
												className="wg-blog wow fadeInUp"
												{...(i ? { 'data-wow-delay': `${i * 0.1}s` } : {})}
											>
												<div className="image">
													<img src={item.thumb_image || item.image} alt={item.title} />
												</div>
												<div className="content">
													<div className="sub-blog">
														<div>{item.tags?.[0]?.name ?? 'Blog'}</div>
														<div>&nbsp;</div>
													</div>
													<div className="name">
														<Link href={blogPostPath(item.slug)}>{item.title}</Link>
													</div>
													<Link href={blogPostPath(item.slug)} className="tf-button-no-bg">
														Read More
														<i className="icon-arrow-right-add" />
													</Link>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</Layout>
		</>
	)
}
