import { FC, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const Input: FC<Props> = ({ className, ...other }) => {
	return <input className={cn(cls.input, [className])} {...other} />
}

export { Input }
