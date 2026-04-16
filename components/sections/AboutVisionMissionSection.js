'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getAboutAttributesQuery } from '@/services/client/about'

const FALLBACK_ITEMS = [
	{
		title: 'Vision',
		description:
			'Adipiscing et vel tempor elementum dignissim urna. Eu sem sed enim habitant libero ultricies sagittis. Malesuada viverra netus diam vehicula nulla. Neque mattis lacus sed tristique. Luctus ipsum lobortis sed odio ut ultricies adipiscing nisi nulla. Turpis aliquam feugiat tortor rutrum diam molestie vel pharetra.',
	},
	{
		title: 'Mission',
		description:
			'Sit arcu odio aenean vitae eu egestas. Gravida commodo non sem diam faucibus justo dolor. Consectetur nunc scelerisque ut enim tristique sed. At leo urna eu quam cursus dolor. In bibendum sit scelerisque mattis cum.',
	},
]

function columnClass(title, index) {
	const t = (title || '').toLowerCase()
	if (t.includes('mission')) return 'mission'
	if (t.includes('vision')) return 'vision'
	return index % 2 === 0 ? 'vision' : 'mission'
}

export default function AboutVisionMissionSection() {
	const locale = useLocale()
	const { data, isPending } = useQuery(getAboutAttributesQuery(locale))
	const items =
		data?.data?.length > 0 ? data.data.map((row) => ({
			title: row.title?.trim() || '',
			description: row.description?.trim() || '',
		})) : FALLBACK_ITEMS

	return (
		<section className={` vision-mission${isPending ? ' opacity-75' : ''}`}>
			<div className="themesflat-container">
				<div className="row">
					<div className="col-12">
						<div className="content">
							{items.map((item, i) => {
								const cls = columnClass(item.title, i)
								const delay = i > 0 ? '0.1s' : undefined
								const h2Class = i > 0 ? ' wow fadeInUp' : 'wow fadeInUp'
								const pClass = i > 0 ? ' wow fadeInUp' : 'wow fadeInUp'
								return (
									<div key={`${item.title}-${i}`} className={cls}>
										<h2 className={h2Class} data-wow-delay={delay}>
											{item.title}
										</h2>
										<p className={pClass} data-wow-delay={delay}>
											{item.description}
										</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
