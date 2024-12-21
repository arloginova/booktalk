import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Button, Container, TypographyLink } from '@/shared/ui'
import { Logo } from '../Logo'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'
import cls from './index.module.scss'

interface Props extends TModuleClassName {}
const Header: FC<Props> = ({ className, wrapperClassName }) => {
	const screen = useScreen()

	return (
		<section className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<Logo
					className={cn(cls.logo)}
					partFirstCls={cn(cls.part_1)}
					partSecondCls={cn(cls.part_2)}
				/>
				{screen >= MD ? (
					<div className={cn(cls.content)}>
						<nav className={cn(cls.navigation)}>
							<TypographyLink
								href='/#POSSIBILITIES'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								возможности
							</TypographyLink>
							<TypographyLink
								href='/#QUESTIONS'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								вопросы
							</TypographyLink>
							<TypographyLink
								href='/#COMMUNITY'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								сообщество
							</TypographyLink>
						</nav>
						<Button>Вступить в клуб</Button>
					</div>
				) : (
					<>
						<nav className={cn(cls.navigation)}>
							<TypographyLink
								href='/#POSSIBILITIES'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								возможности
							</TypographyLink>
							<TypographyLink
								href='/#QUESTIONS'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								вопросы
							</TypographyLink>
							<TypographyLink
								href='/#COMMUNITY'
								size={screen >= LG ? 16 : 12}
								font='Raleway-M'
							>
								сообщество
							</TypographyLink>
						</nav>
						<Button>Вступить в клуб</Button>
					</>
				)}
			</Container>
		</section>
	)
}

export { Header }
