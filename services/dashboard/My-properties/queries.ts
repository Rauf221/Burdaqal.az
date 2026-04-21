import { queryOptions } from '@tanstack/react-query'
import { getMyAnnouncements } from './api'

const stale = 60 * 1000

export function myAnnouncementsListQuery(locale?: string, page: number = 1) {
	return queryOptions({
		queryKey: ['dashboard', 'my-properties', 'announcements', locale ?? 'default', page],
		queryFn: () => getMyAnnouncements({ locale, page }),
		staleTime: stale,
	})
}
