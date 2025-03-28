import { SwiperOptions } from 'swiper/types'

const sliderConfig: () => SwiperOptions = () => ({
	slidesPerView: 'auto',
	spaceBetween: 16,
	loop: true,
	observer: true,
	observeSlideChildren: true,
	speed: 400,
	autoplay: {
		delay: 4000,
	},
})

export { sliderConfig }
