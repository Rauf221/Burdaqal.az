import HtmlLang from '@/components/elements/HtmlLang'
import Layout from '@/components/layout/Layout'
import SiteNotFoundSection from '@/components/sections/SiteNotFoundSection'
import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'

export const metadata = {
	title: '404 — Page Not Found',
}

export default async function GlobalNotFound() {
	const locale = routing.defaultLocale
	const messages = (await import(`@/messages/${locale}.json`)).default

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<HtmlLang locale={locale} />
			<Layout mainContentCls="default">
				<SiteNotFoundSection />
			</Layout>
		</NextIntlClientProvider>
	)
}
