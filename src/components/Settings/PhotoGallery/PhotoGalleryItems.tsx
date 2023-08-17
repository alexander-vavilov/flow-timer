import { FC } from 'react'
import { IPhoto } from '../../../types'
import PhotoGalleryItem from './PhotoGalleryItem'

interface IPhotoGalleryItems {
	photos: IPhoto[]
}

const PhotoGalleryItems: FC<IPhotoGalleryItems> = ({ photos }) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2 max-h-[40vh] overflow-y-auto'>
			{photos.map(props => (
				<PhotoGalleryItem key={props.id} {...props} />
			))}
		</div>
	)
}

export default PhotoGalleryItems
