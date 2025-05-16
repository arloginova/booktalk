'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { romanticOurChoiceBooks } from '@/shared/api/romanticBooks'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['reviews', 'our choice'],
		queryFn: romanticOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'ifgweifpoiewwiopfe',
				prev: 'girfigrigroigroww',
			}}
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }