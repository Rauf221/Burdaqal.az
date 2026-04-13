'use client'
import { blogPostPath } from "@/utils/blogRoutes"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
const sliderNews = {
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}

export default function SliderNews({ expert }) {

	return (
		<>
			<Swiper {...sliderNews}>
				{!expert ? <>
					<SwiperSlide>
						<div className="wg-blog wow fadeInUp">
							<div className="image">
								<img src="/images/blog/blog-grid-1.jpg" alt="" />
							</div>
							<div className="content has-border">
								<div className="sub-blog">
									<div>Tips &amp; Tricks</div>
									<div>April 26, 2024</div>
								</div>
															<div className="name">
									<Link href={blogPostPath('chip-joanna-gaines-fixer-upper-open-visitors')}>Chip and Joanna Gaines’ Latest
										Fixer-Upper Is Open for Visitors</Link>
								</div>
								<Link href={blogPostPath('chip-joanna-gaines-fixer-upper-open-visitors')} className="tf-button-no-bg">
									Read More
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="wg-blog wow fadeInUp" data-wow-delay="0.1s">
							<div className="image">
								<img src="/images/blog/blog-grid-2.jpg" alt="" />
							</div>
							<div className="content has-border">
								<div className="sub-blog">
									<div>Tips &amp; Tricks</div>
									<div>April 26, 2024</div>
								</div>
								<div className="name">
									<Link href={blogPostPath('homebuyers-thankful-to-hear-these')}>Homebuyers Will Be So Thankful To
										Hear These </Link>
								</div>
								<Link href={blogPostPath('homebuyers-thankful-to-hear-these')} className="tf-button-no-bg">
									Read More
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="wg-blog wow fadeInUp" data-wow-delay="0.2s">
							<div className="image">
								<img src="/images/blog/blog-grid-3.jpg" alt="" />
							</div>
							<div className="content has-border">
								<div className="sub-blog">
									<div>Tips &amp; Tricks</div>
									<div>April 26, 2024</div>
								</div>
								<div className="name">
									<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')}>That’s Life! Frank Sinatra’s Former
										Los Angeles-Area </Link>
								</div>
								<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')} className="tf-button-no-bg">
									Read More
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="wg-blog wow fadeInUp" data-wow-delay="0.3s">
							<div className="image">
								<img src="/images/blog/blog-grid-4.jpg" alt="" />
							</div>
							<div className="content has-border">
								<div className="sub-blog">
									<div>Tips &amp; Tricks</div>
									<div>April 26, 2024</div>
								</div>
								<div className="name">
									<Link href={blogPostPath('affordability-crisis-tiny-living')}>Affordability crisis buyers and
										renters turn to tiny living</Link>
								</div>
								<Link href={blogPostPath('affordability-crisis-tiny-living')} className="tf-button-no-bg">
									Read More
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="wg-blog">
							<div className="image">
								<img src="/images/blog/blog-grid-3.jpg" alt="" />
							</div>
							<div className="content has-border">
								<div className="sub-blog">
									<div>Tips &amp; Tricks</div>
									<div>April 26, 2024</div>
								</div>
								<div className="name">
									<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')}>That’s Life! Frank Sinatra’s Former
										Los Angeles-Area </Link>
								</div>
								<Link href={blogPostPath('frank-sinatra-former-los-angeles-area')} className="tf-button-no-bg">
									Read More
									<i className="icon-arrow-right-add" />
								</Link>
							</div>
						</div>
					</SwiperSlide>
				</> : <>
					<SwiperSlide>
						<div className="experts-item wow fadeInUp">
							<div className="image">
								<img src="/images/image-box/experts-1.jpg" alt="" />
								<ul className="wg-social-1">
									<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
									<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
									<li><Link href="/#"><i className="flaticon-instagram" /></Link></li>
									<li><Link href="/#"><i className="flaticon-linkedin" /></Link></li>
								</ul>
							</div>
							<h4><Link href="/#">Eleanor Pena</Link></h4>
							<p>Medical Assistant</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="experts-item wow fadeInUp" data-wow-delay="0.1s">
							<div className="image">
								<img src="/images/image-box/experts-2.jpg" alt="" />
								<ul className="wg-social-1">
									<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
									<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
									<li><Link href="/#"><i className="flaticon-instagram" /></Link></li>
									<li><Link href="/#"><i className="flaticon-linkedin" /></Link></li>
								</ul>
							</div>
							<h4><Link href="/#">Leslie Alexander</Link></h4>
							<p>Marketing Coordinator</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="experts-item wow fadeInUp" data-wow-delay="0.2s">
							<div className="image">
								<img src="/images/image-box/experts-3.jpg" alt="" />
								<ul className="wg-social-1">
									<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
									<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
									<li><Link href="/#"><i className="flaticon-instagram" /></Link></li>
									<li><Link href="/#"><i className="flaticon-linkedin" /></Link></li>
								</ul>
							</div>
							<h4><Link href="/#">Wade Warren</Link></h4>
							<p>President of Sales</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="experts-item wow fadeInUp" data-wow-delay="0.3s">
							<div className="image">
								<img src="/images/image-box/experts-4.jpg" alt="" />
								<ul className="wg-social-1">
									<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
									<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
									<li><Link href="/#"><i className="flaticon-instagram" /></Link></li>
									<li><Link href="/#"><i className="flaticon-linkedin" /></Link></li>
								</ul>
							</div>
							<h4><Link href="/#">Kathryn Murphy</Link></h4>
							<p>Web Designer</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="experts-item">
							<div className="image">
								<img src="/images/image-box/experts-1.jpg" alt="" />
								<ul className="wg-social-1">
									<li><Link href="/#"><i className="flaticon-facebook" /></Link></li>
									<li><Link href="/#"><i className="flaticon-twitter" /></Link></li>
									<li><Link href="/#"><i className="flaticon-instagram" /></Link></li>
									<li><Link href="/#"><i className="flaticon-linkedin" /></Link></li>
								</ul>
							</div>
							<h4><Link href="/#">Eleanor Pena</Link></h4>
							<p>Medical Assistant</p>
						</div>
					</SwiperSlide></>}


			</Swiper>
		</>
	)
}
