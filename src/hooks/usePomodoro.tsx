import { useState, useEffect, useRef, useContext } from 'react'
import useTimer from './useTimer'
import JSConfetti from 'js-confetti'
import { UserContext } from '../contexts/UserContext'
import { ActionType, UserContextType } from '../types'
import { useUpdatableState } from './useUpdatableState'
import useBeforeUnload from './useBeforeUnload'

const getSavedTimerData = () => {
	const jsonSavedTimerData = window.localStorage.getItem('timer-data')
	if (!jsonSavedTimerData) return
	const savedTimerData = JSON.parse(jsonSavedTimerData)

	return savedTimerData
}

const usePomodoro = () => {
	const { userPreferences } = useContext(UserContext) as UserContextType

	const savedTimerData = getSavedTimerData()
	const timerData = {
		action: savedTimerData?.action || 'focus',
		expiryTime: userPreferences.focusTime,
		intervals: savedTimerData?.intervals || 0,
	}

	const [action, setAction] = useState<ActionType>(timerData.action)
	const [expiryTime, setExpiryTime] = useUpdatableState(timerData.expiryTime)

	const [intervals, setIntervals] = useState(timerData.intervals)

	const defaultTitleRef = useRef(document.title)

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
		// eslint-disable-next-line
	}, [remainingTime])

	useBeforeUnload(() => {
		const timerData = {
			action: action,
			intervals: intervals,
		}
		window.localStorage.setItem('timer-data', JSON.stringify(timerData))
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
