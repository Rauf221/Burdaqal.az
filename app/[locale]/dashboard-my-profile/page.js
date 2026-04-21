import LayoutAdmin from '@/components/layout/LayoutAdmin'
import DashboardMyProfileClient from '@/components/dashboard/DashboardMyProfileClient'

export default function DashboardMyProfile() {
	return (
		<LayoutAdmin breadcrumbTitle="My Profiles">
			<DashboardMyProfileClient />
		</LayoutAdmin>
	)
}
