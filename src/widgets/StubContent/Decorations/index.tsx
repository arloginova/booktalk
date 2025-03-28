import { FC } from 'react'
import cls from './index.module.scss'
import { LowStar, BigStar, Pentagon } from '@/shared/icons'
import { cn } from '@/shared/lib'

interface Props {}
const Decorations: FC<Props> = ({}) => {
	return (
		<>
			<LowStar
				className={cn(cls.decor, [cls.lowStar1])}
				color='var(--orange-200)'
			/>
			<LowStar
				className={cn(cls.decor, [cls.lowStar2])}
				color='var(--white-400)'
			/>
			<LowStar
				className={cn(cls.decor, [cls.lowStar3])}
				color='var(--black-100)'
			/>
			<BigStar
				className={cn(cls.decor, [cls.bigStar1])}
				color='var(--orange-200)'
			/>
			<BigStar
				className={cn(cls.decor, [cls.bigStar2])}
				color='var(--white-400)'
			/>
			<BigStar
				className={cn(cls.decor, [cls.bigStar3])}
				color='var(--black-100)'
			/>
			<Pentagon
				className={cn(cls.decor, [cls.pentagon1])}
				color='var(--orange-200)'
			/>
			<Pentagon
				className={cn(cls.decor, [cls.pentagon2])}
				color='var(--white-400)'
			/>
			<Pentagon
				className={cn(cls.decor, [cls.pentagon3])}
				color='var(--black-100)'
			/>
			<img
				src='images/Stub/Content/background-boy.png'
				alt='Boy'
				className={cn(cls.decor, [cls.background_boy])}
			/>
			<img
				src='images/Stub/Content/background-girl.png'
				alt='Girl'
				className={cn(cls.decor, [cls.background_girl])}
			/>
		</>
	)
}

export { Decorations }
