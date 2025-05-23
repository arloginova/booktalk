'use client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { BookItem } from '@/entities/BookItem'
import { reviewsRoutes } from '@/screens/BookType'
import { UiGridElemWrapper, UiMainBlockWithTitle } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { notFound } from 'next/navigation'

const wrapperCls = 'my-[var(--main-blocks-gap)] grow'
const groupCls =
	'grid lg-low:grid-cols-[repeat(auto-fit,210px)] grid-cols-[repeat(auto-fit,160px)] lg-low:gap-x-5 gap-x-3 lg-low:gap-y-10 lg-low:gap-y-7 gap-y-4 justify-center'
const itemCls = 'lg-low:w-[210px] w-[160px]'

const BookTypeScreen = ({ className, type }) => {
	const keys = Object.keys(reviewsRoutes)
	const pageTypeKey = keys.find(key => reviewsRoutes[key].href === type)

	if (!pageTypeKey) notFound()

	const data = useQuery({
		queryKey: ['articles', 'type', type],
		queryFn: reviewsRoutes[pageTypeKey].queryFn,
	})

	return (
		<UiGridElemWrapper
			plaque={['Книги', reviewsRoutes[pageTypeKey].title]}
			className={cn(className, wrapperCls)}
		>
			<UiMainBlockWithTitle
				withMarginTop
				title={reviewsRoutes[pageTypeKey].title}
			>
				<ul className={groupCls}>
					{!data.data || !data.data?.length
						? [...Array(6)].map((_, index) => (
							<BookItem key={index} hasSkeleton />
						))
						: data.data.map(({ data, genre, type }) => {
							return (
								<Link
									href={`${EnRoutes.collections}/${reviewsRoutes[pageTypeKey].href}/${data.slug}`}
									key={`${data.slug}${genre}${type}`}
								>
									<BookItem className={itemCls} {...data} />
								</Link>
							)
						})}
				</ul>
			</UiMainBlockWithTitle>
		</UiGridElemWrapper>
	)
}

export { BookTypeScreen }