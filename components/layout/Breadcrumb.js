'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getBreadcrumbQuery } from '@/services/client/about'

const FALLBACK_TITLE = 'About Our Just Home'
const FALLBACK_DESCRIPTION = 'Based on your view history'

export default function Breadcrumb() {
	const locale = useLocale()
	const { data } = useQuery(getBreadcrumbQuery(locale))
	const payload = data?.data

	const title = payload?.title?.trim() || FALLBACK_TITLE
	const description = payload?.description?.trim() || FALLBACK_DESCRIPTION
	const bgImage = payload?.image?.trim() || payload?.thumb_image?.trim()

	return (
		<>
			<div className="space-20" />
			<section
				className="flat-title inner-page"
				style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
			>
				<div className="themesflat-container full">
					<div className="row">
						<div className="col-12">
							<div className="content">
								<h2>{title}</h2>
								<div className="text">{description}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
