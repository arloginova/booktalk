import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Genres } from './Genres'
import { ImageBlock } from './ImageBlock'
import { ContentBlock } from '@/shared/ui'
import cls from './index.module.scss'

interface Props extends TModuleClassName {}
const HomePossibilities: FC<Props> = ({ className, wrapperClassName }) => {
	return (
		<section
			className={cn(cls.wrapper, [wrapperClassName, 'scrollbar-top-margin'])}
			id='POSSIBILITIES'
		>
			<Container className={cn(cls.container, [className])}>
				<ContentBlock
					plaque='возможности'
					title='Подборки'
					subtitle='Наша платформа объединяет читателей разных возрастов и предпочтений, предлагая множество различных подборок по жанрам и настроению'
					className={cn(cls.block, [cls.possibilities])}
				/>
				<Genres className={cn(cls.block, [cls.genres])} />
				<ImageBlock className={cn(cls.block, [cls.images_block])} />
				<ContentBlock
					plaque='возможности'
					title='тест'
					subtitle='Благодаря тесту вы так же можете получить индивидуальную подборку, которая будет 
обновляться с выходом новых книг и рецензий'
					className={cn(cls.block, [cls.test])}
				/>
			</Container>
		</section>
	)
}

export { HomePossibilities }
