import { FC, useContext } from 'react'
import { SettingsContext } from '../../../contexts/SettingsContext'
import { IPhoto, SettingsContextType } from '../../../types'

const PhotoGalleryItem: FC<IPhoto> = props => {
	const { setSettings } = useContext(SettingsContext) as SettingsContextType

	const handleClick = (url: string) => {
		setSettings(prevSettings => ({
			...prevSettings,
			wallpaper: url,
		}))
	}

	return (
		<div>
			<div
				onClick={() => handleClick(props.urls['full'])}
				className='relative rounded-sm overflow-hidden cursor-pointer group'
			>
				<img
					src={props.urls['small_s3']}
					className='w-full h-24 object-cover object-center'
					alt={props.alt_description}
				/>
				<div className='absolute top-0 left-0 w-full h-full bg-black/20 hidden group-hover:block' />
			</div>
			<span className='text-xs text-zinc-400'>
				by{' '}
				<a
					href={props.user.links.html}
					className='underline hover:text-red-500'
					target='blank'
				>
					{props.user.name}
				</a>
			</span>
		</div>
	)
}

export default PhotoGalleryItem
