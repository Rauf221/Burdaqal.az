'use client'

import { Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import Layout from '@/components/layout/Layout'
import { blogPostPath } from '@/utils/blogRoutes'
import { Link } from '@/i18n/navigation'
import { getBlogsQuery, getTagsQuery } from '@/services/client/blogs'
import {
	BlogFilterSkeletonRow,
	BlogGridSkeleton,
	BlogListPageSkeleton,
} from '@/components/blog/BlogListSkeleton'

function BlogListFallback() {
	return <BlogListPageSkeleton />
}

function BlogListContent() {
	const locale = useLocale()
	const searchParams = useSearchParams()
	const activeTag = searchParams.get('tag') || ''
	const page = Math.max(1, Number(searchParams.get('page') || '1') || 1)

	const tagFilters = useMemo(
		() => (activeTag ? { tagSlugs: [activeTag], page } : { page }),
		[activeTag, page]
	)

	const { data: tagsPayload, isPending: tagsPending } = useQuery(getTagsQuery(locale, 1))
	const { data: blogsPayload, isPending: blogsPending, isError } = useQuery(
		getBlogsQuery(locale, tagFilters)
	)

	const tags = tagsPayload?.data ?? []
	const posts = blogsPayload?.data ?? []
	const meta = blogsPayload?.meta

	const hrefForPage = (targetPage) => {
		const p = new URLSearchParams()
		if (activeTag) p.set('tag', activeTag)
		if (targetPage > 1) p.set('page', String(targetPage))
		const q = p.toString()
		return q ? `/bloglar?${q}` : '/bloglar'
	}

	return (
		<>
			<div className="flat-title">
				<div className="themesflat-container full">
					<div className="row">
						<div className="col-12">
							<div className="content">
								<h2>Blog</h2>
								<ul className="breadcrumbs">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>/</li>
									<li>Blog</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="blog-list-api-wrap px-20">
				<div className="widget-tabs style-1">
					<div className="themesflat-container mb-30">
						{tagsPending ? (
							<BlogFilterSkeletonRow />
						) : (
							<ul
								className="widget-menu-tab wow fadeInUp"
								style={{ flexWrap: 'wrap', gap: '10px', rowGap: '12px' }}
							>
								<li className={`item-title ${!activeTag ? 'active' : ''}`}>
									<Link href="/bloglar" className="blog-filter-tab-link">
										<span className="inner">Hamısı</span>
									</Link>
								</li>
								{tags.map((t) => (
									<li key={t.slug} className={`item-title ${activeTag === t.slug ? 'active' : ''}`}>
										<Link
											href={`/bloglar?tag=${encodeURIComponent(t.slug)}`}
											className="blog-filter-tab-link"
										>
											<span className="inner">{t.name}</span>
										</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<div className="themesflat-container">
					<div className="row">
						{blogsPending && <BlogGridSkeleton />}
						{isError && (
							<div className="col-12">
								<p>Blog siyahısı alınmadı. Bir az sonra yenidən cəhd edin.</p>
							</div>
						)}
						{!blogsPending &&
							!isError &&
							posts.map((post, index) => (
								<div key={post.slug} className="col-xl-3 col-md-6 col-12">
									<div className="wg-blog wow fadeInUp" data-wow-delay={`${(index % 4) * 0.1}s`}>
										<div className="image">
											<img src={post.thumb_image || post.image} alt={post.title} />
										</div>
										<div className="content">
											<div className="sub-blog">
												<div>{post.tags?.[0]?.name ?? 'Blog'}</div>
												<div className="date">{post.created_at ?? '—'}</div>
											</div>
											
											<div className="name">
												<Link href={blogPostPath(post.slug)}>{post.title}</Link>
											</div>
											<Link href={blogPostPath(post.slug)} className="tf-button-no-bg">
												Read More
												<i className="icon-arrow-right-add" />
											</Link>
										</div>
									</div>
								</div>
							))}
						{!blogsPending && !isError && posts.length === 0 && (
							<div className="col-12">
								<p>Bu filtr üzrə yazı yoxdur.</p>
							</div>
						)}
						{meta && meta.last_page > 1 && (
							<div className="col-12">
								<ul className="wg-pagination justify-center">
									<li>
										{meta.current_page > 1 ? (
											<Link href={hrefForPage(meta.current_page - 1)}>
												<i className="icon-keyboard_arrow_left" />
											</Link>
										) : (
											<span className="disabled" style={{ opacity: 0.4 }}>
												<i className="icon-keyboard_arrow_left" />
											</span>
										)}
									</li>
									{Array.from({ length: meta.last_page }, (_, i) => i + 1).map((n) => (
										<li key={n} className={n === meta.current_page ? 'active' : ''}>
											<Link href={hrefForPage(n)}>{n}</Link>
										</li>
									))}
									<li>
										{meta.current_page < meta.last_page ? (
											<Link href={hrefForPage(meta.current_page + 1)}>
												<i className="icon-keyboard_arrow_right" />
											</Link>
										) : (
											<span className="disabled" style={{ opacity: 0.4 }}>
												<i className="icon-keyboard_arrow_right" />
											</span>
										)}
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default function BlogListV1() {
	return (
		<Layout>
			<Suspense fallback={<BlogListFallback />}>
				<BlogListContent />
			</Suspense>
		</Layout>
	)
}
