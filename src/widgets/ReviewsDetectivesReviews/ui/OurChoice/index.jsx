'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { detectivesOurChoiceBooks } from '@/shared/api/detectivesBooks'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['reviews', 'our choice'],
		queryFn: detectivesOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'fffffffgergregregre',
				prev: 'yuiytiotygrtgwref',
			}}
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }