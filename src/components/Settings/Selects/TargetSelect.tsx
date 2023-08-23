import { FC, useContext } from 'react'
import { SettingsContext } from '../../../contexts/SettingsContext'
import { ISelectOption, SettingsContextType } from '../../../types'
import Select from './Select/Select'
import { findOptionByValue } from '../../../utils'

const TargetSelect: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const options: ISelectOption[] = [
		{ value: 2, label: '2 intervals' },
		{ value: 3, label: '3 intervals' },
		{ value: 4, label: '4 intervals' },
		{ value: 5, label: '5 intervals' },
		{ value: 6, label: '6 intervals' },
		{ value: 7, label: '7 intervals' },
		{ value: 8, label: '8 intervals' },
		{ value: settings.target, label: 'custom' },
	]

	return (
		<Select
			options={options}
			value={findOptionByValue(settings.target, options)}
			unit='intervals per day'
			onChange={newOption => {
				setSettings(prevSettings => ({
					...prevSettings,
					target: newOption?.value || Number(options[0].value),
				}))
			}}
		/>
	)
}

export default TargetSelect
