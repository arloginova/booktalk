'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { notFictionOurChoiceBooks } from '@/shared/api/notFictionBooks'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['collections', 'our choice'],
		queryFn: notFictionOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'qqqdwqdqwdwq',
				prev: 'czczxcdcfbtgnnnh',
			}}
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }