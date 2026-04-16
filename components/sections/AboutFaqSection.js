'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { getFaqQuery } from '@/services/client/about'

const FALLBACK_FAQ = [
	{
		question: 'What methods of payments are supported?',
		answer:
			'Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.',
	},
	{
		question: 'Can I cancel at anytime?',
		answer:
			'Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.',
	},
	{
		question: 'How do I get a receipt for my purchase?',
		answer:
			'Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.',
	},
	{
		question: 'Which license do I need?',
		answer:
			'Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.',
	},
	{
		question: 'How do I get access to a theme I purchased?',
		answer:
			'Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.',
	},
]

export default function AboutFaqSection() {
	const locale = useLocale()
	const { data } = useQuery(getFaqQuery(locale))
	const items = data?.data?.length > 0 ? data.data : FALLBACK_FAQ

	const [openKey, setOpenKey] = useState(1)

	const handleAccordion = (key) => {
		setOpenKey((prev) => (prev === key ? null : key))
	}

	return (
		<section id="faq" className="tf-section flat-question style-1">
			<div className="themesflat-container">
				<div className="row">
					<div className="col-12">
						<div className="heading-section text-center">
							<h2 className="wow fadeInUp">Hove More Question?</h2>
							<div className="text wow fadeInUp">
							Sualın varsa… cavabı biz artıq yazmışıq 😎 sadəcə aşağı bax.
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="widget-tabs style-1">
							<div className="widget-content-tab">
								<div className="widget-content-inner active">
									<div className="flat-accordion">
										{items.map((item, i) => {
											const key = i + 1
											const isOpen = openKey === key
											return (
												<div key={`${item.question}-${i}`} className={`flat-toggle ${isOpen ? 'active' : ''}`}>
													<h4
														className={`toggle-title ${isOpen ? 'active' : ''}`}
														onClick={() => handleAccordion(key)}
													>
														{item.question}
													</h4>
													<div
														className="toggle-content"
														style={{ display: isOpen ? 'block' : 'none' }}
													>
														<p>{item.answer}</p>
													</div>
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
