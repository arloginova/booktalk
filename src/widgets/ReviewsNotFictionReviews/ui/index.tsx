import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { EmotionsUnderControl } from './EmotionsUnderControl'
import { OurChoice } from './OurChoice'
import { PowerOfThoughts } from './PowerOfThoughts'
import { StepsBestVersion } from './StepsBestVersion'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName { }

const ReviewsNotFictionReviews: FC<Props> = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<StepsBestVersion />
			<EmotionsUnderControl />
			<OurChoice />
			<PowerOfThoughts />
		</section>
	)
}

export { ReviewsNotFictionReviews }
