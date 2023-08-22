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
			className={`px-2 py-1 icon-button ${className}`}
			tabIndex={-1}
		>
			<Icon size={size || 20} />
		</button>
	)
}

export default IconButton
