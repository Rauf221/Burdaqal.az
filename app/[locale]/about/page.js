'use client'

import SliderNews from '@/components/slider/SliderNews'
import AboutUsSection from '../../../components/sections/AboutUsSection'
import AboutVisionMissionSection from '../../../components/sections/AboutVisionMissionSection'
import AboutFaqSection from '../../../components/sections/AboutFaqSection'
import Layout from '../../../components/layout/Layout'

export default function About() {
	return (
		<>
			<Layout breadcrumbTitle="title" mainContentCls="px-20 default">
				<div>
					{/* vision-mission */}
					<AboutVisionMissionSection />

					{/* luxury-home */}
					<AboutUsSection />

					{/* flat-experts */}
					<section className=" flat-experts style-1">
						<div className="themesflat-container">
							<div className="row">
								<div className="col-12">
									<div className="heading-section text-center">
										<h2 className="wow fadeInUp">Meet Our Team Of Experts</h2>
										<div className="text wow fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
									</div>
								</div>
							</div>
							<div className="row wrap-experts">
								<div className="col-12">
									<div className="swiper-container slider-news slider-auto">
										<SliderNews expert />
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* faq */}
					<AboutFaqSection />
				</div>
			</Layout>
		</>
	)
}
