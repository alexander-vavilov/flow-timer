import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer/Timer'
import { UserContext } from '../contexts/UserContext'
import { UserContextType } from '../types'

const Home = () => {
	const { userPreferences } = useContext(UserContext) as UserContextType

	return (
		<div
			className='flex flex-col justify-center items-center gap-4 h-full'
			style={{
				background: `url(${userPreferences.wallpaper}) center center / cover`,
			}}
		>
			<div className='flex flex-col justify-center items-center w-full h-full bg-black/50'>
				<Timer />
				<nav className='hidden short:block w-full md:py-6 z-10 md:z-0'>
					<Navbar />
				</nav>
			</div>
		</div>
	)
}

export default Home
