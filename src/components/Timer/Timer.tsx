import TimerCircle from './TimerCircle'
import TimerIntervals from './TimerIntervals'
import TimerButton from './TimerButton'
import { IoIosArrowForward, IoMdRefresh } from 'react-icons/io'
import { IoCogOutline, IoStatsChartOutline } from 'react-icons/io5'
import { Link, Route, Routes } from 'react-router-dom'
import { Settings, Statistics } from '../../pages'
import IconButton from '../IconButton'
import usePomodoro from '../../hooks/usePomodoro'
import useKeyDown from '../../hooks/useKeyDown'
import { SettingsContextProvider } from '../../contexts/SettingsContext'

const Timer = () => {
	const {
		isActive,
		action,
		stringTime,
		toggle,
		skip,
		fullReset,
		intervals,
		currentInterval,
		progress,
	} = usePomodoro()

	useKeyDown((e: KeyboardEvent) => {
		if (e.code === 'Space') toggle()
	})

	return (
		<div className='relative flex flex-col justify-center items-center gap-5'>
			<div className='-mb-10'>
				<Routes>
					<Route path='statistics' element={<Statistics />} />
					<Route
						path='settings'
						element={
							<SettingsContextProvider>
								<Settings />
							</SettingsContextProvider>
						}
					/>
				</Routes>
			</div>

			<div className='relative'>
				<span className='text-2xl capitalize'>{action}</span>
				<div className='fixed short:absolute top-4 short:top-1/2 short:-translate-y-1/2 right-4 short:-right-16 flex items-center'>
					{action === 'break' && (
						<IconButton
							icon={IoIosArrowForward}
							size={26}
							ariaLabel='skip break'
							onClick={skip}
						/>
					)}
					<IconButton
						icon={IoMdRefresh}
						size={26}
						ariaLabel='reset'
						onClick={fullReset}
					/>
					<div className='flex short:hidden'>
						<Link
							to='statistics'
							className='px-2 py-1 text-white/60 hover:text-white transition-colors duration-300'
						>
							<IoStatsChartOutline size={22} />
						</Link>
						<Link
							to='settings'
							className='px-2 py-1 text-white/60 hover:text-white transition-colors duration-300'
						>
							<IoCogOutline size={26} />
						</Link>
					</div>
				</div>
			</div>
			<TimerCircle
				action={action}
				progress={progress}
				stringTime={stringTime}
			/>
			<TimerIntervals
				completedIntervals={intervals}
				currentInterval={currentInterval}
			/>
			<TimerButton isActive={isActive} toggle={toggle} />
		</div>
	)
}

export default Timer
