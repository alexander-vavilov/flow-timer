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
		<ul className='flex justify-around md:justify-center pb-4 md:pb-0'>
			{navbarItems.map(({ icon: Icon, path, ariaLabel }) => (
				<li key={path} className='flex-auto md:flex-none'>
					<Link
						to={path}
						aria-label={ariaLabel}
						className='flex justify-center p-4 w-full icon-button'
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
