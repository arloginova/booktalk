import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Button, Container, Typography } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG } from '@/shared/constants'

interface Props extends TModuleClassName {}
const HomeHead: FC<Props> = ({ className, wrapperClassName }) => {
	const navigator = useNavigate()
	const screen = useScreen()

	return (
		<section className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<div className={cn(cls.content)}>
					<Typography tag='h1' size={screen >= LG ? 36 : 26} font='Raleway-SB'>
						не знаете, какую книгу выбрать?
					</Typography>
					<Typography tag='h2' size={screen >= LG ? 20 : 16} font='Raleway-M'>
						Поможем вам найти новые книги, которые вы захотите прочитать и
						обсудить с друзьями
					</Typography>
					<Button
						className={cn(cls.btn)}
						onClick={() => {
							navigator('/stub')
						}}
					>
						присоединиться
					</Button>
				</div>
			</Container>
		</section>
	)
}

export { HomeHead }
