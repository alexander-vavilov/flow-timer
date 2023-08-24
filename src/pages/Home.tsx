import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer/Timer'
import { SettingsContextType } from '../types'
import { SettingsContext } from '../contexts/SettingsContext'

const Home = () => {
	const { settings } = useContext(SettingsContext) as SettingsContextType

	return (
		<div
			className='flex flex-col justify-center items-center gap-4 h-full'
			style={{
				background: `url(${settings.wallpaper}) center center / cover`,
			}}
		>
			<div className='flex flex-col justify-center items-center w-full h-full bg-black/50'>
				<Timer />
				<nav className='fixed md:static bottom-0 hidden short:block w-full md:py-6'>
					<Navbar />
				</nav>
			</div>
		</div>
	)
}

export default Home
