import { useState, useEffect } from 'react'
import { useInterval } from './useInterval'

type useTimerType = {
	expiryTime: number
	onExpire?: () => void
}

const useTimer = ({ expiryTime: expiry, onExpire }: useTimerType) => {
	const [isActive, setIsActive] = useState(false)

	const [remainingTime, setRemainingTime] = useState(expiry)
	const progress = 100 - (remainingTime / expiry) * 100

	const hours = Math.floor(remainingTime / 3600)
	const minutes = Math.floor((remainingTime % 3600) / 60)
	const seconds = remainingTime % 60

	const stringHours = hours ? `${String(hours).padStart(2, '0')}:` : ''
	const stringMinutes = String(minutes).padStart(2, '0')
	const stringSeconds = String(seconds).padStart(2, '0')
	const stringTime = `${stringHours}${stringMinutes}:${stringSeconds}`

	useEffect(() => {
		if (isActive || progress !== 0) return

		setRemainingTime(expiry)
	}, [expiry, isActive, progress])

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
		},
		isActive ? 1000 : null
	)

	return {
		isActive,
		remainingTime,
		hours,
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
