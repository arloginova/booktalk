import './globals.css';
import { QueryProvider, ReduxProvider } from '@/app/layouts';
import YandexMetrika from '@/app/layouts/YandexMetric';
import { Analytics } from '@vercel/analytics/next';
import {SpeedInsights} from "@vercel/speed-insights/next";

const analyticsEnabled = !!(process.env.NODE_ENV === 'production');

export const metadata = {
	title: 'Booktalk',
	description: '',
	icons: {
		icon: '/images/favicon.webp', // /public path
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
		<body className={''}>
		<ReduxProvider>
			<QueryProvider>{children}</QueryProvider>
		</ReduxProvider>
		<Analytics />
		<SpeedInsights />
		</body>
		<YandexMetrika enabled={analyticsEnabled} />
		</html>
	);
}