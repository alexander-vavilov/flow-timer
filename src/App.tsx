import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { SettingsContextProvider } from './contexts/SettingsContext'

const App: FC = () => {
	return (
		<SettingsContextProvider>
			<Routes>
				<Route path='/' element={<Navigate to='/app' />} />
				<Route path='/app/*' element={<Home />} />
			</Routes>
		</SettingsContextProvider>
	)
}

export default App
