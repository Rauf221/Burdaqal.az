import {
	fetchMetaTagList,
	metaKeywordsToArray,
	pickMetaRow,
} from '@/lib/site-api-server'
import { routing } from '@/i18n/routing'

export async function generateMetadata({ params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		return {}
	}
	const messages = (await import(`@/messages/${locale}.json`)).default
	const metaList = await fetchMetaTagList(locale)
	const row = pickMetaRow(metaList, 'About')
	return {
		title: row?.meta_title ?? messages.metadata?.title,
		description: row?.meta_description ?? messages.metadata?.description,
		keywords: metaKeywordsToArray(row?.meta_keywords),
	}
}

export default function AboutLayout({ children }) {
	return children
}
