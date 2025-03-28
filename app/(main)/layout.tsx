import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { MainLayout } from '@/app/layouts'

interface Props extends TChildren {}

const Main: FC<Props> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default Main
