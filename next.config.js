const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
	async redirects() {
		return [
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
			{
				source: '/property-single-v5',
				destination: '/property-grid-v2/villa-one-hyde-park',
				permanent: true,
			},
			{
				source: '/blog-single',
				destination: '/blog-list-v1/chip-joanna-gaines-fixer-upper-open-visitors',
				permanent: true,
			},
			{
				source: '/blog-list-v2',
				destination: '/blog-list-v1',
				permanent: true,
			},
			{
				source: '/blog-list-v3',
				destination: '/blog-list-v1',
				permanent: true,
			},
			{
				source: '/agent-list',
				destination: '/',
				permanent: true,
			},
			{
				source: '/agent-single',
				destination: '/',
				permanent: true,
			},
			{
				source: '/agency-list',
				destination: '/',
				permanent: true,
			},
			{
				source: '/agency-single',
				destination: '/',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/agent-list',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/agent-single',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/agency-list',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/agency-single',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/shop-list',
				destination: '/',
				permanent: true,
			},
			{
				source: '/shop-single',
				destination: '/',
				permanent: true,
			},
			{
				source: '/shop-cart',
				destination: '/',
				permanent: true,
			},
			{
				source: '/shop-checkout',
				destination: '/',
				permanent: true,
			},
			{
				source: '/shop-order',
				destination: '/',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/shop-list',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/shop-single',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/shop-cart',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/shop-checkout',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/shop-order',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/compare',
				destination: '/',
				permanent: true,
			},
			{
				source: '/pricing',
				destination: '/',
				permanent: true,
			},
			{
				source: '/ui-elements',
				destination: '/',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/compare',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/pricing',
				destination: '/:locale',
				permanent: true,
			},
			{
				source: '/:locale(en|ru)/ui-elements',
				destination: '/:locale',
				permanent: true,
			},
		]
	},
}

module.exports = withNextIntl(nextConfig)
