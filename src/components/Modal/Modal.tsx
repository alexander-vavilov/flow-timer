import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useClickAway } from '../../hooks/useClickAway'
import useKeyDown from '../../hooks/useKeyDown'
import ModalHeader from './ModalHeader'

interface IModal {
	children: ReactNode
	name: string
	onClose: () => void
	className?: string
}

const Modal: FC<IModal> = ({ children, name, onClose, className }) => {
	const modalRoot = document.getElementById('modal')

	const ref = useClickAway(onClose)
	useKeyDown((e: KeyboardEvent) => {
		if (e.key === 'Escape') onClose()
	})

	if (!modalRoot) return null
	return createPortal(
		<div className='fixed top-0 left-0 w-full h-full bg-black/20'>
			<div
				ref={ref}
				className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full md:h-auto max-w-full md:max-w-[90%] xl:max-w-7xl max-h-full md:max-h-[90%] p-4 m-auto bg-zinc-900 md:shadow-lg md:rounded-lg overflow-y-auto overflow-x-hidden ${className}`}
			>
				<ModalHeader name={name} handleClose={onClose} />
				{children}
			</div>
		</div>,
		modalRoot
	)
}

export default Modal
