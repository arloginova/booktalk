import { HomePage } from '@/pages/Home'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Main'
import { StubPage } from '@/pages/Stub'

interface Props {}
const RoutesLayout: FC<Props> = ({}) => {
	return (
		<Routes>
			<Route element={<Main />}>
				<Route index element={<HomePage />} />
				<Route path='/stub' element={<StubPage />} />
			</Route>
		</Routes>
	)
}

export { RoutesLayout }
