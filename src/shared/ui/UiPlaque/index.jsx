import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'

const wrapperCls =
	'px-2.5 py-1 rounded-full uppercase w-max lg-big:text-base text-xs'
const inactiveCls = ' bg-greyBackground'
const activeCls = ' bg-orangeMain text-whiteMain'

const UiPlaque = ({
					  className,
					  children,
					  theme = 'inactive',
					  Tag = 'div',
					  font = "Raleway-M"
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
			<UiTypography font={font} tag='p'>
				{children}
			</UiTypography>
		</Tag>
	)
}

export { UiPlaque }