import { createContext, ReactNode } from 'react'
import { SettingsContextType } from '../types'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

export const SettingsContext = createContext<SettingsContextType | null>(null)

export const SettingsContextProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const defaultUserPreferences = {
		focusTime: 1200,
		breakTime: 600,
		longBreakTime: 1200,
		target: 4,
		minimalisticMode: true,
		accentColor: '#36b458',
		wallpaper: null,
	}

	const [settings, setSettings] = useLocalStorageState(
		'settings',
		defaultUserPreferences
	)

	return (
		<SettingsContext.Provider value={{ settings, setSettings }}>
			{children}
		</SettingsContext.Provider>
	)
}
