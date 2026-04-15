import HtmlLang from '@/components/elements/HtmlLang'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		return {}
	}
	const messages = (await import(`@/messages/${locale}.json`)).default
	return {
		title: messages.metadata?.title,
		description: messages.metadata?.description,
	}
}

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		notFound()
	}
	setRequestLocale(locale)
	const messages = await getMessages()

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<HtmlLang locale={locale} />
			{children}
		</NextIntlClientProvider>
	)
}
