import { DM_Sans, Jost, Roboto } from 'next/font/google'

import '@/public/css/animate.min.css'
import '@/public/css/animation.css'
import '@/public/css/bootstrap-select.min.css'
import '@/public/css/bootstrap.css'
import '@/public/css/magnific-popup.min.css'
import '@/public/css/mmenu.css'
import '@/public/css/nice-select.css'
import '@/public/css/nouislider.min.css'
import '@/public/css/swiper-bundle.min.css'
import '@/public/icon/flaticon_just-home.css'
import '@/public/icon/icomoon/style.css'
import '@/public/css/style.css'

const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin', 'latin-ext'],
	variable: '--roboto',
	display: 'swap',
})

const dm = DM_Sans({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin', 'latin-ext'],
	variable: '--dm',
	display: 'swap',
})

const jost = Jost({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin', 'latin-ext'],
	variable: '--jost',
	display: 'swap',
})

export default function RootLayout({ children }) {
	return (
		<html
			lang="az"
			suppressHydrationWarning
			className={`${roboto.className} ${roboto.variable} ${dm.variable} ${jost.variable}`}
		>
			<body className={`${roboto.className} body mm-wrapper`}>{children}</body>
		</html>
	)
}
