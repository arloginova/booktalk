'use client'
import { ChangeEventHandler, FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiInput, UiLogo } from '@/shared/ui'
import { SearchIcon } from '@/shared/icons'
import { Navigation } from './Navigation'
import { useScreen } from '@/shared/hooks'
import { LG_MID, MD_LOW } from '@/shared/constants'
import { SearchContent } from './SearchContent'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import { searchValueSelector, setSearchValue } from '@/shared/store/searchSlice'

const wrapperCls =
	'bg-blackMain p-hr-main text-whiteMain lg-mid:py-3 py-2 flex items-center rounded-full relative z-10'
const searchBtnCls = 'lg-mid:size-5 size-4 [&>svg]:size-full'
const logoCls = 'md-low:mr-0 mr-3'
const inputWrapperCls = ''
const inputContentCls =
	'lg-mid:gap-x-4 gap-x-3 lg-mid:px-5 px-4 lg-mid:py-3 py-1.75'
const inputCls = 'lg-mid:text-lg text-xs'
const navigationCls = 'ml-auto'

interface Props extends TClassName {}

const Header: FC<Props> = ({ className }) => {
	const searchValue = useAppSelector(searchValueSelector)
	const dispatch = useAppDispatch()
	const { screenWidth } = useScreen()

	const handleSearch: ChangeEventHandler<HTMLInputElement> = event => {
		dispatch(setSearchValue(event.target.value))
	}

	return (
		<section className={cn(wrapperCls, className)}>
			<UiLogo
				className={logoCls}
				size={
					screenWidth >= LG_MID ? 'big' : screenWidth >= MD_LOW ? 'mid' : 'low'
				}
			/>
			{screenWidth >= MD_LOW ? (
				<div className='relative lg-mid:max-w-112 md-mid:max-w-80 max-w-50 w-full lg-mid:ml-8 ml-4'>
					<UiInput
						className={inputWrapperCls}
						inputProps={{
							placeholder: 'Введите запрос',
							className: inputCls,
							value: searchValue,
							onChange: handleSearch,
						}}
						contentClassName={inputContentCls}
						beforeContent={
							<button type='button' className={searchBtnCls}>
								<SearchIcon />
							</button>
						}
					/>
					{searchValue ? <SearchContent /> : null}
				</div>
			) : (
				<button type='button' className={searchBtnCls}>
					<SearchIcon fill='var(--color-whiteMain)' />
				</button>
			)}
			<Navigation className={navigationCls} />
		</section>
	)
}

export { Header }
