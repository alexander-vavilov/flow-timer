import { useState } from 'react'
import { useInterval } from './useInterval'
import { useUpdatableState } from './useUpdatableState'

type useTimerType = {
	expiryTime: number
	onExpire?: () => void
}

const useTimer = ({ expiryTime: expiry, onExpire }: useTimerType) => {
	const [isActive, setIsActive] = useState(false)

	const [progress, setProgress] = useState(0)
	const [remainingTime, setRemainingTime] = useUpdatableState(
		expiry,
		!isActive && progress <= 0
	)

	const minutes = Math.floor(remainingTime / 60)
	const seconds = remainingTime % 60

	const stringMinutes = String(minutes).padStart(2, '0')
	const stringSeconds = String(seconds).padStart(2, '0')
	const stringTime = `${stringMinutes}:${stringSeconds}`

	const handleStartTimer = () => {
		setIsActive(true)
	}

	const handlePauseTimer = () => {
		setIsActive(false)
	}

	const handleToggleTimer = () => {
		setIsActive(prevActiveValue => !prevActiveValue)
	}

	const handleResetTimer = (newExpiryTime = expiry) => {
		setIsActive(false)
		setRemainingTime(newExpiryTime)
	}

	useInterval(
		() => {
			if (remainingTime <= 0) return onExpire && onExpire()

			setRemainingTime((prevRemainingTime: number) => prevRemainingTime - 1)
			setProgress(100 - (remainingTime / expiry) * 100)
		},
		isActive ? 1000 : null
	)

	return {
		isActive,
		remainingTime,
		minutes,
		seconds,
		stringTime,
		start: handleStartTimer,
		pause: handlePauseTimer,
		toggle: handleToggleTimer,
		reset: handleResetTimer,
		progress,
	}
}

export default useTimer
