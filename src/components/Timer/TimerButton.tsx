import { useContext } from 'react'
import { PiPlay, PiPause } from 'react-icons/pi'
import { UserContext } from '../../contexts/UserContext'
import { UserContextType } from '../../types'
import IconButton from '../IconButton'

type TimerButtonProps = {
	isActive: boolean
	toggle: React.MouseEventHandler<HTMLButtonElement>
}

const TimerButton = ({ isActive, toggle }: TimerButtonProps) => {
	const { userPreferences } = useContext(UserContext) as UserContextType
	const icon = isActive ? PiPause : PiPlay

	return (
		<IconButton
			icon={icon}
			size={42}
			ariaLabel={isActive ? 'pause' : 'start'}
			onClick={toggle}
			style={{ color: userPreferences.accentColor }}
		/>
	)
}

export default TimerButton
