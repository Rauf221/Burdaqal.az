'use client'

import { createContext, useContext, useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppLoadingGate } from '@/providers/AppLoadingGate'

/** @typedef {{ children: import('react').ReactNode }} QueryProviderProps */

const ApiBaseUrlContext = createContext('')

/** @returns {string} Normalized API base (no trailing slash), from `NEXT_PUBLIC_API_BASE_URL`. */
export function useApiBaseUrl() {
	return useContext(ApiBaseUrlContext)
}

/**
 * Join API base with a path. `path` should start with `/`.
 * @param {string} path
 */
export function useApiUrl(path) {
	const base = useApiBaseUrl()
	return useMemo(() => {
		const p = path.startsWith('/') ? path : `/${path}`
		if (!base) return p
		return `${base}${p}`
	}, [base, path])
}

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				gcTime: 10 * 60 * 1000,
				retry: 2,
				retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
				refetchOnWindowFocus: false,
				refetchOnReconnect: true,
			},
			mutations: {
				retry: 1,
				retryDelay: 1000,
			},
		},
	})
}

/** @type {QueryClient | undefined} */
let browserQueryClient

function getQueryClient() {
	if (typeof window === 'undefined') {
		return makeQueryClient()
	}
	if (!browserQueryClient) browserQueryClient = makeQueryClient()
	return browserQueryClient
}

/** @param {QueryProviderProps} props */
export function QueryProvider({ children }) {
	const queryClient = getQueryClient()
	const apiBaseUrl = useMemo(() => {
		const raw = process.env.NEXT_PUBLIC_API_BASE_URL || ''
		return raw.replace(/\/+$/, '')
	}, [])

	return (
		<ApiBaseUrlContext.Provider value={apiBaseUrl}>
			<QueryClientProvider client={queryClient}>
				<AppLoadingGate>{children}</AppLoadingGate>
				{process.env.NODE_ENV === 'development' && (
					<ReactQueryDevtools initialIsOpen={false} position="bottom" />
				)}
			</QueryClientProvider>
		</ApiBaseUrlContext.Provider>
	)
}
