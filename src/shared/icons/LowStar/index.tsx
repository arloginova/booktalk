import { FC } from 'react'
import { TIcon } from '@/shared/types'

interface Props extends TIcon {}
const LowStar: FC<Props> = ({ color, className }) => {
	return (
		<svg
			width='172'
			height='173'
			viewBox='0 0 172 173'
			fill='none'
			className={className}
		>
			<path
				d='M55.7551 0.778572L91.6786 21.524L131.696 10.5951L137.875 51.6157L171.37 76.0889L143.151 106.495L144.901 147.942L103.534 144.837L72.2213 172.047L48.8565 137.769L8.05979 130.253L20.2914 90.614L0.731643 54.0314L39.349 38.8799L55.7551 0.778572Z'
				fill={color}
			/>
		</svg>
	)
}

export { LowStar }
