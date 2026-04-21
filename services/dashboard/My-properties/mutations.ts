import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteAnnouncement } from './api'

export function useDeleteAnnouncementMutation(locale?: string) {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (announcementId: number) => deleteAnnouncement(announcementId, locale),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['dashboard', 'my-properties', 'announcements'] })
		},
	})
}
