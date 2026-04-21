const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Dev-də true olanda bəzən Turbopack keşi pozulur və JSON.parse (RSC flight) xətası verir; lazım olsa əl ilə yenidən yandırın.
	experimental: {
		turbopackFileSystemCacheForDev: false,
	},
	async redirects() {
		return [
			{
				source: '/property-grid-v2',
				destination: '/elanlar',
				permanent: true,
			},
			{
				source: '/property-grid-v2/:path*',
				destination: '/elanlar/:path*',
				permanent: true,
			},
			{
				source: '/:locale(az|en|ru)/property-grid-v2',
				destination: '/:locale/elanlar',
				permanent: true,
			},
			{
				source: '/:locale(az|en|ru)/property-grid-v2/:path*',
				destination: '/:locale/elanlar/:path*',
				permanent: true,
			},
			{
				source: '/blog-list-v1',
				destination: '/bloglar',
				permanent: true,
			},
			{
				source: '/blog-list-v1/:path*',
				destination: '/bloglar/:path*',
				permanent: true,
			},
			{
				source: '/:locale(az|en|ru)/blog-list-v1',
				destination: '/:locale/bloglar',
				permanent: true,
			},
			{
				source: '/:locale(az|en|ru)/blog-list-v1/:path*',
				destination: '/:locale/bloglar/:path*',
				permanent: true,
			},
			{
				source: '/faq',
				destination: '/about',
				permanent: true,
			},
			{
				source: '/:locale(az|en|ru)/faq',
				destination: '/:locale/about',
				permanent: true,
			},
		]
	},
}

module.exports = withNextIntl(nextConfig)
