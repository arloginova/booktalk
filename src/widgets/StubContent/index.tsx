import { FC } from 'react'
import { TModuleClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { Decorations } from './Decorations'
import { Content } from './Content'
import cls from './index.module.scss'

interface Props extends TModuleClassName {}
const StubContent: FC<Props> = ({ wrapperClassName, className }) => {
	return (
		<section className={cn(cls.wrapper, [wrapperClassName])}>
			<Container className={cn(cls.container, [className])}>
				<Decorations />
				<Content className={cn(cls.content)} />
			</Container>
		</section>
	)
}

export { StubContent }
