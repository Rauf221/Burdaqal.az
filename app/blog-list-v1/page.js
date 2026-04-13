
import Layout from "@/components/layout/Layout"
import { BLOG_LIST_POSTS, blogPostPath } from "@/utils/blogRoutes"
import Link from "next/link"

function Pagination() {
	return (
		<div className="col-12">
			<ul className="wg-pagination justify-center">
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
	)
}

function BlogGrid({ variant }) {
	return (
		<div className="themesflat-container">
			<div className="row">
				{BLOG_LIST_POSTS.map((post, index) => {
					const delayClass = variant === 'delays' ? (index % 4) * 0.1 : null
					const baseCls = 'wg-blog'
					const wowCls = variant === 'plain' ? baseCls : `${baseCls} wow fadeInUp`
					return (
						<div key={`${post.slug}-${variant}-${index}`} className="col-xl-3 col-md-6 col-12">
							<div
								className={wowCls}
								{...(delayClass ? { 'data-wow-delay': `${delayClass}s` } : {})}
							>
								<div className="image">
									<img src={`/images/blog/${post.image}`} alt="" />
								</div>
								<div className="content">
									<div className="sub-blog">
										<div>Tips &amp; Tricks</div>
										<div>April 26, 2024</div>
									</div>
									<div className="name">
										<Link href={blogPostPath(post.slug)}>{post.title}</Link>
									</div>
									<Link href={blogPostPath(post.slug)} className="tf-button-no-bg">
										Read More
										<i className="icon-arrow-right-add" />
									</Link>
								</div>
							</div>
						</div>
					)
				})}
				<Pagination />
			</div>
		</div>
	)
}

export default function BlogListV1() {

	return (
		<>

			<Layout>
				<div className="flat-title">
					<div className="themesflat-container full">
						<div className="row">
							<div className="col-12">
								<div className="content">
									<h2>Blog</h2>
									<ul className="breadcrumbs">
										<li><Link href="/">Home</Link></li><li>/</li><li>Blog</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="widget-tabs style-1">
					<ul className="widget-menu-tab wow fadeInUp">
						<li className="item-title">
							<span className="inner">Trends</span>
						</li>
						<li className="item-title active">
							<span className="inner">Buying</span>
						</li>
						<li className="item-title">
							<span className="inner">Selling</span>
						</li>
						<li className="item-title">
							<span className="inner">Finance</span>
						</li>
					</ul>
					<div className="widget-content-tab">
						<div className="widget-content-inner">
							<BlogGrid variant="plain" />
						</div>
						<div className="widget-content-inner active">
							<BlogGrid variant="delays" />
						</div>
						<div className="widget-content-inner">
							<BlogGrid variant="plain" />
						</div>
						<div className="widget-content-inner">
							<BlogGrid variant="plain" />
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}
