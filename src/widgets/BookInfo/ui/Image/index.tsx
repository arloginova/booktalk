import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiButton } from '@/shared/ui'
import NextImage from 'next/image'
import { TBookData } from '@/shared/types/Book'
import { cn } from '@/shared/lib'

const bookCls = 'lg-low:min-w-[265px] lg-low:w-[265px] min-w-[210px] w-[210px]'
const imageCls = 'w-full lg-low:h-[410px] h-[325px] object-cover rounded-[15px]'
const btnCls = 'w-full mt-5 lg-low:text-base text-xs'
const btnTextCls = 'flex justify-center items-center gap-x-3'

interface Props extends TClassName, Pick<TBookData, 'image' | 'slug'> {}

const Image: FC<Props> = ({ className, image, slug }) => {
	return (
		<div className={cn(bookCls, className)}>
			<NextImage
				src={image}
				alt={slug}
				width={265}
				height={410}
				className={imageCls}
			/>
			<UiButton className={btnCls} textClassName={btnTextCls}>
				<NextImage
					src='/images/shared/second-logo.svg'
					alt='Booktalk'
					width={20}
					height={20}
					className='-translate-y-0.5'
				/>
				Купить книгу
			</UiButton>
		</div>
	)
}

export { Image }
