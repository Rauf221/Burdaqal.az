import PropertySingleV5 from '@/components/property/PropertySingleV5'
import { PROPERTY_SLUGS } from '@/utils/propertyRoutes'

export const dynamicParams = true

export function generateStaticParams() {
	return PROPERTY_SLUGS.map((slug) => ({ slug }))
}

export default async function PropertyGridDetailPage({ params }) {
	const { slug } = await params
	return <PropertySingleV5 slug={slug} />
}
