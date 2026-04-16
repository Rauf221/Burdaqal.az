import BlogSingle from '@/components/blog/BlogSingle'

export const dynamicParams = true

export default async function BlogPostPage({ params }) {
	const { slug } = await params
	return <BlogSingle slug={slug} />
}
