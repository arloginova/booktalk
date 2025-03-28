'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { articlesOurChoice } from '@/shared/api/articles'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '../../constants/routes'

interface Props extends TClassName {}

const OurChoice: FC<Props> = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['articles', 'our choice'],
		queryFn: articlesOurChoice,
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
