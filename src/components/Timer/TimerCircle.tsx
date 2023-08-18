import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { ActionType, UserContextType } from '../../types'

type TimerCircleProps = {
	action: ActionType
	progress: number
	stringTime: string
}

const TimerCircle = ({ action, progress, stringTime }: TimerCircleProps) => {
	const { userPreferences } = useContext(UserContext) as UserContextType
	const color = action === 'focus' ? userPreferences.accentColor : '#16a34a'

	return (
		<div className='relative'>
			{!userPreferences.minimalisticMode && (
				<div
					className='flex justify-center items-center w-60 h-60 bg-gray-800/50 backdrop-blur-sm border-8 rounded-full'
					style={{ borderColor: color }}
				>
					<div
						className='absolute h-[113%] transition-transform duration-300'
						style={{ transform: `rotate(${progress * 3.6}deg)` }}
					>
						<div
							className='w-5 h-5 bg-white border-4 shadow-black rounded-full'
							style={{ borderColor: color }}
						/>
					</div>
				</div>
			)}
			<span
				className={`${
					userPreferences.minimalisticMode
						? 'text-7xl'
						: 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl'
				} tracking-wide select-none`}
			>
				{stringTime}
			</span>
		</div>
	)
}

export default TimerCircle
