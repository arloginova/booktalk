import { ReactNode } from 'react'
import { EnCurrentTab } from '../types/tabs'
import { ArticlesAllReviews } from '@/widgets/ArticlesAllReviews'

export const returnComponent = (genre?: EnCurrentTab): ReactNode => {
	let component: ReactNode = null

	switch (genre) {
		case undefined:
			component = <ArticlesAllReviews />
			break
		case EnCurrentTab.detectives:
			component = <>Нет данных</>
			break
		case EnCurrentTab.fantasy:
			component = <>Нет данных</>
			break
		case EnCurrentTab.horrors:
			component = <>Нет данных</>
			break
		case EnCurrentTab.notFiction:
			component = <>Нет данных</>
			break
		case EnCurrentTab.romantic:
			component = <>Нет данных</>
			break
	}
	return component
}
