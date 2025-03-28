import { EnRoutes } from '@/shared/constants'
import { ShareIcon } from '@/shared/icons'
import { cn } from '@/shared/lib'
import { TClassName, TTag } from '@/shared/types'
import { TArticleBookItem } from '@/shared/types/Articles'
import { UiButton, UiTypography } from '@/shared/ui'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const wrapperCls = ''
const contentCls =
	'flex bg-greyBackground p-main lg-low:rounded-[20px] rounded-[16px]'
const imgCls =
	'lg-low:w-[110px] w-[85px] lg-low:h-[170px] h-[130px] lg-low:rounded-[10px] rounded-[6px]'

const infoCls = 'flex flex-col justify-center ml-6'
const titleCls = 'lg-low:text-2xl xs-big:text-base text-sm leading-none '
const authorCls = 'lg-low:text-xl text-sm lg-low:my-3.5 my-2 text-greyExtra'
const btnCls =
	'lg-low:text-base text-xs lg-low:px-7 px-5 lg-low:pt-3 lg-low:pb-2.2 py-2'
const btnTextCls = 'flex items-center lg-low:gap-x-3 gap-x-2'

const descriptionCls = 'lg-low:text-xl text-sm lg-low:mt-6 mt-4'
const shareBtnCls =
	'lg-low:size-16 size-9 rounded-full bg-whiteMain flex justify-center items-center ml-auto leading-none hover:opacity-60 duration-150'
const shareIconCls = 'lg-low:w-5 w-3 lg-low:h-6 h-[14px]'

interface Props extends TClassName, Omit<TArticleBookItem, 'description'>, Partial<{ description: TArticleBookItem['description'] }> {
	Tag?: TTag
}

const ArticleBookItem: FC<Props> = ({
	author,
	bookTitle,
	description,
	className,
	image,
	Tag = 'div',
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<div className={contentCls}>
				<Image
					src={image}
					alt={bookTitle}
					width={110}
					height={170}
					className={imgCls}
				/>
				<div className={infoCls}>
					<UiTypography font='Muller-M' tag='h2' className={titleCls}>
						{bookTitle}
					</UiTypography>
					<UiTypography font='Raleway-M' tag='h2' className={authorCls}>
						{author}
					</UiTypography>
					<Link href={`${EnRoutes.collections}/new/${bookTitle}`}>
						<UiButton textClassName={btnTextCls} className={btnCls}>
							<Image
								src='/images/shared/second-logo.svg'
								alt='Booktalk'
								width={20}
								height={20}
							/>
							читать
						</UiButton>
					</Link>
				</div>
				<button className={shareBtnCls}>
					<ShareIcon className={shareIconCls} />
				</button>
			</div>
			{description ? <UiTypography font='Raleway-M' tag='h4' className={descriptionCls}>
				{description}
			</UiTypography> : null}
		</Tag>
	)
}

export { ArticleBookItem }
