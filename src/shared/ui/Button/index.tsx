import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/shared/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG } from '@/shared/constants'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: FC<Props> = ({ className, children, ...other }) => {
	const screen = useScreen()
	return (
		<button className={cn(cls.btn, [className])} {...other}>
			<Typography font='Raleway-M' size={screen >= LG ? 16 : 12}>
				{children}
			</Typography>
		</button>
	)
}

export { Button }
