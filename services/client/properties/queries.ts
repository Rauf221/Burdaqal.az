import { queryOptions } from '@tanstack/react-query'
import { getAnnouncementBySlug, getAnnouncements } from './api'

const stale = 60 * 1000

type AnnouncementsFilterOptions = {
	search?: string
	category_id?: string
	region_id?: string
}

/** Əsas saytda elan siyahısı — GET /announcements + səhifələmə */
export function announcementsListQuery(
	locale?: string,
	page: number = 1,
	filters?: AnnouncementsFilterOptions
) {
	const search = filters?.search?.trim() ?? ''
	const category_id = filters?.category_id?.trim() ?? ''
	const region_id = filters?.region_id?.trim() ?? ''

	return queryOptions({
		queryKey: [
			'client',
			'properties',
			'announcements',
			locale ?? 'default',
			page,
			search,
			category_id,
			region_id,
		],
		queryFn: () => getAnnouncements({ locale, page, search, category_id, region_id }),
		staleTime: stale,
	})
}

/** Tək elan səhifəsi — GET /announcement/{slug} */
export function announcementBySlugQuery(slug: string, locale?: string) {
	return queryOptions({
		queryKey: ['client', 'properties', 'announcement', slug, locale ?? 'default'],
		queryFn: () => getAnnouncementBySlug(slug, { locale }),
		enabled: Boolean(slug),
		staleTime: stale,
	})
}
