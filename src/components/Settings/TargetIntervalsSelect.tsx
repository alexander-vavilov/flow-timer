import { useContext } from 'react'
import Select from './Select'
import { SettingsContextType } from '../../types'
import { SettingsContext } from '../../contexts/SettingsContext'

const TargetIntervalsSelect = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSettings(prevSettings => ({
			...prevSettings,
			target: Number(e.target.value),
		}))
	}

	return (
		<Select
			title='Target'
			unit='intervals per day'
			value={settings.target}
			options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
			onChange={handleChange}
		/>
	)
}

export default TargetIntervalsSelect
