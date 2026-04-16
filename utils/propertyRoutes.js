/** Base path for Property Grid 02 (listing). Detail pages live under `${PROPERTY_GRID}/[slug]`. */
export const PROPERTY_GRID = '/elanlar'

export function propertyDetailHref(slug) {
	return `${PROPERTY_GRID}/${slug}`
}

/** Demo slug for menu / generic "view property" links (Property Single 05 template). */
export const SAMPLE_PROPERTY_SLUG = 'villa-one-hyde-park'

const TITLE_BY_SLUG = {
	'archer-house': 'Archer House',
	'villa-one-hyde-park': 'Villa One Hyde Park',
	'home-pitt-street': 'Home Pitt Street',
	'relaxing-villa': 'Relaxing Villa',
	'luxury-mansion': 'Luxury Mansion',
	'home-in-merrick-way': 'Home in Merrick Way',
	'villa-in-coral-gables': 'Villa in Coral Gables',
	'modern-house-in-greenville': 'Modern House in Greenville',
	'garden-villa-house': 'Garden Villa House',
	'villa-on-hollywood-boulevard': 'Villa on Hollywood Boulevard',
	'house-on-the-beverly-hills': 'House on the beverly hills',
	'office-space-at-northwest': 'Office Space at Northwest',
	'luxury-condo': 'Luxury Condo',
	'renovated-apartment': 'Renovated Apartment',
}

export const PROPERTY_SLUGS = Object.keys(TITLE_BY_SLUG)

export function getPropertyTitle(slug) {
	if (TITLE_BY_SLUG[slug]) return TITLE_BY_SLUG[slug]
	return slug
		.split('-')
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')
}
