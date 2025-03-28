import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Item } from './Item'
import cls from './index.module.scss'

interface Props extends TModuleClassName {}
const HomeQuestions: FC<Props> = ({ className, wrapperClassName }) => {
	return (
		<section
			className={cn(cls.wrapper, [wrapperClassName, 'scrollbar-top-margin'])}
			id='QUESTIONS'
		>
			<Container className={cn(cls.container, [className])}>
				<div className={cn(cls.content)}>
					<Item
						questions={[
							'Что такое книжный клуб?',
							'Как создаётся личная подборка?',
							'Как УЗНАТЬ ЧТО ЧИТАЮТ ДРУЗЬЯ?',
							'Как ОБНОВЛЯЮТСЯ РАЗДЕЛЫ?',
						]}
						tailDirection='left'
						theme='white'
						className={cn(cls.item)}
					/>
					<Item
						questions={[
							'Вы можете не только вступать в уже существующие клубы, но так же создавать новые и приглашать друзей',
							'Чтобы узнать, что читают ваши друзья, вы сможете подписаться на их профиль и следить за обновлениями',
							'Все разделы и подборки, включая личные, регулярно обновляются с выходом новых книг',
							'Ваша личная подборка создается на основе результатов пройденного теста и регулярно обновляется',
						]}
						tailDirection='right'
						theme='black'
						className={cn(cls.item)}
					/>
					<Item
						questions={[
							'Как создаётся личная подборка?',
							'Как УЗНАТЬ ЧТО ЧИТАЮТ ДРУЗЬЯ?',
							'Как ОБНОВЛЯЮТСЯ РАЗДЕЛЫ?',
							'Что такое книжный клуб?',
						]}
						tailDirection='left'
						theme='white'
						className={cn(cls.item, [cls.opacity])}
					/>
				</div>
			</Container>
		</section>
	)
}

export { HomeQuestions }
