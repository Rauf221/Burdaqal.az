'use client'

import { useEffect, useState } from 'react'
import { AUTH_TOKEN_CHANGED_EVENT, getAuthToken } from '@/lib/api/client'

/**
 * Cookie-də access_token varsa true.
 * SSR ilə uyğun gəlməsi üçün ilk render hər yerdə false; mount-dan sonra oxunur.
 */
export function useAuthSession(): boolean {
	const [authed, setAuthed] = useState(false)

	useEffect(() => {
		const sync = () => setAuthed(Boolean(getAuthToken()))
		sync()
		window.addEventListener(AUTH_TOKEN_CHANGED_EVENT, sync)
		return () => window.removeEventListener(AUTH_TOKEN_CHANGED_EVENT, sync)
	}, [])

	return authed
}
