import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { UserContextProvider, UserContext } from './contexts/UserContext'
import { useContext } from 'react'
import { UserContextType } from './types'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const { currentUser } = useContext(UserContext) as UserContextType

	if (currentUser === null) return <Navigate to='/login' />
	return children
}

const App: FC = () => {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Navigate to='/app' />} />
				<Route
					path='/app/*'
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</UserContextProvider>
	)
}

export default App
