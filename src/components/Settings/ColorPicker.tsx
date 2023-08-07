import { useContext } from 'react'
import { SettingsContextType } from '../../types'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { SettingsContext } from '../../contexts/SettingsContext'

const ColorPicker = () => {
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	return (
		<div className='py-2'>
			<HexColorPicker
				color={settings.accentColor}
				onChange={color =>
					setSettings(prevSettings => ({
						...prevSettings,
						accentColor: color,
					}))
				}
				style={{ width: '100%' }}
			/>
			<div className='flex items-center gap-1 py-1 px-2 my-2 bg-zinc-700 rounded-md overflow-hidden'>
				<span className='text-zinc-300/80'>#</span>
				<HexColorInput
					color={settings.accentColor}
					onChange={color =>
						setSettings(prevSettings => ({
							...prevSettings,
							accentColor: color,
						}))
					}
					className='w-full bg-transparent'
					placeholder='Enter the hex code'
				/>
			</div>
		</div>
	)
}

export default ColorPicker
