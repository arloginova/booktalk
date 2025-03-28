import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography, Input, Button } from '@/shared/ui'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { MD } from '@/shared/constants'

interface Props extends TClassName {}
const Content: FC<Props> = ({ className }) => {
	const screen = useScreen()
	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography tag='h1' size={screen >= MD ? 36 : 25} font='Raleway-SB'>
				На данный момент наш сайт находится в разработке
			</Typography>
			<div className={cn(cls.content)}>
				<Typography size={screen >= MD ? 20 : 18} font='Raleway-M' tag='h2'>
					Подпишитесь на наши обновления, чтобы узнать о нашем запуске первыми
				</Typography>
				<div className={cn(cls.actions)}>
					<Input placeholder='Адрес Email' />
					<Button>Подписаться</Button>
				</div>
			</div>
		</div>
	)
}

export { Content }
