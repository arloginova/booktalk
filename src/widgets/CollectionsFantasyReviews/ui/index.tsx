import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { Popular } from './Popular'
import { Mistic } from './Mistic'
import { HeroWay } from './HeroWay'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName {}

const CollectionsFantasyReviews: FC<Props> = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<New />
			<Popular />
			<OurChoice />
			<HeroWay />
			<Mistic />
		</section>
	)
}

export { CollectionsFantasyReviews }
