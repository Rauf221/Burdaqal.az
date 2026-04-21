import { get } from '@/lib/api'
import type { PaginatedListResponse } from '@/services/dashboard/Add-New-Properties/api'

/** Əsas API elan siyahısı — GET /announcements cavabındakı istifadəçi */
export type PublicAnnouncementUser = {
	name: string
	mobile: string
	email: string
	verified: number
	image: string | null
	username: string
}

export type PublicAnnouncementAddress = {
	id: number
	street: string
	map: string | null
	landmark: string | null
	region_id: number
}

export type PublicAnnouncementDetail = {
	id: number
	room: number
	bedroom: number
	bathroom: number
	guest: number
}

export type PublicAnnouncementMedia = {
	id: number
	announcement_id: number
	cover_image: string
	gallery: string[]
	thumb_gallery: string[]
}

export type PublicAnnouncementAttribute = {
	id: number
	name: string
	slug: string
	parent_id: number
	icon: string | null
}

/** GET /announcements — tək element */
export type PublicAnnouncementItem = {
	id: number
	title: string
	description: string
	price: string
	check_in: string
	check_out: string
	slug: string
	address: PublicAnnouncementAddress | null
	detail: PublicAnnouncementDetail | null
	media: PublicAnnouncementMedia | null
	attributes: PublicAnnouncementAttribute[]
	user: PublicAnnouncementUser
	/** Bəzi backend versiyalarında ola bilər */
	status?: number
}

export type PublicAnnouncementsResponse = PaginatedListResponse<PublicAnnouncementItem>

export type GetAnnouncementsOptions = {
	locale?: string
	/** Laravel `?page=` */
	page?: number
}

/**
 * Bütün elanlar (əsas API) — GET …/announcements
 * `NEXT_PUBLIC_API_BASE_URL` üzərindən; Bearer varsa interceptor əlavə edir.
 */
export async function getAnnouncements(
	options?: GetAnnouncementsOptions
): Promise<PublicAnnouncementsResponse> {
	const { locale, page = 1 } = options ?? {}
	return get<PublicAnnouncementsResponse>('/announcements', {
		params: { page },
		...(locale && { locale }),
	})
}

/**
 * cover_image, gallery və s. nisbi yolları tam URL-ə çevirir (storage əsas API domenində).
 */
export function publicStorageUrl(path: string | null | undefined): string | null {
	if (path == null || path === '') return null
	if (path.startsWith('http')) return path
	const base = process.env.NEXT_PUBLIC_API_BASE_URL || ''
	try {
		const u = new URL(base)
		const p = path.startsWith('/') ? path : `/${path}`
		return `${u.origin}${p}`
	} catch {
		return path
	}
}
