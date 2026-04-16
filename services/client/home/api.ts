import { get } from '@/lib/api'
import type { SliderListResponse } from '@/types'

const getSlider = async (locale?: string, page?: number) => {
	return get<SliderListResponse>('/slider', {
		locale,
		params: page != null ? { page } : undefined,
	})
}

export { getSlider }
