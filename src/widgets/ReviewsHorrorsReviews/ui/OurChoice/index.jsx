'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { horrorsOurChoiceBooks } from '@/shared/api/horrorsBooks'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['reviews', 'our choice'],
		queryFn: horrorsOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'dsfdsfdnhnmuju',
				prev: 'dddddddddnftgntnt',
			}}
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }