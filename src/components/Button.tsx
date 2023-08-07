import { useContext, ReactNode } from 'react'
import type { ComponentProps } from 'react'
import Loading from './Loading'
import { UserContext } from '../contexts/UserContext'
import { UserContextType } from '../types'

interface IButton extends ComponentProps<'button'> {
	children: ReactNode
	className?: string
	loading?: boolean
}

const Button = ({ children, className, loading, ...props }: IButton) => {
	const { userPreferences } = useContext(UserContext) as UserContextType

	return (
		<button
			{...props}
			className={`relative py-1 px-2 rounded-md ${className} overflow-hidden`}
			style={{ background: userPreferences.accentColor }}
		>
			{children}
			{loading && (
				<div className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/40'>
					<Loading size={20} />
				</div>
			)}
		</button>
	)
}

export default Button
