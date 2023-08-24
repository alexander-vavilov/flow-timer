import { useContext } from 'react'
import { PiPlay, PiPause } from 'react-icons/pi'
import { SettingsContextType } from '../../types'
import IconButton from '../IconButton'
import { SettingsContext } from '../../contexts/SettingsContext'

type TimerButtonProps = {
	isActive: boolean
	toggle: React.MouseEventHandler<HTMLButtonElement>
}

const TimerButton = ({ isActive, toggle }: TimerButtonProps) => {
	const { settings } = useContext(SettingsContext) as SettingsContextType
	const icon = isActive ? PiPause : PiPlay

	return (
		<IconButton
			icon={icon}
			size={42}
			ariaLabel={isActive ? 'pause' : 'start'}
			onClick={toggle}
			style={{ color: settings.accentColor }}
		/>
	)
}

export default TimerButton
