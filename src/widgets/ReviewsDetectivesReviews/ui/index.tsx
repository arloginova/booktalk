import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { KeyToUnraveling } from './KeyToUnraveling'
import { RiddleUnanswered } from './RiddleUnanswered'
import { Popular } from './Popular'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName { }

const ReviewsDetectivesReviews: FC<Props> = ({ className }) => {
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

export { ReviewsDetectivesReviews }
