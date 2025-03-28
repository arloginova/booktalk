import { FC } from 'react'
import { TIcon } from '@/shared/types'

interface Props extends TIcon {}
const BigStar: FC<Props> = ({ color, className }) => {
	return (
		<svg
			width='163'
			height='166'
			viewBox='0 0 163 166'
			fill='none'
			className={className}
		>
			<path
				d='M81.5 0L88.95 52.8472L119.375 9.6217L102.143 59.9839L148.573 36.2826L110.607 72.6225L162.406 73.8749L112.403 87.8674L157.704 113.787L107.12 102.226L135.544 146.875L95.9669 112.41L101.004 165.559L81.5 116.085L61.9958 165.559L67.0331 112.41L27.4555 146.875L55.8803 102.226L5.29617 113.787L50.5967 87.8674L0.594223 73.8749L52.3927 72.6225L14.4268 36.2826L60.8568 59.9839L43.6251 9.6217L74.05 52.8472L81.5 0Z'
				fill={color}
			/>
		</svg>
	)
}

export { BigStar }
