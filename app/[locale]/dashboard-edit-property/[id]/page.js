import DashboardAddPropertiesClient from '@/components/dashboard/DashboardAddPropertiesClient'
import { notFound } from 'next/navigation'

function parseAnnouncementId(value) {
	const n = Number(value)
	if (!Number.isFinite(n) || n <= 0) return null
	return Math.trunc(n)
}


export default async function DashboardEditPropertyPage({ params }) {
	const { id } = await params
	const announcementId = parseAnnouncementId(id)
	if (announcementId == null) {
		notFound()
	}
	return (
		<DashboardAddPropertiesClient
			initialAnnouncementId={announcementId}
			breadcrumbTitle="Edit Property"
		/>
	)
}
