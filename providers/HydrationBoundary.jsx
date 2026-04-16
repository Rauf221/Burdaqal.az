'use client'

import { HydrationBoundary as TanStackHydrationBoundary } from '@tanstack/react-query'

/**
 * @param {{ children: import('react').ReactNode, state: import('@tanstack/react-query').DehydratedState }} props
 */
export function HydrationBoundary({ children, state }) {
	return <TanStackHydrationBoundary state={state}>{children}</TanStackHydrationBoundary>
}
