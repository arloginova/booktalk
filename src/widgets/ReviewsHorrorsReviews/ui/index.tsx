import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { WhenShadowsLife } from './WhenShadowsLife'
import { OurChoice } from './OurChoice'
import { New } from './News'
import { UnforgettableGoosebumps } from './UnforgettableGoosebumps'
import { Popular } from './Popular'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName { }

const ReviewsHorrorsReviews: FC<Props> = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<OurChoice />
			<UnforgettableGoosebumps />
			<WhenShadowsLife />
		</section>
	)
}

export { ReviewsHorrorsReviews }
