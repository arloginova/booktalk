import { FC } from 'react'
import { TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { UiTypography } from '@/shared/ui'
import { StarIcon } from '@/shared/icons'

const wrapperCls = ''
const headCls = 'flex justify-between items-center'
const avatarCls =
	'flex items-center lg-low:gap-x-3 gap-x-2 lg-low:text-lg text-xs'
const avatarImageCls = 'lg-low:size-10 size-7 rounded-full'
const starsCls = 'flex gap-x-1'
const descriptionCls = 'lg-low:text-xl text-sm lg-low:mt-4 mt-3'

type TBookReviewItemData = {
	id: number
	avatar?: string
	name: string
	grate: number
	description: string
}

interface Props extends TClassName, TBookReviewItemData {
	Tag?: TTag
}

const BookReviewItem: FC<Props> = ({
	avatar,
	Tag = 'div',
	description,
	grate,
	name,
	className,
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<div className={headCls}>
				<div className={avatarCls}>
					<Image
						src={avatar || '/images/shared/user-account.svg'}
						alt={name}
						width={40}
						height={40}
						className={avatarImageCls}
					/>
					<UiTypography font='Raleway-M' tag='h2'>
						{name}
					</UiTypography>
				</div>
				<div className={starsCls}>
					{[...Array(5)].map((_, index) => (
						<StarIcon
							className='lg-low:size-6 size-5'
							fill={
								grate <= index
									? 'var(--color-greyBackground)'
									: 'var(--color-blackMain)'
							}
							key={index}
						/>
					))}
				</div>
			</div>
			<UiTypography font='Raleway-M' tag='p' className={descriptionCls}>
				{description}
			</UiTypography>
		</Tag>
	)
}

export { BookReviewItem, type TBookReviewItemData }
