import { FC, ReactNode } from 'react'

interface ITimeSetting {
	children: ReactNode
	label: string
}

const TimeSetting: FC<ITimeSetting> = ({ children, label }) => {
	return (
		<div className='flex items-center justify-between p-1 pl-3 bg-zinc-800 rounded-lg'>
			<h3 className='text-lg'>{label}</h3>
			{children}
		</div>
	)
}

export default TimeSetting
