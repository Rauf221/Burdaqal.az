import BlogSingle from '@/components/blog/BlogSingle'
import { BLOG_POST_SLUGS } from '@/utils/blogRoutes'

export const dynamicParams = true

export function generateStaticParams() {
	return BLOG_POST_SLUGS.map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }) {
	return <BlogSingle slug={params.slug} />
}
