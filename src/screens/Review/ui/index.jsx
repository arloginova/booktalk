import { cn } from '@/shared/lib'
import { ReviewsInfo } from '@/widgets/ReviewsInfo'
import { ReviewsCollections } from '@/widgets/ReviewsCollections'

const wrapperCls = 'my-[var(--main-blocks-gap)]'

const ReviewScreen = ({ className, params }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<ReviewsInfo params={params} className='mb-[var(--main-blocks-gap)]' />
			<ReviewsCollections />
		</main>
	)
}

export { ReviewScreen }