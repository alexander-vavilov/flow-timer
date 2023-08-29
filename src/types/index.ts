type UserPreferencesType = {
	focusTime: number
	breakTime: number
	longBreakTime: number
	target: number
	minimalisticMode: boolean
	accentColor: string
	wallpaper: null | string
}

export type SettingsContextType = {
	settings: UserPreferencesType
	setSettings: React.Dispatch<React.SetStateAction<UserPreferencesType>>
}

export type ActionType = 'focus' | 'break' | 'longBreak'

export interface IPhoto {
	id: string
	alt_description: string
	urls: {
		full: string
		small_s3: string
	}
	user: {
		name: string
		links: { html: string }
	}
}

export interface ISelectOption {
	value: number
	label: string
}
