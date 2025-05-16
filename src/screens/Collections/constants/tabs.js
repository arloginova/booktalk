import { EnRoutes } from '@/shared/constants';
import { EnCurrentTab } from '../types/tabs';

const TABS = [
	{
		href: `${EnRoutes.collections}`,
		text: EnCurrentTab.all,
	},
	{
		href: `${EnRoutes.collections}?genre=${EnCurrentTab.romantic}`,
		text: EnCurrentTab.romantic,
	},
	{
		href: `${EnRoutes.collections}?genre=${EnCurrentTab.detectives}`,
		text: EnCurrentTab.detectives,
	},
	{
		href: `${EnRoutes.collections}?genre=${EnCurrentTab.notFiction}`,
		text: EnCurrentTab.notFiction,
	},
	{
		href: `${EnRoutes.collections}?genre=${EnCurrentTab.fantasy}`,
		text: EnCurrentTab.fantasy,
	},
	{
		href: `${EnRoutes.collections}?genre=${EnCurrentTab.horrors}`,
		text: EnCurrentTab.horrors,
	},
];

export { TABS };