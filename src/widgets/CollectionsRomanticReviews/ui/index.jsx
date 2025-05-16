import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { Popular } from './Popular'
import { BrokenPromises } from './BrokenPromises'
import { LoveAmongStorms } from './LoveAmongStorms'

const wrapperCls = 'flex flex-col gap-y-16'

const CollectionsRomanticReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<OurChoice />
			<LoveAmongStorms />
			<BrokenPromises />
		</section>
	)
}

export { CollectionsRomanticReviews }