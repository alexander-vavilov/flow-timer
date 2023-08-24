import { FC } from 'react'
import TimeSetting from './TimeSetting'
import FocusSelect from './Selects/FocusSelect'
import BreakSelect from './Selects/BreakSelect'
import LongBreakSelect from './Selects/LongBreakSelect'
import TargetSelect from './Selects/TargetSelect'

const SettingsSelects: FC = () => {
	return (
		<div className='flex flex-col gap-2'>
			<TimeSetting label='Focus duration'>
				<FocusSelect />
			</TimeSetting>
			<TimeSetting label='Break duration'>
				<BreakSelect />
			</TimeSetting>
			<TimeSetting label='Long break duration'>
				<LongBreakSelect />
			</TimeSetting>
			<TimeSetting label='Target'>
				<TargetSelect />
			</TimeSetting>
		</div>
	)
}

export default SettingsSelects
