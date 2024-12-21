import { FC } from 'react'
import cls from './index.module.scss'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Item } from './Item'

interface Props extends TModuleClassName {}
const HomeInformation: FC<Props> = ({ className, wrapperClassName }) => {
	return (
		<section className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])} tag='ul'>
				<Item
					title='50+'
					content={{
						title: 'клубов',
						subtitle: 'Возможность создавать и вступать в книжные клубы',
					}}
				/>
				<Item
					title='60+'
					content={{
						title: 'обзоров',
						subtitle: 'Доступ к любительским и экспертным обзорам',
					}}
				/>
				<Item
					title='15+'
					content={{
						title: 'подборок',
						subtitle: 'Персонализированные подборки и рекомендации',
					}}
				/>
			</Container>
		</section>
	)
}

export { HomeInformation }
