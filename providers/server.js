import { QueryClient } from '@tanstack/react-query'

/**
 * Backend API origin for server components, Route Handlers, and `prefetchQuery` in RSC.
 * Prefer `NEXT_PUBLIC_API_BASE_URL` in `.env` (same value as client).
 */
export function getApiBaseUrl() {
	const raw = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || ''
	return raw.replace(/\/+$/, '')
}

/**
 * Absolute URL for an API path. `path` should start with `/` (e.g. `/properties`).
 */
export function apiUrl(path) {
	const base = getApiBaseUrl()
	const p = path.startsWith('/') ? path : `/${path}`
	if (!base) return p
	return `${base}${p}`
}

export function createServerQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				gcTime: 10 * 60 * 1000,
				retry: false,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
			},
		},
	})
}

export function getServerQueryClient() {
	return createServerQueryClient()
}
