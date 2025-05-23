import { cn } from '@/shared/lib'
import { UiGridElemWrapper } from '@/shared/ui'
import { NavigationTabs } from '@/widgets/NavigationTabs'
import { TABS } from '../constants/tabs'
import { notFound } from 'next/navigation'
import { returnComponent } from '../lib/returnComponent'
import { EnCurrentTab } from '../types/tabs'

const wrapperCls = 'my-[var(--main-blocks-gap)]'
const navCls = 'mt-35 mb-16'

const CollectionsScreen = ({ className, genre }) => {
	if (
		genre !== EnCurrentTab.all &&
		genre !== EnCurrentTab.detectives &&
		genre !== EnCurrentTab.fantasy &&
		genre !== EnCurrentTab.horrors &&
		genre !== EnCurrentTab.notFiction &&
		genre !== EnCurrentTab.romantic &&
		genre !== undefined
	) {
		notFound()
	}
	const renderComponent = returnComponent(genre)

	return (
		<UiGridElemWrapper
			Tag='main'
			plaque='подборки'
			className={cn(wrapperCls, className)}
		>
			<NavigationTabs links={TABS} className={navCls} />
			{renderComponent}
		</UiGridElemWrapper>
	)
}

export { CollectionsScreen }