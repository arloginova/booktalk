import { EnRoutes } from '@/shared/constants'
import { EnCurrentTab } from '../types/tabs'
import { TLinkItem } from '@/widgets/NavigationTabs'

const TABS: TLinkItem<EnCurrentTab>[] = [
	{
		href: `${EnRoutes.articles}`,
		text: EnCurrentTab.all,
	},
	{
		href: `${EnRoutes.articles}?genre=${EnCurrentTab.romantic}`,
		text: EnCurrentTab.romantic,
	},
	{
		href: `${EnRoutes.articles}?genre=${EnCurrentTab.detectives}`,
		text: EnCurrentTab.detectives,
	},
	{
		href: `${EnRoutes.articles}?genre=${EnCurrentTab.notFiction}`,
		text: EnCurrentTab.notFiction,
	},
	{
		href: `${EnRoutes.articles}?genre=${EnCurrentTab.fantasy}`,
		text: EnCurrentTab.fantasy,
	},
	{
		href: `${EnRoutes.articles}?genre=${EnCurrentTab.horrors}`,
		text: EnCurrentTab.horrors,
	},
]

export { TABS }
