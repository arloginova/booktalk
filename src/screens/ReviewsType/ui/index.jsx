'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { UiGridElemWrapper, UiMainBlockWithTitle } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { EnRoutes } from '@/shared/constants';
import { reviewsRoutes } from '../constants/reviews';
import { ReviewItem } from '@/entities/ReviewItem';

const wrapperCls = 'my-[var(--main-blocks-gap)] grow';
const groupCls = 'grid md-mid:grid-cols-[repeat(3,1fr)] xs-big:grid-cols-[repeat(2,1fr)] lg-low:gap-x-5 gap-x-3 lg-low:gap-y-10 gap-y-7';
const itemCls = 'р-[225px]';

const ReviewsTypeScreen = ({ className, type }) => {
	const keys = Object.keys(reviewsRoutes);
	const pageTypeKey = keys.find(key => reviewsRoutes[key].href === type);

	if (!pageTypeKey) notFound();

	const data = useQuery({
		queryKey: ['reviews', 'type', type],
		queryFn: reviewsRoutes[pageTypeKey].queryFn,
	});

	return (
		<UiGridElemWrapper
			plaque={['Рецензии', reviewsRoutes[pageTypeKey].title]}
			className={cn(className, wrapperCls)}
		>
			<UiMainBlockWithTitle
				withMarginTop
				title={reviewsRoutes[pageTypeKey].title}
			>
				<ul className={groupCls}>
					{!data.data || !data.data?.length
						? [...Array(6)].map((_, index) => (
							<ReviewItem
								className={itemCls}
								imageClassName='!h-full !w-auto'
								gradientImageClassName='lg-low:h-[227px] xs-big:h-[180px] h-[208px]'
								hasSkeleton
								key={index}
							/>
						))
						: data.data.map(({ data, genre, type }) => {
							return (
								<Link
									href={`${EnRoutes.reviews}/${reviewsRoutes[pageTypeKey].href}/${data.slug}`}
									key={`${data.slug}${genre}${type}`}
								>
									<ReviewItem
										{...data}
										className={itemCls}
										imageClassName='!h-full !w-auto'
										gradientImageClassName='lg-low:h-[227px] h-[150px]'
									/>
								</Link>
							);
						})}
				</ul>
			</UiMainBlockWithTitle>
		</UiGridElemWrapper>
	);
};

export { ReviewsTypeScreen };