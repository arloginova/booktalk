'use client'
import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { Provider } from 'react-redux'
import { store } from '@/shared/store'

interface Props extends TChildren {}

const ReduxProvider: FC<Props> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export { ReduxProvider }
