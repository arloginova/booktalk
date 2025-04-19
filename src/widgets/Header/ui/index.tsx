'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiLogo } from '@/shared/ui'
import { Navigation } from './Navigation'
import { useScreen } from '@/shared/hooks'
import { LG_MID, MD_LOW } from '@/shared/constants'
import { SearchInput } from './SearchInput'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import { SearchIcon } from '@/shared/icons'
import {
	isMobileVisibleSelector,
	setIsMobileVisible,
} from '@/shared/store/searchSlice'

const searchBtnCls = 'lg-mid:size-5 size-4 [&>svg]:size-full'
const wrapperCls =
	'bg-blackMain p-hr-main text-whiteMain lg-mid:py-3 py-2 flex items-center rounded-full'
const logoCls = 'md-low:mr-0 mr-3'
const navigationCls = 'ml-auto'

interface Props extends TClassName {}

const Header: FC<Props> = ({ className }) => {
	const dispatch = useAppDispatch()
	const isMobileVisible = useAppSelector(isMobileVisibleSelector)
	const { screenWidth } = useScreen()

	return (
		<section className={cn('relative z-10', className)}>
			<div className={wrapperCls}>
				<UiLogo
					className={logoCls}
					size={
						screenWidth >= LG_MID
							? 'big'
							: screenWidth >= MD_LOW
							? 'mid'
							: 'low'
					}
				/>
				{screenWidth >= MD_LOW ? (
					<SearchInput />
				) : (
					<button
						type='button'
						className={searchBtnCls}
						onClick={() => {
							dispatch(setIsMobileVisible(!isMobileVisible))
						}}
					>
						<SearchIcon fill='var(--color-whiteMain)' />
					</button>
				)}
				<Navigation className={navigationCls} />
			</div>
			<div className='w-full mt-2'>
				{screenWidth < MD_LOW && isMobileVisible ? (
					<SearchInput className='ml-0 w-full max-w-none' />
				) : null}
			</div>
		</section>
	)
}

export { Header }
