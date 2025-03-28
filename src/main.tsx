import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss'
import App from './app/App'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<App />
	</HashRouter>
)
