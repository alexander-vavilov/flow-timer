import { FC, useState } from 'react'
import PhotoGallery from '../components/Settings/PhotoGallery/PhotoGallery'
import { MdOutlineWallpaper } from 'react-icons/md'
import Button from '../components/Button'
import Modal from '../components/Modal/Modal'
import ColorPicker from '../components/Settings/ColorPicker'
import { useNavigate } from 'react-router-dom'
import SettingsMinimalisticMode from '../components/Settings/SettingsMinimalisticMode'
import SettingsSelects from '../components/Settings/SettingsSelects'

const Settings: FC = () => {
	const [photoGalleryIsOpen, setPhotoGalleryIsOpen] = useState(false)

	const navigate = useNavigate()

	return (
		<Modal
			name='settings'
			onClose={() => navigate('/app')}
			className='flex flex-col -m-4 overflow-y-hidden'
		>
			<div className='border-zinc-500/40 h-full -mx-4 overflow-x-hidden overflow-y-auto'>
				<div className='p-4'>
					<SettingsSelects />
					<SettingsMinimalisticMode />
					<div>
						<span className='text-lg'>Accent color</span>
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
		</Modal>
	)
}

export default Settings
