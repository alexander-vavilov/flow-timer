import { useEffect, useState } from 'react'

export const useLocalStorageState = (key: string, initialValue: any) => {
	const [state, setState] = useState(() => {
		const item = window.localStorage.getItem(key)
		return item ? JSON.parse(item) : initialValue
	})

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}
