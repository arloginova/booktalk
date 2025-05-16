'use client'
import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'
import Link from 'next/link'
import { TelegramIcon } from '@/shared/icons'
import { useScreen } from '@/shared/hooks'
import { MD_MID, XS_MID } from '@/shared/constants'
import { TELEGRAM_LINK } from '@/shared/constants/info'

const wrapperCls =
	'bg-blackMain p-hr-main text-whiteMain lg-mid:py-6 py-3 rounded-full flex items-center justify-between mt-auto'
const companyCls = 'lg-low:text-lg xs-big:text-xs xs-mid:text-[9px] text-sm'
const navCls =
	'flex lg-low:gap-x-8 gap-x-5 lg-low:text-lg xs-big:text-xs text-[9px]'
const linkCls = ''
const telegramCls = ''

const Footer = ({ className }) => {
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
			<Link href={TELEGRAM_LINK} className={telegramCls}>
				<TelegramIcon className='md-mid:size-[30px] xs-mid:size-4 size-6' />
			</Link>
		</footer>
	)
}

export { Footer }