import { FC, useContext } from 'react'
import ToggleButton from './ToggleButton'
import { SettingsContext } from '../../contexts/SettingsContext'
import { SettingsContextType } from '../../types'

const SettingsMinimalisticMode: FC = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	return (
		<div className='flex justify-between items-center gap-4 py-4'>
			<span className='text-lg'>Minimalistic mode</span>
			<ToggleButton
				checked={settings.minimalisticMode}
				onChange={e =>
					setSettings(prevSettings => ({
						...prevSettings,
						minimalisticMode: e.target.checked,
					}))
				}
			/>
		</div>
	)
}

export default SettingsMinimalisticMode
