import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends Omit<TIcon, 'secondColor'> {}

const ShareIcon: FC<Props> = ({ className, fill }) => {
	return (
		<svg
			width='14'
			height='16'
			viewBox='0 0 14 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			color={fill || 'black'}
		>
			<path
				d='M1 8V13.6C1 13.9713 1.15804 14.3274 1.43934 14.5899C1.72064 14.8525 2.10218 15 2.5 15H11.5C11.8978 15 12.2794 14.8525 12.5607 14.5899C12.842 14.3274 13 13.9713 13 13.6V8M10 3.8L7 1M7 1L4 3.8M7 1V10.1'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export { ShareIcon }
