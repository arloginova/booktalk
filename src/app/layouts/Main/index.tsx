import { Header } from '@/widgets/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {}
const Main: FC<Props> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export { Main }
