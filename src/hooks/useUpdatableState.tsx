import { useState, useEffect } from 'react'

export const useUpdatableState = (value: any, isUpdatable: boolean = true) => {
	const [state, setState] = useState(value)

	useEffect(() => {
		if (!isUpdatable) return

		setState(value)
	}, [value])

	return [state, setState]
}
