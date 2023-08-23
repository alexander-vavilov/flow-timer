import { useState, useEffect, createContext, ReactNode } from 'react'
import { CurrentUserStateType, UserContextType } from '../types'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
import Loading from '../components/Loading'
import { doc, getDoc } from 'firebase/firestore'

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<CurrentUserStateType>()
	const [isLoading, setIsLoading] = useState(true)

	const defaultUserPreferences = {
		focusTime: 1200,
		breakTime: 600,
		longBreakTime: 1200,
		target: 4,
		minimalisticMode: false,
		accentColor: '#0d9488',
	}
	const [userPreferences, setUserPreferences] = useState(defaultUserPreferences)

	useEffect(() => {
		onAuthStateChanged(auth, async user => {
			if (user) {
				setCurrentUser(user)

				const docSnap = await getDoc(doc(db, 'users', user.uid))
				if (docSnap.exists()) {
					setUserPreferences({
						...defaultUserPreferences,
						...docSnap.data().userPreferences,
					})
				}
			} else {
				setCurrentUser(null)
			}
			setIsLoading(false)
		})
	}, [])

	return (
		<UserContext.Provider
			value={{
				currentUser,
				setCurrentUser,
				userPreferences,
				setUserPreferences,
				isLoading,
			}}
		>
			{isLoading ? (
				<div className='flex justify-center items-center w-full h-dynamic-screen'>
					<Loading />
				</div>
			) : (
				children
			)}
		</UserContext.Provider>
	)
}
