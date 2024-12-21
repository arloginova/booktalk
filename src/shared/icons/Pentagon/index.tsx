import { FC } from 'react'
import { TIcon } from '@/shared/types'

interface Props extends TIcon {}
const Pentagon: FC<Props> = ({ color, className }) => {
	return (
		<svg
			className={className}
			width='136'
			height='151'
			viewBox='0 0 136 151'
			fill='none'
		>
			<path
				d='M-3.4218e-06 75.5L51.9474 -2.19001e-06L136 28.8384L136 122.162L51.9474 151L-3.4218e-06 75.5Z'
				fill={color}
			/>
		</svg>
	)
}

export { Pentagon }
