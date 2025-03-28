import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Popular } from './Popular'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { RomanticMood } from './RomanticMood'
import { Atmospheric } from './Atmospheric'

const wrapperCls = 'flex flex-col gap-y-16'

interface Props extends TClassName {}

const ArticlesAllReviews: FC<Props> = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<Popular />
			<New />
			<OurChoice />
			<RomanticMood />
			<Atmospheric />
		</section>
	)
}

export { ArticlesAllReviews }
