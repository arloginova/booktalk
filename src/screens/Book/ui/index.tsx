import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TDynamicParams } from '../types/dynamicParams'
import { BookCollections } from '@/widgets/BookCollections'
import { BookInfo } from '@/widgets/BookInfo'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

interface Props extends TClassName {
	params: TDynamicParams
}

const BookScreen: FC<Props> = ({ className, params }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<BookInfo params={params} className='mb-[var(--main-blocks-gap)]' />
			<BookCollections />
		</main>
	)
}

export { BookScreen }
