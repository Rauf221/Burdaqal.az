import PropertySingleV5 from '@/components/property/PropertySingleV5'
import { resolveMediaUrl } from '@/lib/media-url'
import { getAcceptLanguageHeader } from '@/lib/utils'
import { getApiBaseUrl } from '@/providers/server'
import { PROPERTY_SLUGS } from '@/utils/propertyRoutes'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export function generateStaticParams() {
	return PROPERTY_SLUGS.map((slug) => ({ slug }))
}

const REVALIDATE_SEC = 300

async function fetchAnnouncementShow(slug, locale) {
	const base = getApiBaseUrl()
	if (!base) return null
	try {
		const res = await fetch(`${base}/announcement/${encodeURIComponent(slug)}`, {
			next: { revalidate: REVALIDATE_SEC },
			headers: {
				'Accept-Language': getAcceptLanguageHeader(locale || 'az'),
			},
		})
		if (!res.ok) return null
		return res.json()
	} catch {
		return null
	}
}

function buildAnnouncementForClient(payload, apiBase) {
	const data = payload?.data
	if (!data) return null
	const resolve = (p) => (p ? resolveMediaUrl(apiBase, p) : '')
	const media = data.media
	const galleryRaw = media?.gallery?.length ? media.gallery : []
	const cover = media?.cover_image ? resolve(media.cover_image) : ''
	const gallery = galleryRaw.map(resolve).filter(Boolean)
	const slides = gallery.length ? gallery : cover ? [cover] : []
	const thumbsRaw = media?.thumb_gallery?.length ? media.thumb_gallery : []
	const thumbsResolved = thumbsRaw.map(resolve).filter(Boolean)
	const thumbGallery =
		thumbsResolved.length >= slides.length
			? thumbsResolved.slice(0, slides.length)
			: slides

	return {
		...data,
		media: media
			? {
					...media,
					cover_image: cover,
					gallery: slides,
					thumb_gallery: thumbGallery,
				}
			: null,
		user: data.user
			? {
					...data.user,
					image: resolve(data.user.image),
				}
			: data.user,
	}
}

export default async function PropertyGridDetailPage({ params }) {
	const { slug, locale } = await params
	const base = getApiBaseUrl()
	const raw = await fetchAnnouncementShow(slug, locale)
	if (!raw?.data) notFound()
	const announcement = buildAnnouncementForClient(raw, base)
	if (!announcement) notFound()

	return <PropertySingleV5 slug={slug} announcement={announcement} />
}
