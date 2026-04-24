'use client'

import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import {
	categoriesListQuery,
	regionsListQuery,
} from '@/services/dashboard/Add-New-Properties/queries'

export default function ElanlarFilterForm() {
	const locale = useLocale()
	const router = useRouter()
	const searchParams = useSearchParams()
	const categoriesQ = useQuery(categoriesListQuery(locale))
	const regionsQ = useQuery(regionsListQuery(locale))

	const searchParamsKey = searchParams.toString()
	const initialFilters = useMemo(() => {
		const params = new URLSearchParams(searchParamsKey)
		return {
			search: String(params.get('search') ?? ''),
			region_id: String(params.get('region_id') ?? ''),
			category_id: String(params.get('category_id') ?? ''),
		}
	}, [searchParamsKey])

	const [filters, setFilters] = useState(initialFilters)

	useEffect(() => {
		setFilters((prev) => {
			if (
				prev.search === initialFilters.search &&
				prev.region_id === initialFilters.region_id &&
				prev.category_id === initialFilters.category_id
			) {
				return prev
			}
			return initialFilters
		})
	}, [initialFilters])

	const categories = categoriesQ.data?.data ?? []
	const regions = regionsQ.data?.data ?? []

	const onSubmit = (event) => {
		event.preventDefault()
		const query = {}
		const search = filters.search.trim()
		if (search) query.search = search
		if (filters.category_id) query.category_id = filters.category_id
		if (filters.region_id) query.region_id = filters.region_id
		router.push({ pathname: '/elanlar', query })
	}

	return (
		<div className="form-filter wow fadeInUp">
			<form className="form-search-home5" onSubmit={onSubmit}>
				<div className="list">
					<div className="group-form form-search-content">
						<div className="form-style-has-title">
							<div className="title">Axtar</div>
							<div className="relative">
								<fieldset className="name">
									<input
										type="text"
										placeholder="Axtar..."
										className="show-search style-default"
										name="search"
										value={filters.search}
										onChange={(e) =>
											setFilters((prev) => ({ ...prev, search: e.target.value }))
										}
										tabIndex={2}
									/>
								</fieldset>
								<div className="style-absolute-right">
									<div className="style-icon-default">
										<i className="flaticon-magnifiying-glass" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="divider-1" />
					<div className="group-form">
						<div className="form-style-has-title">
							<div className="title">Rayon</div>
							<select
								className="nice-select"
								tabIndex={0}
								name="region_id"
								value={filters.region_id}
								onChange={(e) =>
									setFilters((prev) => ({ ...prev, region_id: e.target.value }))
								}
							>
								<option value="">Hamısı</option>
								{regions.map((region) => (
									<option key={region.id} value={String(region.id)}>
										{region.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="divider-1" />
					<div className="group-form">
						<div className="form-style-has-title">
							<div className="title">Kategoriya</div>
							<select
								className="nice-select"
								tabIndex={0}
								name="category_id"
								value={filters.category_id}
								onChange={(e) =>
									setFilters((prev) => ({ ...prev, category_id: e.target.value }))
								}
							>
								<option value="">Hamısı</option>
								{categories.map((category) => (
									<option key={category.id} value={String(category.id)}>
										{category.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="flex gap10">
					<div className="group-form">
						<div className="button-submit">
							<button type="submit">Axtar</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
