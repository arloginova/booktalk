import { FC } from 'react'
import { TChildrenGen, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls =
	'px-2.5 py-1 rounded-full uppercase w-max lg-low:text-base text-xs'
const inactiveCls = ' bg-greyBackground'
const activeCls = ' bg-orangeMain text-whiteMain'

interface TUiPlaqueProps extends TClassName, TChildrenGen<string> {
	Tag?: TTag
	theme?: 'active' | 'inactive'
}

const UiPlaque: FC<TUiPlaqueProps> = ({
	className,
	children,
	theme = 'inactive',
	Tag = 'div',
}) => {
	return (
		<Tag
			className={cn(
				wrapperCls,
				{
					[inactiveCls]: theme === 'inactive',
					[activeCls]: theme === 'active',
				},
				className
			)}
		>
			<UiTypography font='Muller-M' tag='p'>
				{children}
			</UiTypography>
		</Tag>
	)
}

export { UiPlaque, type TUiPlaqueProps }
