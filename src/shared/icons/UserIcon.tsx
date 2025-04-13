import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends TIcon {}

const UserIcon: FC<Props> = ({ className, fill }) => {
	return (
		<svg
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			color={fill || '#EEEDF2'}
			className={className}
		>
			<g clipPath='url(#clip0_4008_11100)'>
				<path
					d='M20.0007 0.952148C9.48074 0.952148 0.953125 9.47977 0.953125 19.9998C0.953125 30.5198 9.48074 39.0474 20.0007 39.0474C30.5207 39.0474 39.0484 30.5198 39.0484 19.9998C39.0484 9.47977 30.5207 0.952148 20.0007 0.952148Z'
					fill='white'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M5.1875 29.1707C5.1875 29.1707 9.45974 23.9667 20.0014 23.9667C30.543 23.9667 34.8171 29.1707 34.8171 29.1707M20.0014 17.5669C21.5263 17.5669 22.9889 16.9889 24.0672 15.9602C25.1456 14.9314 25.7513 13.5361 25.7513 12.0812C25.7513 10.6264 25.1456 9.23113 24.0672 8.20239C22.9889 7.17365 21.5263 6.5957 20.0014 6.5957C18.4763 6.5957 17.0139 7.17365 15.9355 8.20239C14.8572 9.23113 14.2514 10.6264 14.2514 12.0812C14.2514 13.5361 14.8572 14.9314 15.9355 15.9602C17.0139 16.9889 18.4763 17.5669 20.0014 17.5669Z'
					fill='currentColor'
				/>
				<path
					d='M5.1875 29.1707C5.1875 29.1707 9.45974 23.9667 20.0014 23.9667C30.543 23.9667 34.8171 29.1707 34.8171 29.1707M20.0014 17.5669C21.5263 17.5669 22.9889 16.9889 24.0672 15.9602C25.1456 14.9314 25.7513 13.5361 25.7513 12.0812C25.7513 10.6264 25.1456 9.23113 24.0672 8.20239C22.9889 7.17365 21.5263 6.5957 20.0014 6.5957C18.4763 6.5957 17.0139 7.17365 15.9355 8.20239C14.8572 9.23113 14.2514 10.6264 14.2514 12.0812C14.2514 13.5361 14.8572 14.9314 15.9355 15.9602C17.0139 16.9889 18.4763 17.5669 20.0014 17.5669Z'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M20.0024 39.0467C28.1844 39.0467 34.8172 35.5723 34.8172 31.2865C34.8172 27.0007 28.1844 23.5264 20.0024 23.5264C11.8203 23.5264 5.1875 27.0007 5.1875 31.2865C5.1875 35.5723 11.8203 39.0467 20.0024 39.0467Z'
					fill='currentColor'
				/>
			</g>
			<defs>
				<clipPath id='clip0_4008_11100'>
					<rect width='40' height='40' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export { UserIcon }
