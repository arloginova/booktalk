import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { Popular } from './Popular'
import { ForbiddenLove } from './ForbiddenLove'
import { ModernRomance } from './ModernRomance'

const wrapperCls = 'flex flex-col gap-y-16'

const ReviewsRomanticReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<OurChoice />
			<ModernRomance />
			<ForbiddenLove />
		</section>
	)
}

export { ReviewsRomanticReviews }