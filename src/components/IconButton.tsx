import { FC, ComponentProps } from 'react'
import { IconType } from 'react-icons/lib'

type IconButtonType = {
	icon: IconType
	ariaLabel: string
	size?: number
	className?: string
} & ComponentProps<'button'>

const IconButton: FC<IconButtonType> = ({
	icon: Icon,
	size,
	ariaLabel,
	className,
	...props
}) => {
	return (
		<button
			{...props}
			aria-label={ariaLabel}
			className={`text-white/60 px-2 py-1 hover:text-white ${className} transition-colors duration-300`}
			tabIndex={-1}
		>
			<Icon size={size || 20} />
		</button>
	)
}

export default IconButton
