import { cn } from '@/shared/lib'
import { Popular } from './Popular'
import { New } from './New'
import { OurChoice } from './OurChoice'
import { RomanticMood } from './RomanticMood'
import { Atmospheric } from './Atmospheric'
import { BrightEmotions } from './BrightEmotions'
import { CinemaAndSeries } from './CinemaAndSeries'
import { EasyRead } from './EasyRead'
import { OurChoiceSecond } from './OurChoiceSecond'

const wrapperCls = 'flex flex-col gap-y-16'

const ArticlesAllReviews = ({ className }) => {
	return (
		<section className={cn(wrapperCls, className)}>
			<Popular />
			<New />
			<OurChoice />
			<RomanticMood />
			<Atmospheric />
			<EasyRead />
			<OurChoiceSecond />
			<CinemaAndSeries />
			<BrightEmotions />
		</section>
	)
}

export { ArticlesAllReviews }