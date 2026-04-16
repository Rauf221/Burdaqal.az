'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getAboutQuery } from '@/services/client/about'

const FALLBACK_TITLE = 'Local expertise for luxury homes'
const FALLBACK_DESCRIPTION =
	'Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.'
const FALLBACK_IMAGE = '/images/section/luxury-home-4.jpg'

export default function AboutUsSection() {
	const locale = useLocale()
	const { data, isPending } = useQuery(getAboutQuery(locale))
	const block = data?.data

	const title = block?.title?.trim() || FALLBACK_TITLE
	const description = block?.description?.trim() || FALLBACK_DESCRIPTION
	const imgSrc = block?.image || block?.thumb_image || FALLBACK_IMAGE

	return (
		<section className=" luxury-home style-5">
			<div className="themesflat-container">
				<div className="row justify-between">
					<div className="col-md-6">
						<div className={`image wow fadeInLeft${isPending ? ' opacity-50' : ''}`}>
							<img src={imgSrc} alt="" />
						</div>
					</div>
					<div className="col-xl-5 col-md-6">
						<div className="content">
							<h2 className="wow fadeInUp">{title}</h2>
							<div className="text-content wow fadeInUp">{description}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
