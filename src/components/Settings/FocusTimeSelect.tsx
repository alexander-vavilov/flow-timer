import { FC, useContext } from 'react'
import Select from './Select/Select'
import { SettingsContextType } from '../../types'
import { SettingsContext } from '../../contexts/SettingsContext'

const FocusTimeSelect: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSettings(prevSettings => ({
			...prevSettings,
			focusTime: Number(e.target.value),
		}))
	}

	return (
		<Select
			title='Focus time'
			value={settings.focusTime}
			onChange={handleChange}
			options={[900, 1200, 1500, 1800, 2700, 3000, 3600, 5400]}
			unit='min'
		/>
	)
}

export default FocusTimeSelect
