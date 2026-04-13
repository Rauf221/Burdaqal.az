import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
export const sliderBoxDream = {
	modules: [Navigation, Pagination],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".box-dream-next",
		prevEl: ".box-dream-prev",
		clickable: true,
	},
	pagination: {
		el: ".box-dream-pagination",
		clickable: true,
	},
}

export const sliderHouseFull = {
	modules: [Navigation],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".house-full-next",
		prevEl: ".house-full-prev",
		clickable: true,
	},
} 

export const sliderHome7 = {
	modules: [Navigation, EffectFade],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: ".home7-next",
		prevEl: ".home7-prev",
		clickable: true,
	},
}

export const sliderPropertySingle6 = {
	modules: [Navigation, EffectFade],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: ".property-single-6-next",
		prevEl: ".property-single-6-prev",
		clickable: true,
	},
}

export const sliderTestimonials = {
	modules: [Navigation, Pagination],
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".testimonials-next",
		prevEl: ".testimonials-prev",
		clickable: true,
	},
	pagination: {
		el: ".testimonials-pagination",
		clickable: true,
		renderBullet: (index, className) => {
			return `<span class="${className}">${index + 1}</span>`
		},
	},
}

export const sliderTestimonials1 = {
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}

export const sliderBrand = {
	modules: [Autoplay],
	spaceBetween: 30,
	slidesPerView: 2,
	observer: true,
	observeParents: true,
	loop: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	speed: 10000,
	breakpoints: {
		450: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		868: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 171,
		},
	},
}

export const sliderFeatured = {
	modules: [Navigation, Pagination],
	spaceBetween: 28,
	slidesPerView: 'auto',
	observer: true,
	observeParents: true,
	pagination: {
		el: ".featured-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".featured-next",
		prevEl: ".featured-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 'auto',
		},
	},
}

export const sliderThumbs = {
	main: {
		spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			450: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			868: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
		},
	},
	secondary: {
		spaceBetween: 0,
		navigation: {
			nextEl: ".thumbs-next",
			prevEl: ".thumbs-prev",
		},
	},
}

export const sliderThumbsColumn = {
	main: {
		spaceBetween: 10,
		slidesPerView: 2,
		freeMode: true,
		direction: "vertical",
		watchSlidesProgress: true,
		breakpoints: {
			0: {
				slidesPerView: 2,
				direction: "horizontal",
			},
			450: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			768: {
				slidesPerView: 5,
			},
		},
	},
	secondary: {
		spaceBetween: 0,
		navigation: {
			nextEl: ".thumbs-next",
			prevEl: ".thumbs-prev",
		},
	},
}

export const sliderThumbsSecond = {
	main: {
		spaceBetween: 0,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
	},
	secondary: {
		spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: ".thumbs-gallery-pagination",
			clickable: true,
			renderBullet: (index, className) => {
				return `<span class="${className}">${index + 1}</span>`
			},
		},
		navigation: {
			nextEl: ".thumbs-gallery-next",
			prevEl: ".thumbs-gallery-prev",
		},
	},
}

export const slider3Center = {
	spaceBetween: 10,
	slidesPerView: 2.07,
	loop: true,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1.07,
		},
		767: {
			slidesPerView: 2.07,
		},
	},
}

export const slider4Center = {
	spaceBetween: 28,
	loop: true,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 2,
		},
	},
}

export const sliderHomes = {
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".homes-next",
		prevEl: ".homes-prev",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}

export const sliderNews = {
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}

export const sliderCities = {
	spaceBetween: 25,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".cities-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4,
		},
		1440: {
			slidesPerView: 5,
		},
	},
}

export const sliderDiscover = {
	spaceBetween: 28,
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".discover-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
}

export const sliderCities1 = {
	spaceBetween: 19,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".homes-next",
		prevEl: ".homes-prev",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 5,
		},
	},
}

export const sliderCities2 = {
	spaceBetween: 25,
	slidesPerView: 5,
	observer: true,
	observeParents: true,
	breakpoints: {
		0: {
			slidesPerView: 1.15,
		},
		600: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 4,
		},
		1440: {
			slidesPerView: 5,
		},
	},
}

export const sliderRecentProperties = {
	spaceBetween: 28,
	slidesPerView: 4,
	observer: true,
	observeParents: true,
	pagination: {
		el: ".recent-properties-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 4,
		},
	},
}

export const sliderExclusive = {
	spaceBetween: 0,
	slidesPerView: 1,
	observer: true,
	observeParents: true,
	navigation: {
		nextEl: ".exclusive-next",
		prevEl: ".exclusive-prev",
		clickable: true,
	},
};

