import { ReactNode } from 'react'
import { EnCurrentTab } from '../types/tabs'
import { CollectionsAllReviews } from '@/widgets/CollectionsAllReviews'
import { CollectionsDetectivesReviews } from '@/widgets/CollectionsDetectivesReviews'
import { CollectionsFantasyReviews } from '@/widgets/CollectionsFantasyReviews'
import { CollectionsHorrorsReviews } from '@/widgets/CollectionsHorrorsReviews'
import { CollectionsNotFictionReviews } from '@/widgets/CollectionsNotFictionReviews'
import { CollectionsRomanticReviews } from '@/widgets/CollectionsRomanticReviews'

export const returnComponent = (genre?: EnCurrentTab): ReactNode => {
	let component: ReactNode = null
	switch (genre) {
		case undefined:
			component = <CollectionsAllReviews />
			break
		case EnCurrentTab.detectives:
			component = <CollectionsDetectivesReviews />
			break
		case EnCurrentTab.fantasy:
			component = <CollectionsFantasyReviews />
			break
		case EnCurrentTab.horrors:
			component = <CollectionsHorrorsReviews />
			break
		case EnCurrentTab.notFiction:
			component = <CollectionsNotFictionReviews />
			break
		case EnCurrentTab.romantic:
			component = <CollectionsRomanticReviews />
			break
	}
	return component
}
