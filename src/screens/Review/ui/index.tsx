import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TDynamicParams } from '../types/dynamicParams'
import { ReviewsInfo } from '@/widgets/ReviewsInfo'
import { ReviewsCollections } from '@/widgets/ReviewsCollections'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

interface Props extends TClassName {
	params: TDynamicParams
}

const ReviewScreen: FC<Props> = ({ className, params }) => {

	return (
		<main className={cn(wrapperCls, className)}>
			<ReviewsInfo params={params} className='mb-[var(--main-blocks-gap)]' />
			<ReviewsCollections />
		</main>
	)
}

export { ReviewScreen }
