
'use client'
import { useState } from 'react'
export default function FlatQuestion() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>

			<section className="tf-section flat-question">
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section text-center">
								<h2 className="wow fadeInUp">Hove More Question?</h2>
								<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing
									elit.</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="flat-accordion">
								<div className={`flat-toggle ${isAccordion == 1 ? "active" : ""}`}>
									<h4 className={`toggle-title ${isAccordion == 1 ? "active" : ""}`} onClick={() => handleAccordion(1)}>What methods of payments are supported?</h4>
									<div className="toggle-content" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
										<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
											hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
											volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
									</div>
								</div>
								<div className={`flat-toggle ${isAccordion == 2 ? "active" : ""}`}>
									<h4 className={`toggle-title ${isAccordion == 2 ? "active" : ""}`} onClick={() => handleAccordion(2)}>Can I cancel at anytime?</h4>
									<div className="toggle-content" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
										<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
											hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
											volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
									</div>
								</div>
								<div className={`flat-toggle ${isAccordion == 3 ? "active" : ""}`}>
									<h4 className={`toggle-title ${isAccordion == 3 ? "active" : ""}`} onClick={() => handleAccordion(3)}>How do I get a receipt for my purchase?
									</h4>
									<div className="toggle-content" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
										<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
											hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
											volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
									</div>
								</div>
								<div className={`flat-toggle ${isAccordion == 4 ? "active" : ""}`}>
									<h4 className={`toggle-title ${isAccordion == 4 ? "active" : ""}`} onClick={() => handleAccordion(4)}>Which license do I need?</h4>
									<div className="toggle-content" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
										<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
											hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
											volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
									</div>
								</div>
								<div className={`flat-toggle ${isAccordion == 5 ? "active" : ""}`}>
									<h4 className={`toggle-title ${isAccordion == 5 ? "active" : ""}`} onClick={() => handleAccordion(5)}>How do I get access to a theme I
										purchased?</h4>
									<div className="toggle-content" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
										<p>Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
											hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
											volutpat nec sit vel donec. Sagittis, id volutpat erat vel. </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
