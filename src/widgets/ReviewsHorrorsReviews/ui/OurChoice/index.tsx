'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { horrorsOurChoiceBooks } from '@/shared/api/horrorsBooks'

interface Props extends TClassName { }

const OurChoice: FC<Props> = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['reviews', 'our choice'],
		queryFn: horrorsOurChoiceBooks,
	})

	return (
		<SliderOurChoice
			title='Наш выбор'
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }
