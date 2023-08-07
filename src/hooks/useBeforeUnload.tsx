import { useEffect } from 'react'

const useBeforeUnload = (callback: () => void) => {
	useEffect(() => {
		const handleUnload = () => callback()

		window.addEventListener('beforeunload', handleUnload)
		return () => window.removeEventListener('beforeunload', handleUnload)
	}, [callback])
}

export default useBeforeUnload
