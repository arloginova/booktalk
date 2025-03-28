'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiGridElemWrapper } from '@/shared/ui'
import { SliderBooks } from '@/widgets/SliderBooks'
import { useQuery } from '@tanstack/react-query'
import { booksCollections } from '@/shared/api/booksCollections'

const wrapperCls = 'bg-whiteMain p-main'

interface Props extends TClassName {}

const HomeBooks: FC<Props> = ({ className }) => {
	const booksQuery = useQuery({
		queryKey: ['news', 'books'],
		queryFn: booksCollections,
	})

	return (
		<UiGridElemWrapper className={cn(wrapperCls, className)} plaque='Подборки'>
			<SliderBooks withMarginTop books={booksQuery.data} title='Новинки книг' />
		</UiGridElemWrapper>
	)
}

export { HomeBooks }
