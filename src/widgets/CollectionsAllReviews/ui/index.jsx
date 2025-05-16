import { cn } from '@/shared/lib'
import { New } from './New'
import { Romantic } from './Romantic'
import { OurChoice } from './OurChoice'
import { NotFiction } from './NotFiction'

const wrapperCls = 'flex flex-col gap-y-16'

const CollectionsAllReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Romantic />
			<OurChoice />
			<NotFiction />
		</section>
	)
}

export { CollectionsAllReviews }