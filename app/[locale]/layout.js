import HtmlLang from '@/components/elements/HtmlLang'
import { routing } from '@/i18n/routing'
import {
	fetchMetaTagList,
	fetchSiteSettings,
	metaKeywordsToArray,
	pickMetaRow,
} from '@/lib/site-api-server'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { SiteBrandingProvider } from '@/providers/SiteBrandingProvider'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		return {}
	}
	const messages = (await import(`@/messages/${locale}.json`)).default
	const [settings, metaList] = await Promise.all([fetchSiteSettings(), fetchMetaTagList(locale)])
	const homeMeta = pickMetaRow(metaList, 'Home')
	return {
		title: homeMeta?.meta_title ?? messages.metadata?.title,
		description: homeMeta?.meta_description ?? messages.metadata?.description,
		keywords: metaKeywordsToArray(homeMeta?.meta_keywords),
		icons: settings?.favicon ? { icon: [{ url: settings.favicon }] } : undefined,
	}
}

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		notFound()
	}
	setRequestLocale(locale)
	const messages = await getMessages()
	const siteSettings = await fetchSiteSettings()

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<SiteBrandingProvider initialSiteSettings={siteSettings}>
				<HtmlLang locale={locale} />
				{children}
			</SiteBrandingProvider>
		</NextIntlClientProvider>
	)
}
