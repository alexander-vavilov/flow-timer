import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { FaUnsplash } from 'react-icons/fa6'
import { IoClose, IoSearch } from 'react-icons/io5'
import ErrorMessage from '../../ErrorMessage'
import Loading from '../../Loading'
import IconButton from '../../IconButton'
import { IPhoto } from '../../../types'
import PhotoGalleryItems from './PhotoGalleryItems'

const PhotoGallery: FC = () => {
	const [photos, setPhotos] = useState<IPhoto[]>([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const fetchData = async (url: string, params: {}) => {
		try {
			const { data } = await axios.get(url, { params })
			return data
		} catch (error) {
			setIsError(true)
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		const fetchRandomPhotos = async () => {
			const url = 'https://api.unsplash.com/photos/random'
			const params = {
				client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
				count: 10,
			}

			const data = await fetchData(url, params)
			setPhotos(data)
		}

		fetchRandomPhotos()
	}, [])

	const handleSearch = async () => {
		const url = 'https://api.unsplash.com/search/photos'
		const params = {
			client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
			query: search,
			per_page: 30,
		}

		const data = await fetchData(url, params)
		setPhotos(data.results)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') handleSearch()
	}

	return (
		<div className='flex flex-col gap-2 pb-4'>
			<div className='flex items-center gap-1'>
				<FaUnsplash />
				<span className='text-sm'>Unsplash</span>
			</div>
			<div className='flex bg-zinc-700 border-2 border-zinc-600 rounded-md'>
				<input
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={handleKeyDown}
					className='w-full text-sm px-2 py-1 bg-transparent'
					placeholder='Search for an image...'
				/>
				{search && (
					<IconButton
						icon={IoClose}
						ariaLabel='clear'
						onClick={() => setSearch('')}
					/>
				)}
				<IconButton icon={IoSearch} ariaLabel='search' onClick={handleSearch} />
			</div>
			{isLoading ? (
				<div className='flex justify-center'>
					<Loading />
				</div>
			) : isError ? (
				<ErrorMessage />
			) : (
				<PhotoGalleryItems photos={photos} />
			)}
		</div>
	)
}

export default PhotoGallery
