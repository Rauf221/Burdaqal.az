
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ShopList() {

	return (
		<>

			<Layout>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Shop List</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Shop List</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="shop-list-wrap">
					<div className="themesflat-container">
						<div className="row">
							<div className="col-12">
								<div className="top">
									<div className="sub">
										<p className="wow fadeInUp">9,998 results</p>
										<div className="sort-wrap wow fadeInUp">
											<p>Sort by</p>
											<select className="nice-select default" tabIndex={0}>


												<option data-value className="option selected">Newest</option>
												<option data-value="For Ren" className="option">Oldest</option>
												<option data-value="Sold" className="option">3 days</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp">
									<div className="image">
										<img src="/images/shop/shop-1.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Coffee Thermos</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/shop/shop-2.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Ninght Table</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.2s">
									<div className="image">
										<img src="/images/shop/shop-3.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Green Sofa</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.3s">
									<div className="image">
										<img src="/images/shop/shop-4.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Coffe Table</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp">
									<div className="image">
										<img src="/images/shop/shop-5.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Sugar Bowl</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/shop/shop-6.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Water Jug</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.2s">
									<div className="image">
										<img src="/images/shop/shop-7.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Hanging Light</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.3s">
									<div className="image">
										<img src="/images/shop/shop-8.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Glass Vase</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp">
									<div className="image">
										<img src="/images/shop/shop-9.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Wooden Chair</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.1s">
									<div className="image">
										<img src="/images/shop/shop-10.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Gray Vase</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.2s">
									<div className="image">
										<img src="/images/shop/shop-11.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Coffee Thermos</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="shop-item wow fadeInUp" data-wow-delay="0.3s">
									<div className="image">
										<img src="/images/shop/shop-12.png" alt="" />
										<Link href="/shop-single" className="tf-button-primary style-bg-white">Add To Cart<i className="icon-arrow-right-add" /></Link>
									</div>
									<div className="title">
										<Link href="/shop-single">Kids’ Chair</Link>
									</div>
									<div className="price">$815,000</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<ul className="wg-pagination justify-center wow fadeInUp">
									<li>
										<Link href="/#"><i className="icon-keyboard_arrow_left" /></Link>
									</li>
									<li>
										<Link href="/#">1</Link>
									</li>
									<li className="active">
										<Link href="/#">2</Link>
									</li>
									<li>
										<Link href="/#">3</Link>
									</li>
									<li>
										<Link href="/#">4</Link>
									</li>
									<li>
										<Link href="/#">...</Link>
									</li>
									<li>
										<Link href="/#">20</Link>
									</li>
									<li>
										<Link href="/#"><i className="icon-keyboard_arrow_right" /></Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</Layout >
		</>
	)
}