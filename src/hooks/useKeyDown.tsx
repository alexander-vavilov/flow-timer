import { useEffect } from 'react'

const useKeyDown = (handler: (e: KeyboardEvent) => void) => {
	useEffect(() => {
		document.addEventListener('keydown', handler)
		return () => document.removeEventListener('keydown', handler)
	}, [handler])
}

export default useKeyDown
