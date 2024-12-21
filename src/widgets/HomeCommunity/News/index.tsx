import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { NewsItem } from '../NewsItem'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG } from '@/shared/constants'

interface Props extends TClassName {}
const News: FC<Props> = ({ className }) => {
	const screen = useScreen()
	return (
		<ul className={cn(cls.news, [className])}>
			<NewsItem
				images={[
					'images/Home/Community/item-1.png',
					'images/Home/Community/item-2.png',
				]}
				className={cn(cls.item)}
			>
				Предлагаем вам обратить внимание на наши фавориты новогодней подборки💔
				Уверены, останетесь в восторге! Приятного прочтения☺️
			</NewsItem>
			{screen >= LG && (
				<NewsItem
					images={[
						'images/Home/Community/item-3.png',
						'images/Home/Community/item-4.png',
					]}
					className={cn(cls.item)}
				>
					Нашумевшая книга… за короткий срок собрало множество наград. Кажется,
					если встанет вопрос о том, что стоит экранизировать, уже есть
					ответ…🐉🖤
				</NewsItem>
			)}
		</ul>
	)
}

export { News }
