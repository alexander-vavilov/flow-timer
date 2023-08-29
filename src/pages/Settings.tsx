import { FC, useContext, useState } from 'react'
import PhotoGallery from '../components/Settings/PhotoGallery/PhotoGallery'
import { MdOutlineWallpaper } from 'react-icons/md'
import Button from '../components/Button'
import Modal from '../components/Modal/Modal'
import ColorPicker from '../components/Settings/ColorPicker'
import { useNavigate } from 'react-router-dom'
import SettingsMinimalisticMode from '../components/Settings/SettingsMinimalisticMode'
import SettingsSelects from '../components/Settings/SettingsSelects'
import { SettingsContext } from '../contexts/SettingsContext'
import { SettingsContextType } from '../types'

const Settings: FC = () => {
	const [photoGalleryIsOpen, setPhotoGalleryIsOpen] = useState(false)
	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const navigate = useNavigate()

	return (
		<Modal
			name='settings'
			onClose={() => navigate('/app')}
			className='flex flex-col -m-4 overflow-y-hidden'
		>
			<div className='h-full p-4 overflow-x-hidden overflow-y-auto'>
				<SettingsSelects />
				<SettingsMinimalisticMode />
				<div>
					<span className='text-lg'>Accent color</span>
					<ColorPicker />
				</div>
				<div>
					<span className='text-lg'>Wallpaper</span>
					{!photoGalleryIsOpen && (
						<div className='flex flex-col xs:flex-row gap-2 pt-2'>
							<Button
								onClick={() => setPhotoGalleryIsOpen(true)}
								className='flex items-center gap-1'
							>
								<MdOutlineWallpaper size={20} />
								<span>
									{settings.wallpaper
										? 'Change the wallpaper'
										: 'Add a wallpaper'}
								</span>
							</Button>
							{settings.wallpaper && (
								<Button
									onClick={() =>
										setSettings(prevSettings => ({
											...prevSettings,
											wallpaper: null,
										}))
									}
									className='!bg-red-700'
								>
									Remove current wallpaper
								</Button>
							)}
						</div>
					)}
				</div>
				{photoGalleryIsOpen && <PhotoGallery />}
			</div>
		</Modal>
	)
}

export default Settings
