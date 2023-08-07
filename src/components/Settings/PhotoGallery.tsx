import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { FaUnsplash } from 'react-icons/fa6'
import { IoClose, IoSearch } from 'react-icons/io5'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import IconButton from '../IconButton'
import { SettingsContextType } from '../../types'
import { SettingsContext } from '../../contexts/SettingsContext'

type PhotoType = {
	id: string
	alt_description: string
	urls: {
		full: string
		small_s3: string
	}
	user: {
		name: string
		links: {
			html: string
		}
	}
}

const PhotoGallery = () => {
	const { setSettings } = useContext(SettingsContext) as SettingsContextType

	const [photos, setPhotos] = useState<PhotoType[]>([])
	const [search, setSearch] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const { data } = await axios.get(
					'https://api.unsplash.com/photos/random',
					{
						params: {
							client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
							count: 10,
						},
					}
				)
				setPhotos(data)
				setIsLoading(false)
			} catch (error) {
				console.error('Error fetching photos:', error)
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchPhotos()
	}, [])

	const handleSearch = async () => {
		try {
			const { data } = await axios.get(
				'https://api.unsplash.com/search/photos',
				{
					params: {
						client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
						query: search,
						per_page: 30,
					},
				}
			)

			setPhotos(data.results)
		} catch (error) {
			setIsError(true)
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	const handleClick = (url: string) => {
		setSettings(prevSettings => ({
			...prevSettings,
			wallpaper: url,
		}))
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
				<div className='grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] gap-2 max-h-[40vh] overflow-y-auto'>
					{photos.map(({ urls, alt_description, user, id }) => (
						<div key={id}>
							<div
								onClick={() => handleClick(urls['full'])}
								className='relative rounded-sm overflow-hidden cursor-pointer group'
							>
								<img
									src={urls['small_s3']}
									className='w-full h-24 object-cover object-center'
									alt={alt_description}
								/>
								<div className='absolute top-0 left-0 w-full h-full bg-black/20 hidden group-hover:block' />
							</div>
							<span className='text-xs text-zinc-400'>
								by{' '}
								<a
									href={user.links.html}
									className='underline hover:text-red-500'
									target='blank'
								>
									{user.name}
								</a>
							</span>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PhotoGallery
