import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware({
	...routing,
	alternateLinks: false,
	localeDetection: false,
})

export const config = {
	matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
