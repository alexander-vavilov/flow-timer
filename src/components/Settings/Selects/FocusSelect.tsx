import { FC, useContext } from 'react'
import Select from './Select'
import { SettingsContext } from '../../../contexts/SettingsContext'
import { ISelectOption, SettingsContextType } from '../../../types'
import { findOptionByValue } from '../../../utils'

const FocusSelect: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const options: ISelectOption[] = [
		{ value: 1200, label: '20 min' },
		{ value: 1800, label: '30 min' },
		{ value: 2400, label: '40 min' },
		{ value: 3000, label: '50 min' },
		{ value: settings.focusTime, label: 'custom' },
	]

	return (
		<Select
			options={options}
			value={findOptionByValue(settings.focusTime, options)}
			unit='min'
			onChange={newOption => {
				setSettings(prevSettings => ({
					...prevSettings,
					focusTime: newOption?.value || Number(options[0].value),
				}))
			}}
		/>
	)
}

export default FocusSelect
