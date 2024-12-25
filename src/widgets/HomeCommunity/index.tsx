import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Button, Container, ContentBlock } from '@/shared/ui'
import { News } from './News'
import { ImageBlock } from './ImageBlock'
import { Input } from '@/shared/ui'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { MD } from '@/shared/constants'

interface Props extends TModuleClassName {}
const HomeCommunity: FC<Props> = ({ className, wrapperClassName }) => {
	const screen = useScreen()
	return (
		<section
			className={cn(cls.wrapper, [wrapperClassName, 'scrollbar-top-margin'])}
			id='COMMUNITY'
		>
			<Container className={cn(cls.container, [className])}>
				<ContentBlock
					plaque='Сообщество'
					subtitle={
						<>
							Книжный telegram канал с регулярными обновлениями новинок книг и
							рецензий. Подписывайтесь, чтобы быть
							<br />в курсе всех книжных событий
						</>
					}
					subtitleLow={
						<>
							Книжный telegram канал с регулярными
							<br />
							обновлениями новинок книг и рецензий.
							<br />
							Подписывайтесь, чтобы быть в курсе всех
							<br />
							книжных событий
						</>
					}
					subtitleMid={
						<>
							Книжный telegram канал с регулярными
							<br />
							обновлениями новинок книг и рецензий.
							<br />
							Подписывайтесь, чтобы быть в курсе
							<br />
							всех книжных событий
						</>
					}
					title='наше сообщество'
					endContent={<Button className={cn(cls.btn)}>@btalkcom</Button>}
					subtitleCls={cn(cls.community_subtitle)}
					className={cn(cls.block, [cls.community])}
				/>
				{screen >= MD && <News className={cn(cls.block, [cls.news])} />}
				<ImageBlock className={cn(cls.block, [cls.image_block])} />
				<ContentBlock
					subtitleCls={cn(cls.newsletter_subtitle)}
					plaque='рассылка'
					subtitle='Подпишитесь на рассылку и узнайте первыми 
о запуске платформы'
					title='совсем скоро запуск!'
					endContent={
						<div className={cn(cls.mail_content)}>
							<Input placeholder='Адрес Email' />
							<Button>Подписаться</Button>
						</div>
					}
					className={cn(cls.block, [cls.newsletter])}
				/>
			</Container>
		</section>
	)
}

export { HomeCommunity }
