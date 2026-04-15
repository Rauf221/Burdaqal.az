import BlogSingle from '@/components/blog/BlogSingle'
import { BLOG_POST_SLUGS } from '@/utils/blogRoutes'

export const dynamicParams = true

export function generateStaticParams() {
	return BLOG_POST_SLUGS.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }) {
	const { slug } = await params
	return <BlogSingle slug={slug} />
}
