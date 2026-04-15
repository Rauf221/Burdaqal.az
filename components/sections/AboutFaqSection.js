'use client'

import { useState } from 'react'

export default function AboutFaqSection() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion((prevState) => (prevState === key ? null : key))
	}

	return (
		<section id="faq" className="tf-section flat-question style-1">
			<div className="themesflat-container">
				<div className="row">
					<div className="col-12">
						<div className="heading-section text-center">
							<h2 className="wow fadeInUp">Hove More Question?</h2>
							<div className="text wow fadeInUp">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</div>
					<div className="col-12">
						<div className="widget-tabs style-1">
							<ul className="widget-menu-tab wow fadeInUp">
								<li className="item-title">
									<span className="inner">Home Buying</span>
								</li>
								<li className="item-title active">
									<span className="inner">Home Selling</span>
								</li>
								<li className="item-title">
									<span className="inner">Other</span>
								</li>
							</ul>
							<div className="widget-content-tab">
								<div className="widget-content-inner">
									<div className="flat-accordion">
										<div className={`flat-toggle ${isAccordion == 1 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 1 ? 'active' : ''}`}
												onClick={() => handleAccordion(1)}
											>
												What methods of payments are supported?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 1 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 2 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 2 ? 'active' : ''}`}
												onClick={() => handleAccordion(2)}
											>
												Can I cancel at anytime?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 2 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 3 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 3 ? 'active' : ''}`}
												onClick={() => handleAccordion(3)}
											>
												How do I get a receipt for my purchase?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 3 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 4 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 4 ? 'active' : ''}`}
												onClick={() => handleAccordion(4)}
											>
												Which license do I need?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 4 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 5 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 5 ? 'active' : ''}`}
												onClick={() => handleAccordion(5)}
											>
												How do I get access to a theme I purchased?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 5 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="widget-content-inner active">
									<div className="flat-accordion">
										<div className={`flat-toggle ${isAccordion == 6 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 6 ? 'active' : ''}`}
												onClick={() => handleAccordion(6)}
											>
												What methods of payments are supported?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 6 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 7 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 7 ? 'active' : ''}`}
												onClick={() => handleAccordion(7)}
											>
												Can I cancel at anytime?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 7 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 8 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 8 ? 'active' : ''}`}
												onClick={() => handleAccordion(8)}
											>
												How do I get a receipt for my purchase?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 8 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 9 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 9 ? 'active' : ''}`}
												onClick={() => handleAccordion(9)}
											>
												Which license do I need?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 9 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 10 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 10 ? 'active' : ''}`}
												onClick={() => handleAccordion(10)}
											>
												How do I get access to a theme I purchased?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 10 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="widget-content-inner">
									<div className="flat-accordion">
										<div className={`flat-toggle ${isAccordion == 11 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 11 ? 'active' : ''}`}
												onClick={() => handleAccordion(11)}
											>
												What methods of payments are supported?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 11 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 12 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 12 ? 'active' : ''}`}
												onClick={() => handleAccordion(12)}
											>
												Can I cancel at anytime?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 12 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 13 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 13 ? 'active' : ''}`}
												onClick={() => handleAccordion(13)}
											>
												How do I get a receipt for my purchase?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 13 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 14 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 14 ? 'active' : ''}`}
												onClick={() => handleAccordion(14)}
											>
												Which license do I need?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 14 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
										<div className={`flat-toggle ${isAccordion == 15 ? 'active' : ''}`}>
											<h4
												className={`toggle-title ${isAccordion == 15 ? 'active' : ''}`}
												onClick={() => handleAccordion(15)}
											>
												How do I get access to a theme I purchased?
											</h4>
											<div
												className="toggle-content"
												style={{ display: `${isAccordion == 15 ? 'block' : 'none'}` }}
											>
												<p>
													Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies
													hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque
													volutpat nec sit vel donec. Sagittis, id volutpat erat vel.{' '}
												</p>
											</div>
										</div>
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
