import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends Omit<TIcon, 'secondColor'> {}

const TelegramIcon: FC<Props> = ({ className, fill }) => {
	return (
		<svg
			width='26'
			height='26'
			viewBox='0 0 26 26'
			fill='none'
			color={fill || 'white'}
			className={className}
		>
			<path
				d='M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM18.8 9C18.6125 10.975 17.8 15.775 17.3875 17.9875C17.2125 18.925 16.8625 19.2375 16.5375 19.275C15.8125 19.3375 15.2625 18.8 14.5625 18.3375C13.4625 17.6125 12.8375 17.1625 11.775 16.4625C10.5375 15.65 11.3375 15.2 12.05 14.475C12.2375 14.2875 15.4375 11.375 15.5 11.1125C15.5087 11.0727 15.5075 11.0315 15.4966 10.9923C15.4857 10.953 15.4654 10.9171 15.4375 10.8875C15.3625 10.825 15.2625 10.85 15.175 10.8625C15.0625 10.8875 13.3125 12.05 9.9 14.35C9.4 14.6875 8.95 14.8625 8.55 14.85C8.1 14.8375 7.25 14.6 6.6125 14.3875C5.825 14.1375 5.2125 14 5.2625 13.5625C5.2875 13.3375 5.6 13.1125 6.1875 12.875C9.8375 11.2875 12.2625 10.2375 13.475 9.7375C16.95 8.2875 17.6625 8.0375 18.1375 8.0375C18.2375 8.0375 18.475 8.0625 18.625 8.1875C18.75 8.2875 18.7875 8.425 18.8 8.525C18.7875 8.6 18.8125 8.825 18.8 9Z'
				fill='currentColor'
			/>
		</svg>
	)
}

export { TelegramIcon }
