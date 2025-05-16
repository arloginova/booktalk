import { cn } from '@/shared/lib'
import { WhenShadowsLife } from './WhenShadowsLife'
import { OurChoice } from './OurChoice'
import { New } from './News'
import { UnforgettableGoosebumps } from './UnforgettableGoosebumps'
import { Popular } from './Popular'

const wrapperCls = 'flex flex-col gap-y-16'

const CollectionsHorrorsReviews = ({ className }) => {
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

export { CollectionsHorrorsReviews }