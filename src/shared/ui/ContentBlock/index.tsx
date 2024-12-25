import { FC, ReactNode } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Plaque } from '../Plaque'
import { Typography } from '../Typography'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'
import cls from './index.module.scss'

interface Props extends TClassName {
	plaque: string
	title: string
	subtitle: ReactNode
	endContent?: ReactNode
	plaqueCls?: string
	titleCls?: string
	subtitleCls?: string
	contentCls?: string
	subtitleMid?: ReactNode
	subtitleLow?: ReactNode
}
const ContentBlock: FC<Props> = ({
	endContent,
	plaque,
	subtitle,
	title,
	className,
	contentCls,
	plaqueCls,
	subtitleCls,
	titleCls,
	subtitleMid,
	subtitleLow,
}) => {
	const screen = useScreen()

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Plaque className={plaqueCls}>{plaque}</Plaque>
			<div className={cn(cls.content, [contentCls])}>
				<Typography
					size={screen >= LG ? 24 : 17}
					font='Raleway-SB'
					tag='h2'
					className={titleCls}
				>
					{title}
				</Typography>
				<Typography
					size={screen >= LG ? 20 : screen >= MD ? 16 : 15}
					font='Raleway-M'
					tag='h3'
					className={subtitleCls}
				>
					{subtitleMid && screen <= LG && screen > MD
						? subtitleMid
						: subtitleLow && screen <= MD
						? subtitleLow
						: subtitle}
				</Typography>
				{endContent}
			</div>
		</div>
	)
}

export { ContentBlock }
