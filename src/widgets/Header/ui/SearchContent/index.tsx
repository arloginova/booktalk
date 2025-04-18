'use client'
import { FC, MouseEventHandler, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import { searchValueSelector, setSearchValue } from '@/shared/store/searchSlice'
import { UiTypography } from '@/shared/ui'
import { searchBooks } from '@/shared/api/searchBook'
import { useDebouncedEffect } from '@/shared/hooks/useDebounceEffect'
import { TBookItem } from '@/shared/types/Book'
import Link from 'next/link'
import { reviewsRoutes } from '@/screens/BookType'
import { EnRoutes } from '@/shared/constants'
import Image from 'next/image'
import { searchArticles } from '@/shared/api/searchArticle'
import { TArticleItem } from '@/shared/types/Articles'
import { ArticleItem } from '@/entities/ArticleItem'
import { CHAIN } from '../../constants/chain'
import { allReviewsRoutes } from '@/widgets/ArticlesAllReviews'
import { type } from 'os'
import { ReviewItem } from '@/entities/ReviewItem'
import { searchReviews } from '@/shared/api/searchReviews'

interface Props extends TClassName {}

const SearchContent: FC<Props> = ({ className }) => {
	const searchValue = useAppSelector(searchValueSelector)
	const [findBooks, setFindBooks] = useState<TBookItem[]>([])
	const [findArticles, setFindArticles] = useState<TArticleItem[]>([])
	const [findReviews, setFindReviews] = useState<TBookItem[]>([])
	const dispatch = useAppDispatch()

	useDebouncedEffect(
		() => {
			const request = async () => {
				const resBooks = await searchBooks(searchValue || '')
				const resArticles = await searchArticles(searchValue || '')
				const resReviews = await searchReviews(searchValue || '')

				setFindBooks(resBooks)
				setFindArticles(resArticles)
				setFindReviews(resReviews)
			}
			request()
		},
		[searchValue],
		1000
	)

	const handleRedirect: MouseEventHandler = () => {
		dispatch(setSearchValue(''))
	}

	return (
		<div
			className={cn(
				'absolute left-0 bottom-0 lg-low:translate-y-[calc(100%+13px)] translate-y-[calc(100%+8px)] max-h-[670px] overflow-auto w-full flex flex-col gap-y-2 no-scrollbar',
				className
			)}
		>
			{findBooks.length || findArticles.length ? (
				<div className='flex flex-col gap-y-[inherit]'>
					{findBooks.map(({ data: { author, slug, image }, genre, type }) => (
						<Link
							onClick={handleRedirect}
							key={`${slug}${genre}${type}`}
							href={`${EnRoutes.collections}/${reviewsRoutes[type]?.href}/${slug}`}
							className='py-6 px-8 rounded-[20px] bg-whiteMain text-blackMain flex items-center gap-x-6'
						>
							<Image
								src={image}
								alt={slug}
								width={110}
								height={170}
								className='rounded-[8px]'
							/>
							<div className=''>
								<UiTypography font='Muller-M' tag='h2' className='text-2xl'>
									{slug}
								</UiTypography>
								<UiTypography font='Raleway-M' tag='h3' className='text-xl'>
									{author}
								</UiTypography>
							</div>
						</Link>
					))}

					{findReviews.map(({ data, genre, type }) => (
						<Link
							onClick={handleRedirect}
							key={`${data.slug}${genre}${type}`}
							href={`${EnRoutes.reviews}/${type}/${data.slug}`}
						>
							<ReviewItem
								withoutText
								gradientImageClassName='h-[223px]'
								imageClassName='!h-full !w-auto'
								key={data.id}
								{...data}
							/>
						</Link>
					))}
					{findArticles.map(({ data, genre, type }) => (
						<Link
							onClick={handleRedirect}
							href={`${EnRoutes.articles}${
								allReviewsRoutes[type].href
							}/${data.title.replace('?', '')}`}
							key={`${data.title}${genre}${type}`}
						>
							<ArticleItem
								className='h-[223px]'
								withoutText
								theme={CHAIN[Math.floor(Math.random() * CHAIN.length + 1)]}
								key={data.id}
								{...data}
							/>
						</Link>
					))}
				</div>
			) : (
				<div className='w-full h-[185px] rounded-[20px] bg-white flex items-center justify-center text-blackMain text-2xl'>
					<UiTypography font='Raleway-M' tag='h2'>
						Ничего не найдено
					</UiTypography>
				</div>
			)}
		</div>
	)
}

export { SearchContent }
