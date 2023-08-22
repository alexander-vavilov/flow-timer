import { FC, useContext } from 'react'
import { SettingsContext } from '../../../contexts/SettingsContext'
import { ISelectOption, SettingsContextType } from '../../../types'
import Select from './Select'
import { findOptionByValue } from '../../../utils'

const BreakSelect: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const options: ISelectOption[] = [
		{ value: 1200, label: '20 min' },
		{ value: 1800, label: '30 min' },
		{ value: 2400, label: '40 min' },
		{ value: 3000, label: '50 min' },
		{ value: settings.breakTime, label: 'custom' },
	]

	return (
		<Select
			options={options}
			value={findOptionByValue(settings.breakTime, options)}
			unit='min'
			onChange={newOption => {
				setSettings(prevSettings => ({
					...prevSettings,
					breakTime: newOption?.value || Number(options[0].value),
				}))
			}}
		/>
	)
}

export default BreakSelect
