import type { ComponentProps } from 'react'
import { IconType } from 'react-icons/lib'

interface IIconButton extends ComponentProps<'button'> {
	icon: IconType
	ariaLabel: string
	size?: number
	className?: string
}

const IconButton = ({
	icon: Icon,
	size,
	ariaLabel,
	className,
	...props
}: IIconButton) => {
	return (
		<button
			{...props}
			aria-label={ariaLabel}
			className={`text-white/60 px-2 py-1 hover:text-white ${className} transition-colors duration-300`}
		>
			<Icon size={size || 20} />
		</button>
	)
}

export default IconButton
