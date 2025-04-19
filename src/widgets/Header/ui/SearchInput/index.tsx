'use client'
import { ChangeEventHandler, FC } from 'react'
import { TClassName } from '@/shared/types'
import { SearchIcon } from '@/shared/icons'
import { UiInput } from '@/shared/ui'
import { SearchContent } from '../SearchContent'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import {
	searchValueSelector,
	setSearchValue,
	setIsMobileVisible,
	setIsSearching,
} from '@/shared/store/searchSlice'
import { cn } from '@/shared/lib'

const searchBtnCls = 'lg-mid:size-5 size-4 [&>svg]:size-full'
const inputWrapperCls = 'w-full'
const inputContentCls =
	'lg-mid:gap-x-4 gap-x-3 lg-mid:px-5 px-4 lg-mid:py-3 py-1.75'
const inputCls = 'lg-mid:text-lg text-xs'

interface Props extends TClassName {}

const SearchInput: FC<Props> = ({ className }) => {
	const dispatch = useAppDispatch()
	const searchValue = useAppSelector(searchValueSelector)

	const handleSearch: ChangeEventHandler<HTMLInputElement> = event => {
		dispatch(setSearchValue(event.target.value))
		dispatch(setIsMobileVisible(true))
		dispatch(setIsSearching(true))
	}

	return (
		<div
			className={cn(
				'relative lg-mid:max-w-112 md-mid:max-w-80 max-w-50 w-full lg-mid:ml-8 ml-4',
				className
			)}
		>
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
	)
}

export { SearchInput }
