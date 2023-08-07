export type CurrentUserType = {
	displayName: null | string
	photoURL: null | string
	email: string | null
	uid: string
}
export type CurrentUserStateType = undefined | null | CurrentUserType

type UserPreferencesType = {
	focusTime: number
	breakTime: number
	longBreakTime: number
	target: number
	wallpaper?: string
	minimalisticMode: boolean
	accentColor: string
}

export type UserContextType = {
	currentUser: CurrentUserStateType
	setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUserStateType>>
	userPreferences: UserPreferencesType
	setUserPreferences: React.Dispatch<React.SetStateAction<UserPreferencesType>>
	isLoading: boolean
}

export type SettingsContextType = {
	settings: UserPreferencesType
	setSettings: React.Dispatch<React.SetStateAction<UserPreferencesType>>
}

export type ActionType = 'focus' | 'break' | 'longBreak'
