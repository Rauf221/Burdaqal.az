import { queryOptions } from '@tanstack/react-query'
import { getAnnouncements } from './api'

const stale = 60 * 1000

/** Əsas saytda elan siyahısı — GET /announcements + səhifələmə */
export function announcementsListQuery(locale?: string, page: number = 1) {
	return queryOptions({
		queryKey: ['client', 'properties', 'announcements', locale ?? 'default', page],
		queryFn: () => getAnnouncements({ locale, page }),
		staleTime: stale,
	})
}
