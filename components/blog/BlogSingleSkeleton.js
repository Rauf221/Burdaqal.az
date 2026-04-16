import { BlogGridSkeleton } from '@/components/blog/BlogListSkeleton'
import listStyles from '@/components/blog/BlogListSkeleton.module.css'
import styles from './BlogSingleSkeleton.module.css'

export default function BlogSingleSkeleton() {
	return (
		<div className="blog-single-wrap" aria-busy="true">
			<span className={listStyles.visuallyHidden}>Yüklənir</span>
			<div className="image-head">
				<div className={`${listStyles.shimmer} ${styles.hero}`} aria-hidden />
			</div>
			<div className="themesflat-container">
				<div className="row justify-center">
					<div className="col-xl-8 col-12">
						<div className="blog-single-inner">
							<div className={styles.breadcrumbSkel} aria-hidden>
								<div className={`${listStyles.shimmer} ${styles.crumb}`} />
								<div className={`${listStyles.shimmer} ${styles.crumb}`} style={{ width: 28 }} />
								<div className={`${listStyles.shimmer} ${styles.crumb}`} style={{ width: 40 }} />
								<div className={`${listStyles.shimmer} ${styles.crumb}`} style={{ width: 120 }} />
							</div>
							<div aria-hidden>
								<div className={`${listStyles.shimmer} ${styles.titleLineLg}`} />
								<div className={`${listStyles.shimmer} ${styles.titleLineMd}`} />
								<div className={styles.subRow}>
									<div className={`${listStyles.shimmer} ${styles.subPill}`} />
									<div className={`${listStyles.shimmer} ${styles.subPill}`} style={{ width: 64 }} />
								</div>
							</div>
							<div className={styles.bodyBlock} aria-hidden>
								<div className={`${listStyles.shimmer} ${styles.bodyLine}`} />
								<div className={`${listStyles.shimmer} ${styles.bodyLine} ${styles.bodyLine90}`} />
								<div className={`${listStyles.shimmer} ${styles.bodyLine} ${styles.bodyLine80}`} />
								<div className={`${listStyles.shimmer} ${styles.bodyLine}`} />
								<div className={`${listStyles.shimmer} ${styles.bodyLine} ${styles.bodyLine60}`} />
							</div>
							<div className={styles.tagsRow} aria-hidden>
								<div className={`${listStyles.shimmer} ${styles.tagPill}`} />
								<div className={`${listStyles.shimmer} ${styles.tagPill}`} style={{ width: 88 }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`wg-related-posts ${styles.relatedSection}`}>
				<div className="themesflat-container">
					<div className="row">
						<div className="col-12">
							<div className={`heading-section text-center ${styles.relatedHeading}`}>
								<div className={`${listStyles.shimmer} ${styles.headingLine}`} aria-hidden />
								<div className={`${listStyles.shimmer} ${styles.subheadingLine}`} aria-hidden />
							</div>
						</div>
					</div>
					<div className="row">
						<BlogGridSkeleton count={4} withScreenReaderHint={false} />
					</div>
				</div>
			</div>
		</div>
	)
}
