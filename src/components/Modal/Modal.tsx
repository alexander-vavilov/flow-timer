import { FC, useState, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useClickAway } from '../../hooks/useClickAway'
import useKeyDown from '../../hooks/useKeyDown'
import ModalWarning from './ModalWarning'
import ModalHeader from './ModalHeader'

interface IModal {
	children: ReactNode
	name: string
	onClose: () => void
	onCloseWarning?: boolean
	warningText?: string
	className?: string
}

const Modal: FC<IModal> = ({
	children,
	name,
	onClose,
	onCloseWarning,
	className,
}) => {
	const modalRoot = document.getElementById('modal')
	const navigate = useNavigate()

	const [isWarningOpen, setIsWarningOpen] = useState(false)

	const handleClose = () => {
		if (onCloseWarning) return setIsWarningOpen(true)
		onClose()
	}

	const ref = useClickAway(handleClose)
	useKeyDown((e: KeyboardEvent) => {
		if (e.key === 'Escape') handleClose()
	})

	useEffect(() => {
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = ''
		}
	}, [])

	if (!modalRoot) return null
	return createPortal(
		<div className='fixed top-0 left-0 w-full h-full bg-black/20'>
			<div
				ref={ref}
				className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full md:h-auto max-w-full md:max-w-[90%] xl:max-w-7xl max-h-full md:max-h-[90%] p-4 m-auto bg-zinc-900 md:shadow-lg md:rounded-lg overflow-y-auto ${className}`}
			>
				<ModalHeader name={name} handleClose={handleClose} />
				{children}
				{isWarningOpen && (
					<ModalWarning
						name='Discard changes?'
						message="The changes you've made won't be saved."
						handleCancel={() => setIsWarningOpen(false)}
						handleDiscard={() => navigate('/app')}
					/>
				)}
			</div>
		</div>,
		modalRoot
	)
}

export default Modal
