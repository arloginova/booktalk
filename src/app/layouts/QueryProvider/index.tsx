'use client'
import { FC } from 'react'
import { TChildren } from '@/shared/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props extends TChildren {}

const QueryProvider: FC<Props> = ({ children }) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export { QueryProvider }
