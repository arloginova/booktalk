import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { Popular } from './Popular'
import { BrokenPromises } from './BrokenPromises'
import { LoveAmongStorms } from './LoveAmongStorms'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName {}

const CollectionsRomanticReviews: FC<Props> = ({ className }) => {
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
