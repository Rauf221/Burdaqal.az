import { queryOptions } from '@tanstack/react-query'
import { getSlider } from './api'

const getSliderQuery = (locale?: string, page?: number) => {
	return queryOptions({
		queryKey: ['slider', locale ?? 'default', page ?? 1],
		queryFn: () => getSlider(locale, page),
		staleTime: 2 * 60 * 1000,
	})
}

export { getSliderQuery }
