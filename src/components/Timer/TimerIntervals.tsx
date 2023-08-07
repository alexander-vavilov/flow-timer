import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UserContextType } from '../../types'

type TimerIntervalsProps = {
	completedIntervals: number
	currentInterval: number | null
}

const TimerIntervals = ({
	completedIntervals,
	currentInterval,
}: TimerIntervalsProps) => {
	const { userPreferences } = useContext(UserContext) as UserContextType

	return (
		<div className='flex flex-col items-center gap-2'>
			{!userPreferences.minimalisticMode && (
				<span>
					{completedIntervals}/{userPreferences.target}
				</span>
			)}
			<div className='flex items-center gap-4'>
				{Array.from({ length: userPreferences.target }, (_, index) => {
					const isActiveInterval = currentInterval === index + 1
					const isCompletedInterval = completedIntervals > index

					const dynamicClasses = `relative w-3 h-3 ${
						isActiveInterval
							? 'after:absolute after:top-0 after:-left-1/2 after:w-full after:h-full after:bg-white'
							: ''
					} ${
						isCompletedInterval ? 'bg-white' : 'border-2 border-white'
					} rounded-full overflow-hidden`

					return <div key={index} className={dynamicClasses} />
				})}
			</div>
		</div>
	)
}

export default TimerIntervals
