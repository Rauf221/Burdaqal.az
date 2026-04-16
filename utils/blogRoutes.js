/** Blog list (Blog List 01 / v1). Post detail: `${BLOG_LIST}/${slug}` */

export const BLOG_LIST = '/bloglar'

export const BLOG_LIST_POSTS = [
	{
		slug: 'chip-joanna-gaines-fixer-upper-open-visitors',
		title: 'Chip and Joanna Gaines’ Latest Fixer-Upper Is Open for Visitors',
		image: 'blog-grid-1.jpg',
	},
	{
		slug: 'homebuyers-thankful-to-hear-these',
		title: 'Homebuyers Will Be So Thankful To Hear These ',
		image: 'blog-grid-2.jpg',
	},
	{
		slug: 'frank-sinatra-former-los-angeles-area',
		title: 'That’s Life! Frank Sinatra’s Former Los Angeles-Area ',
		image: 'blog-grid-3.jpg',
	},
	{
		slug: 'affordability-crisis-tiny-living',
		title: 'Affordability crisis buyers and renters turn to tiny living',
		image: 'blog-grid-4.jpg',
	},
	{
		slug: 'buy-home-no-money-down',
		title: 'How To Buy a Home With No Money Down (You Really Can!)',
		image: 'blog-grid-5.jpg',
	},
	{
		slug: 'latest-home-sales-americas-housing',
		title: "Latest Home Sales Data Offers Hope: Is America's Housing.",
		image: 'blog-grid-6.jpg',
	},
	{
		slug: 'home-holidays-north-carolina-estate',
		title: 'Home for the Holidays: $1M North Carolina Estate With Hallmark.',
		image: 'blog-grid-7.jpg',
	},
	{
		slug: 'real-estate-agents-selling-your-home',
		title: '9 Things Real Estate Agents Wish You Knew About Selling Your Home',
		image: 'blog-grid-8.jpg',
	},
	{
		slug: 'bay-area-craftsman-bernard-maybeck',
		title: 'Century-Old Bay Area Craftsman Designed by Bernard Maybeck',
		image: 'blog-grid-9.jpg',
	},
	{
		slug: 'mortgage-broker-wishes-you-knew',
		title: '5 Things Your Mortgage Broker Wishes You Knew',
		image: 'blog-grid-10.jpg',
	},
	{
		slug: 'midcentury-glass-domed-pool',
		title: '$1.9M Midcentury Home With Glass-Domed Pool Dips Onto.',
		image: 'blog-grid-11.jpg',
	},
	{
		slug: 'historic-victorian-fro-yo-florida',
		title: 'Live in a Historic Victorian, Perched Above a Fro-Yo Shop in Florida',
		image: 'blog-grid-12.jpg',
	},
]

export const BLOG_POST_SLUGS = BLOG_LIST_POSTS.map((p) => p.slug)

export function blogPostPath(slug) {
	return `${BLOG_LIST}/${slug}`
}

export function getBlogPostTitle(slug) {
	const found = BLOG_LIST_POSTS.find((p) => p.slug === slug)
	if (found) return found.title
	return slug
		.split('-')
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
}
