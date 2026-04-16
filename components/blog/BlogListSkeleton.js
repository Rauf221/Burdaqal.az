import styles from './BlogListSkeleton.module.css'

const FILTER_PILL_WIDTHS = [72, 96, 84, 110, 78]

export function BlogFilterSkeletonRow() {
	return (
		<div className={styles.filterRow} aria-hidden>
			{FILTER_PILL_WIDTHS.map((w, i) => (
				<div
					key={i}
					className={`${styles.shimmer} ${styles.filterPill}`}
					style={{ width: w }}
				/>
			))}
		</div>
	)
}

export function BlogFilterSkeleton() {
	return (
		<div className="widget-tabs style-1">
			<div className="themesflat-container mb-30">
				<BlogFilterSkeletonRow />
			</div>
		</div>
	)
}

export function BlogGridSkeleton({ count = 8, withScreenReaderHint = true }) {
	return (
		<>
			{withScreenReaderHint ? (
				<span className={styles.visuallyHidden}>Yüklənir</span>
			) : null}
			{Array.from({ length: count }, (_, i) => (
				<div key={i} className="col-xl-3 col-md-6 col-12">
					<div className={styles.card}>
						<div className={`${styles.shimmer} ${styles.cardImage}`} aria-hidden />
						<div className={styles.cardBody}>
							<div className={styles.metaRow} aria-hidden>
								<div className={`${styles.shimmer} ${styles.metaLine}`} />
								<div className={`${styles.shimmer} ${styles.metaLine} ${styles.metaLineWide}`} />
							</div>
							<div className={`${styles.shimmer} ${styles.titleLine}`} aria-hidden />
							<div className={`${styles.shimmer} ${styles.titleLine} ${styles.titleLineShort}`} aria-hidden />
							<div className={`${styles.shimmer} ${styles.ctaLine}`} aria-hidden />
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export function BlogListPageSkeleton() {
	return (
		<>
			<div className="flat-title">
				<div className="themesflat-container full">
					<div className="row">
						<div className="col-12">
							<div className="content">
								<div className={`${styles.shimmer} ${styles.titleBlock}`} aria-hidden />
								<div className={styles.breadcrumbRow} aria-hidden>
									<div className={`${styles.shimmer} ${styles.crumb}`} />
									<div className={`${styles.shimmer} ${styles.crumb}`} style={{ width: 36 }} />
									<div className={`${styles.shimmer} ${styles.crumb}`} style={{ width: 44 }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="blog-list-api-wrap px-20">
				<BlogFilterSkeleton />
				<div className="themesflat-container">
					<div className="row">
						<BlogGridSkeleton />
					</div>
				</div>
			</div>
		</>
	)
}
