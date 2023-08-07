import { useEffect, useRef } from 'react'

export const useClickAway = (handler: () => void) => {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleClickAway = (e: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) handler()
		}

		document.addEventListener('mousedown', handleClickAway)
		document.addEventListener('touchstart', handleClickAway)

		return () => {
			document.removeEventListener('mousedown', handleClickAway)
			document.removeEventListener('touchstart', handleClickAway)
		}
	}, [handler])

	return ref
}
