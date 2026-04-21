import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing'

/** `lib/api/client.ts` ilə eyni — Edge-də axios idxal etməmək üçün burada təkrarlanır. */
const ACCESS_TOKEN_COOKIE = 'access_token'

const intlMiddleware = createMiddleware({
	...routing,
	alternateLinks: false,
	localeDetection: false,
})

function stripLocalePrefix(pathname) {
	const segments = pathname.split('/').filter(Boolean)
	if (segments.length > 0 && routing.locales.includes(segments[0])) {
		return '/' + segments.slice(1).join('/')
	}
	return pathname
}

function isDashboardPath(pathname) {
	const p = stripLocalePrefix(pathname)
	return p === '/dashboard' || p.startsWith('/dashboard-')
}

function redirectToHomeWithLogin(request) {
	const pathname = request.nextUrl.pathname
	const segments = pathname.split('/').filter(Boolean)
	let locale = routing.defaultLocale
	if (segments[0] && routing.locales.includes(segments[0])) {
		locale = segments[0]
	}
	const url = request.nextUrl.clone()
	url.pathname = locale === routing.defaultLocale ? '/' : `/${locale}`
	url.searchParams.set('login', '1')
	return NextResponse.redirect(url)
}

export function proxy(request) {
	const token = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value
	if (isDashboardPath(request.nextUrl.pathname) && !token) {
		return redirectToHomeWithLogin(request)
	}
	return intlMiddleware(request)
}

export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
