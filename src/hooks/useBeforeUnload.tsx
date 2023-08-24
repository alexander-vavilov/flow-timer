import { useEffect } from 'react'

export const useBeforeUnload = (callback: () => void) => {
	useEffect(() => {
		const handleUnload = () => callback()

		// window.addEventListener('beforeunload', handleUnload)
		window.addEventListener('pagehide', handleUnload)

		return () => {
			// window.removeEventListener('beforeunload', handleUnload)
			window.removeEventListener('pagehide', handleUnload)
		}
	}, [callback])
}

export default useBeforeUnload
