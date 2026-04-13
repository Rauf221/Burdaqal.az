/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
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
		]
	},
}

module.exports = nextConfig
