'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'
import Link from 'next/link'
import { TelegramIcon } from '@/shared/icons'
import { useScreen } from '@/shared/hooks'
import { MD_MID, XS_MID } from '@/shared/constants'

const wrapperCls =
	'bg-blackMain p-hr-main text-whiteMain lg-mid:py-6 py-3 rounded-full flex items-center justify-between mt-auto'
const companyCls = 'lg-low:text-lg xs-big:text-xs xs-mid:text-[9px] text-sm'
const navCls =
	'flex lg-low:gap-x-8 gap-x-5 lg-low:text-lg xs-big:text-xs text-[9px]'
const linkCls = ''
const telegramCls = ''

interface Props extends TClassName { }

const Footer: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()

	return (
		<footer className={cn(wrapperCls, className)}>
			<UiTypography font='Raleway-M' tag='h3' className={companyCls}>
				ООО «BOOKTALK NN»
			</UiTypography>
			<nav className={navCls}>
				{screenWidth >= MD_MID ? (
					<Link href='#' className={linkCls}>
						<UiTypography font='Raleway-M' tag='h3'>
							О компании
						</UiTypography>
					</Link>
				) : null}
				{screenWidth >= XS_MID ? (
					<>
						<Link href='#' className={linkCls}>
							<UiTypography font='Raleway-M' tag='h3'>
								Правила сервиса
							</UiTypography>
						</Link>
						<Link href='#' className={linkCls}>
							<UiTypography font='Raleway-M' tag='h3'>
								Служба поддержки
							</UiTypography>
						</Link>
					</>
				) : null}
			</nav>
			<Link href='#' className={telegramCls}>
				<TelegramIcon className='md-mid:size-[30px] xs-mid:size-4 size-6' />
			</Link>
		</footer>
	)
}

export { Footer }
