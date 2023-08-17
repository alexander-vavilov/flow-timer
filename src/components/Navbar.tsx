import { FC } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChartBar, HiOutlineClock, HiOutlineCog } from 'react-icons/hi'

const Navbar: FC = () => {
	const navbarItems = [
		{
			icon: HiOutlineChartBar,
			path: 'statistics',
			ariaLabel: 'statistics',
		},
		{
			icon: HiOutlineClock,
			path: '/app',
			ariaLabel: 'timer',
		},
		{
			icon: HiOutlineCog,
			path: 'settings',
			ariaLabel: 'settings',
		},
	]

	return (
		<ul className='flex justify-around md:justify-center'>
			{navbarItems.map(({ icon: Icon, path, ariaLabel }) => (
				<li key={path} className='flex-auto md:flex-none'>
					<Link
						to={path}
						aria-label={ariaLabel}
						className='flex justify-center p-4 w-full text-white/70 hover:text-white transition-colors duration-300'
						tabIndex={-1}
					>
						<Icon size={26} />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
