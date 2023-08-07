import React from 'react'
import FocusTimeSelect from './FocusTimeSelect'
import BreakTimeSelect from './BreakTimeSelect'
import LongBreakTimeSelect from './LongBreakTimeSelect'
import TargetIntervalsSelect from './TargetIntervalsSelect'

const SettingsSelects = () => {
	return (
		<div className='flex flex-col gap-2 pt-[2vh]'>
			<FocusTimeSelect />
			<BreakTimeSelect />
			<LongBreakTimeSelect />
			<TargetIntervalsSelect />
		</div>
	)
}

export default SettingsSelects
