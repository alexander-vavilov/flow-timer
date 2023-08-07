import { useState, useEffect, useRef, useContext } from 'react'
import useTimer from './useTimer'
import JSConfetti from 'js-confetti'
import { UserContext } from '../contexts/UserContext'
import { ActionType, UserContextType } from '../types'
import { useBeforeUnload } from 'react-router-dom'

const getSavedTimerData = () => {
	const jsonSavedTimerData = localStorage.getItem('timer-data')

	if (!jsonSavedTimerData) return
	return JSON.parse(jsonSavedTimerData)
}

const usePomodoro = () => {
	const { userPreferences } = useContext(UserContext) as UserContextType
	const savedTimerData = getSavedTimerData()

	const [action, setAction] = useState<ActionType>(
		savedTimerData?.action || 'focus'
	)
	const [expiryTime, setExpiryTime] = useState(
		savedTimerData?.expiryTime || userPreferences.focusTime
	)

	const [intervals, setIntervals] = useState(savedTimerData?.intervals || 0)

	const defaultTitleRef = useRef(document.title)

	useEffect(() => {
		setExpiryTime(userPreferences.focusTime)
	}, [userPreferences.focusTime])

	const {
		isActive,
		remainingTime,
		stringTime,
		start,
		pause,
		toggle,
		reset,
		progress,
	} = useTimer({
		expiryTime,
		onExpire,
	})

	const currentInterval =
		action === 'focus' && remainingTime < expiryTime ? intervals + 1 : null

	const congratulate = () => {
		const jsConfetti = new JSConfetti()
		jsConfetti.addConfetti({
			emojis: ['🌈', '🦄', '✨', '⚡️', '💥', '💫', '🌸'],
			emojiSize: 50,
		})
	}

	const switchToFocus = () => {
		setAction('focus')
		setExpiryTime(userPreferences.focusTime)
		reset(userPreferences.focusTime)
	}

	const handleSkipBreak = () => {
		switchToFocus()
		start()
	}

	const fullReset = () => {
		switchToFocus()
		setIntervals(0)
	}

	function onExpire() {
		let newExpiryTime: number
		const newIntervals = intervals + 1

		switch (action) {
			case 'focus':
				setIntervals(newIntervals)
				if (newIntervals === userPreferences.target / 2) {
					setAction('longBreak')
					newExpiryTime = userPreferences.longBreakTime
				} else {
					setAction('break')
					newExpiryTime = userPreferences.breakTime
				}
				break
			case 'break':
			case 'longBreak':
				setAction('focus')
				newExpiryTime = userPreferences.focusTime
				break
		}
		setExpiryTime(newExpiryTime)
		reset(newExpiryTime)

		if (newIntervals === userPreferences.target) {
			congratulate()
			fullReset()
		}
	}

	useEffect(() => {
		if (remainingTime === expiryTime) return

		const defaultTitle = defaultTitleRef.current
		document.title = `${stringTime} - ${action}`

		return () => {
			document.title = defaultTitle
		}
	}, [remainingTime])

	useBeforeUnload(() => {
		const timerData = {
			expiryTime: remainingTime,
			action: action,
			intervals: intervals,
		}
		localStorage.setItem('timer-data', JSON.stringify(timerData))
	})

	return {
		isActive,
		action,
		remainingTime,
		stringTime,
		start,
		pause,
		toggle,
		reset,
		fullReset,
		skip: handleSkipBreak,
		intervals,
		currentInterval,
		progress,
	}
}

export default usePomodoro
