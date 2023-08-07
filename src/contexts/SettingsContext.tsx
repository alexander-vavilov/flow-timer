import { createContext, useContext, useState, ReactNode } from 'react'
import { UserContext } from './UserContext'
import { SettingsContextType, UserContextType } from '../types'

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const SettingsContextProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const { userPreferences } = useContext(UserContext) as UserContextType
	const [settings, setSettings] = useState(userPreferences)

	return (
		<SettingsContext.Provider value={{ settings, setSettings }}>
			{children}
		</SettingsContext.Provider>
	)
}
