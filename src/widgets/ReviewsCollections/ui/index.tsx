import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiGridElemWrapper } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { SliderBooks } from '@/widgets/SliderBooks'
import { booksCollections } from '@/shared/api/booksCollections'

const wrapperCls = ''
const sliderCls = ''

interface Props extends TClassName {}

const ReviewsCollections: FC<Props> = async ({ className }) => {
	const data = await booksCollections()

	return (
		<UiGridElemWrapper plaque='рецензии' className={cn(wrapperCls, className)}>
			<SliderBooks
				buttonsID={{
					next: 'cnvxmvnfdsvcjdsjnvdfnjvsd',
					prev: 'sdanjsdjsadsajkdsakjdsjka',
				}}
				withMarginTop
				title='Вам может понравится'
				books={data}
				className={sliderCls}
			/>
		</UiGridElemWrapper>
	)
}

export { ReviewsCollections }
