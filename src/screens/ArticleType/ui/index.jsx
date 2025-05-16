'use client'
import { useQuery } from '@tanstack/react-query'
import { ArticleItem } from '@/entities/ArticleItem'
import { CHAIN } from '../constants/chain'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { UiGridElemWrapper, UiMainBlockWithTitle } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { allReviewsRoutes } from '@/widgets/ArticlesAllReviews'
import { notFound } from 'next/navigation'

const wrapperCls = 'my-[var(--main-blocks-gap)] grow'
const groupCls =
	'grid md-mid:grid-cols-[repeat(3,1fr)] xs-big:grid-cols-[repeat(2,1fr)] lg-low:gap-x-5 gap-x-3 lg-low:gap-y-10 gap-y-7'
const itemCls = 'lg-low:h-[260px] xs-big:h-[180px] h-[208px]'

const ArticleTypeScreen = ({ className, type }) => {
	let curChainItemIndex = -1
	const keys = Object.keys(allReviewsRoutes)
	const pageTypeKey = keys.find(
		key => allReviewsRoutes[key].href === `/${type}`
	)

	if (!pageTypeKey) notFound()

	const data = useQuery({
		queryKey: ['articles', 'type', type],
		queryFn: allReviewsRoutes[pageTypeKey].queryFn,
	})

	return (
		<UiGridElemWrapper
			plaque={['Тематические статьи', allReviewsRoutes[pageTypeKey].title]}
			className={cn(className, wrapperCls)}
		>
			<UiMainBlockWithTitle
				withMarginTop
				title={allReviewsRoutes[pageTypeKey].title}
			>
				<ul className={groupCls}>
					{!data.data || !data.data?.length
						? [...Array(6)].map((_, index) => (
							<ArticleItem key={index} hasSkeleton />
						))
						: data.data.map(({ data, genre, type }) => {
							if (curChainItemIndex + 2 > CHAIN.length) {
								curChainItemIndex = 0
							} else {
								curChainItemIndex++
							}
							return (
								<Link
									href={`${EnRoutes.articles}${allReviewsRoutes[pageTypeKey].href}/${data.title}`}
									key={`${data.title}${genre}${type}`}
								>
									<ArticleItem
										themeClassName='lg-big:text-2xl md'
										backgroundImageClassName='lg-low:!h-[93%] xs-big:!h-[111%] !h-[102%] max-w-none !w-auto'
										className={itemCls}
										{...data}
										theme={CHAIN[curChainItemIndex]}
									/>
								</Link>
							)
						})}
				</ul>
			</UiMainBlockWithTitle>
		</UiGridElemWrapper>
	)
}

export { ArticleTypeScreen }