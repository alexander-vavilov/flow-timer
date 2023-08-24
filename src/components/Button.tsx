import { FC, useContext, ReactNode } from 'react'
import type { ComponentProps } from 'react'
import Loading from './Loading'
import { SettingsContextType } from '../types'
import { SettingsContext } from '../contexts/SettingsContext'

interface IButton extends ComponentProps<'button'> {
	children: ReactNode
	className?: string
	loading?: boolean
}

const Button: FC<IButton> = ({ children, className, loading, ...props }) => {
	const { settings } = useContext(SettingsContext) as SettingsContextType

	return (
		<button
			{...props}
			className={`relative py-1 px-2 rounded-md ${className} overflow-hidden`}
			style={{ background: settings.accentColor }}
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
