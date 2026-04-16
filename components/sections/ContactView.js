'use client'

import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import SliderBrand from '@/components/slider/SliderBrand'
import {
	getContactMapEmbedSrc,
	getContactMapExternalUrl,
	getContactQuery,
	useContactFormMutation,
} from '@/services/client/contact'

export default function ContactView() {
	const locale = useLocale()
	const { data, isPending } = useQuery(getContactQuery(locale))
	const contact = data?.data
	const mapSrc = getContactMapEmbedSrc(contact)
	const mapLink = getContactMapExternalUrl(contact)

	const [formMsg, setFormMsg] = useState(null)
	const contactMutation = useContactFormMutation(locale)

	const addressText = contact?.address?.trim() || '90 Fifth Avenue, 3rd Floor \nSan Francisco, CA 1980'
	const phoneText = contact?.phone?.trim() || '+088 (246) 642-27-10'
	const emailText = contact?.email?.trim() || 'example@gmail.com'

	const onSubmitMessage = async (e) => {
		e.preventDefault()
		setFormMsg(null)
		const form = e.currentTarget
		const fd = new FormData(form)
		const name = String(fd.get('name') || '').trim()
		const email = String(fd.get('email') || '').trim()
		const phone = String(fd.get('phone') || '').trim()
		const note = String(fd.get('note') || '').trim()
		try {
			await contactMutation.mutateAsync({ name, email, phone, note })
			setFormMsg({ type: 'ok', text: 'Mesajınız göndərildi.' })
			form.reset()
		} catch {
			setFormMsg({ type: 'err', text: 'Göndərilmədi. Bir az sonra yenidən cəhd edin.' })
		}
	}

	return (
		<div>
			<div className="wrap-map-v5">
				{isPending ? (
					<div className="row-height" style={{ width: '100%', minHeight: 570, background: '#ececec' }} aria-hidden />
				) : (
					<iframe
						id="map-1"
						className="row-height"
						title="Xəritə"
						src={mapSrc}
						height={570}
						style={{ border: 0, width: '100%' }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				)}
				<div className="grid-contact">
					<div className="contact-item wow fadeInUp">
						<div className="icon">
							<i className="flaticon-location-pin" />
						</div>
						<div className="content">
							<h4>Ünvanımız</h4>
							<p style={{ whiteSpace: 'pre-line' }}>{addressText}</p>
						</div>
						<div className="bot">
							<a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-content">
								Xəritədə aç
							</a>
						</div>
					</div>
					<div className="contact-item wow fadeInUp" data-wow-delay="0.1s">
						<div className="icon">
							<i className="flaticon-phone" />
						</div>
						<div className="content">
							<h4>Əlaqə</h4>
							<p>{phoneText}</p>
						</div>
						<div className="bot">
							<a href={`tel:${phoneText.replace(/\s/g, '')}`} className="text-content">
								Zəng et
							</a>
						</div>
					</div>
					<div className="contact-item wow fadeInUp" data-wow-delay="0.2s">
						<div className="icon">
							<i className="flaticon-video-chat" />
						</div>
						<div className="content">
							<h4>E-poçt</h4>
							<p>{emailText}</p>
						</div>
						<div className="bot">
							<a href={`mailto:${emailText}`} className="text-content">
								Məktub yaz
							</a>
						</div>
					</div>
				</div>
			</div>
			<section className="tf-section send-message">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Bizə yazın</h2>
								<div className="text wow fadeInUp">Mesajınızı buradan göndərin.</div>
							</div>
						</div>
					</div>
					<div className="row justify-center">
						<div className="col-xxl-8">
							<form className="form-send-message" onSubmit={onSubmitMessage}>
								<div className="cols">
									<fieldset className="name wow fadeInUp has-top-title">
										<input id="contact-name" type="text" placeholder="Ad" name="name" tabIndex={2} aria-required="true" required />
										<label htmlFor="contact-name">Ad</label>
									</fieldset>
									<fieldset className="phone wow fadeInUp has-top-title">
										<input id="contact-phone" type="tel" placeholder="Telefon" name="phone" tabIndex={2} aria-required="true" required />
										<label htmlFor="contact-phone">Telefon</label>
									</fieldset>
								</div>
								<fieldset className="email wow fadeInUp has-top-title">
									<input id="contact-email" type="email" placeholder="E-poçt" name="email" tabIndex={2} aria-required="true" required />
									<label htmlFor="contact-email">E-poçt</label>
								</fieldset>
								<fieldset className="message wow fadeInUp has-top-title">
									<textarea id="contact-note" name="note" rows={4} placeholder="Mesajınız" tabIndex={2} aria-required="true" required defaultValue="" />
									<label htmlFor="contact-note">Mesajınız</label>
								</fieldset>
								<div className="checkbox-item wow fadeInUp">
									<label>
										<p>Məlumatımın saxlanmasına razıyam</p>
										<input type="checkbox" name="consent" required />
										<span className="btn-checkbox" />
									</label>
								</div>
								{formMsg && (
									<p
										className="wow fadeInUp"
										style={{
											marginBottom: 12,
											color: formMsg.type === 'ok' ? '#198754' : '#c62828',
										}}
									>
										{formMsg.text}
									</p>
								)}
								<div className="button-submit wow fadeInUp">
									<button className="tf-button-primary w-full" type="submit" disabled={contactMutation.isPending}>
										{contactMutation.isPending ? 'Göndərilir…' : 'Göndər'}
										<i className="icon-arrow-right-add" />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<section className="tf-section flat-partner style-1 pt-0">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<div className="text wow fadeInUp">Thousands of world’s leading companies trust Space</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="flat-brand">
								<div className="swiper-container slider-brand">
									<SliderBrand />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
