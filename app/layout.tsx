import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider, ReduxProvider } from '@/app/layouts'
import YandexMetrika from '@/app/layouts/YandexMetric'

const analyticsEnabled = !!(process.env.NODE_ENV === "production")

export const metadata: Metadata = {
	title: 'Booktalk',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={''}>
				<ReduxProvider>
					<QueryProvider>{children}</QueryProvider>
				</ReduxProvider>
			</body>
			<YandexMetrika enabled={analyticsEnabled} />
		</html>
	)
}
