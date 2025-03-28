import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

interface Props extends TChildren {}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export { MainLayout }
