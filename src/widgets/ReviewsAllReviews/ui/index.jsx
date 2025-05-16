import { cn } from '@/shared/lib'
import { New } from './New'
import { Romantic } from './Romantic'
import { OurChoice } from './OurChoice'
import { NotFiction } from './NotFiction'
import { Popular } from './Popular'

const wrapperCls = 'flex flex-col gap-y-16'

const ReviewsAllReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<Romantic />
			<OurChoice />
			<NotFiction />
		</section>
	)
}

export { ReviewsAllReviews }