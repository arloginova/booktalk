'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { EnRoutes } from '@/shared/constants';
import {
	horrorsReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes';
import { SliderReviews } from '@/widgets/SliderReviews';

const Popular = ({ className }) => {
	const popular = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: horrorsReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	});

	return (
		<SliderReviews
			buttonsID={{
				next: 'ppppppodfewuhfewfewuhfewfwe',
				prev: 'dokcdokiorbmnrfbmnrgikr',
			}}
			title={horrorsReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popular.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					horrorsReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
};

export { Popular };