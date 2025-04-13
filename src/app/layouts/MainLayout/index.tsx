'use client'
import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { useAppSelector } from '@/shared/hooks/redux'
import { searchValueSelector } from '@/shared/store/searchSlice'
import { cn } from '@/shared/lib'
import { useBodyClassName } from '@/shared/hooks'

interface Props extends TChildren {}

const MainLayout: FC<Props> = ({ children }) => {
	const searchValue = useAppSelector(searchValueSelector)
	const bodyClassName = useBodyClassName()

	if (searchValue) {
		bodyClassName({ className: 'hide_scrollbar', type: 'add' })
	} else {
		bodyClassName({ className: 'hide_scrollbar', type: 'remove' })
	}

	return (
		<>
			<Header />
			<div
				className={cn(
					'fixed inset-0 size-full duration-300 z-[9] pointer-events-none',
					{
						['bg-blackMain-25 pointer-events-auto']: !!searchValue,
					}
				)}
			/>
			{children}
			<Footer />
		</>
	)
}

export { MainLayout }
