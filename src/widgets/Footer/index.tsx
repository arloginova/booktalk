import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container, Typography, TypographyLink } from '@/shared/ui'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'

interface Props extends TModuleClassName {}
const Footer: FC<Props> = ({ className, wrapperClassName }) => {
	const screen = useScreen()

	return (
		<footer className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<Typography
					size={screen >= LG ? 18 : screen >= MD ? 14 : 8}
					font='Raleway-M'
					tag='h4'
				>
					ООО «BOOKTALK NN»
				</Typography>
				<div className={cn(cls.content)}>
					<TypographyLink
						font='Raleway-M'
						size={screen >= LG ? 18 : screen >= MD ? 14 : 8}
						href='#'
					>
						Политика конфиденциальности
					</TypographyLink>
					<Typography
						size={screen >= LG ? 18 : screen >= MD ? 14 : 8}
						font='Raleway-M'
						tag='h5'
					>
						2024 г.
					</Typography>
				</div>
			</Container>
		</footer>
	)
}

export { Footer }
