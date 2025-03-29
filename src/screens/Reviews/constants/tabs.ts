import { EnRoutes } from '@/shared/constants'
import { EnCurrentTab } from '../types/tabs'
import { TLinkItem } from '@/widgets/NavigationTabs'

const TABS: TLinkItem<EnCurrentTab>[] = [
	{
		href: `${EnRoutes.reviews}`,
		text: EnCurrentTab.all,
	},
	{
		href: `${EnRoutes.reviews}?genre=${EnCurrentTab.romantic}`,
		text: EnCurrentTab.romantic,
	},
	{
		href: `${EnRoutes.reviews}?genre=${EnCurrentTab.detectives}`,
		text: EnCurrentTab.detectives,
	},
	{
		href: `${EnRoutes.reviews}?genre=${EnCurrentTab.notFiction}`,
		text: EnCurrentTab.notFiction,
	},
	{
		href: `${EnRoutes.reviews}?genre=${EnCurrentTab.fantasy}`,
		text: EnCurrentTab.fantasy,
	},
	{
		href: `${EnRoutes.reviews}?genre=${EnCurrentTab.horrors}`,
		text: EnCurrentTab.horrors,
	},
]

export { TABS }
