import { FC, useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { SettingsContextType, UserContextType } from '../types'
import PhotoGallery from '../components/Settings/PhotoGallery/PhotoGallery'
import { MdOutlineWallpaper } from 'react-icons/md'
import isEqual from 'fast-deep-equal'
import Profile from '../components/Settings/Profile'
import Button from '../components/Button'
import Modal from '../components/Modal/Modal'
import ColorPicker from '../components/Settings/ColorPicker'
import { SettingsContext } from '../contexts/SettingsContext'
import { useNavigate } from 'react-router-dom'
import SettingsFooter from '../components/Settings/SettingsFooter'
import SettingsMinimalisticMode from '../components/Settings/SettingsMinimalisticMode'
import SettingsSelects from '../components/Settings/SettingsSelects'

const Settings: FC = () => {
	const { userPreferences } = useContext(UserContext) as UserContextType
	const { settings } = useContext(SettingsContext) as SettingsContextType

	const [photoGalleryIsOpen, setPhotoGalleryIsOpen] = useState(false)

	const navigate = useNavigate()
	const unsavedChanges = !isEqual(userPreferences, settings)

	return (
		<Modal
			name='settings'
			onClose={() => navigate('/app')}
			onCloseWarning={unsavedChanges}
			className='flex flex-col -m-4 overflow-y-hidden'
		>
			<div className='border-zinc-500/40 h-full -mx-4 overflow-x-hidden overflow-y-auto'>
				<div className='p-4'>
					<Profile />
					<SettingsSelects />
					<SettingsMinimalisticMode />
					<div>
						<span className='md:text-lg'>Accent color</span>
						<ColorPicker />
					</div>
					{!photoGalleryIsOpen && (
						<Button
							onClick={() => setPhotoGalleryIsOpen(true)}
							className='flex items-center gap-1'
						>
							<MdOutlineWallpaper size={20} />
							<span>Add a wallpaper</span>
						</Button>
					)}
					{photoGalleryIsOpen && <PhotoGallery />}
				</div>
			</div>
			{unsavedChanges && <SettingsFooter />}
		</Modal>
	)
}

export default Settings
