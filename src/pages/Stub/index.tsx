import { FC } from 'react'
import { cn } from '@/shared/lib'
import { StubContent } from '@/widgets/StubContent'
import cls from './index.module.scss'

interface Props {}
const StubPage: FC<Props> = ({}) => {
	return (
		<main className={cn(cls.main)}>
			<StubContent wrapperClassName='modules-gap-top' />
		</main>
	)
}

export { StubPage }
