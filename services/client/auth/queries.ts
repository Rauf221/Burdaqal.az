import { queryOptions } from '@tanstack/react-query'
import { getAuthToken } from '@/lib/api/client'
import { getUserInfo } from './api'

export function getUserProfileQuery(locale?: string) {
	return queryOptions({
		queryKey: ['user-profile', locale ?? 'default'],
		queryFn: () => getUserInfo(locale),
		enabled: typeof window !== 'undefined' && Boolean(getAuthToken()),
		staleTime: 60 * 1000,
	})
}
