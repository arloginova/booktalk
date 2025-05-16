'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { fantasyOurChoiceBooks } from '@/shared/api/fantasyBooks'

const OurChoice = ({ className }) => {
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