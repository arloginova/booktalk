'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { fantasyOurChoiceBooks } from '@/shared/api/fantasyBooks'

interface Props extends TClassName {}

const OurChoice: FC<Props> = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['reviews', 'our choice'],
		queryFn: fantasyOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'pjiiiiiiiktimyum',
				prev: 'miukuilulo',
			}}
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }
