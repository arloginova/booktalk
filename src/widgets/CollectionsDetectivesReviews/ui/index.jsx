import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { KeyToUnraveling } from './KeyToUnraveling'
import { RiddleUnanswered } from './RiddleUnanswered'
import { Popular } from './Popular'

const wrapperCls = 'flex flex-col gap-y-16'

const CollectionsDetectivesReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<OurChoice />
			<RiddleUnanswered />
			<KeyToUnraveling />
		</section>
	)
}

export { CollectionsDetectivesReviews }