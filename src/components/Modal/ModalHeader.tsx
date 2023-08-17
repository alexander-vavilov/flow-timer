import React, { FC } from 'react'
import { IoClose } from 'react-icons/io5'

interface IModalHeader {
	name: string
	onClose: () => void
}

const ModalHeader: FC<IModalHeader> = ({ name, onClose }) => {
	return (
		<header className='flex justify-between items-center gap-4 pb-4'>
			<h2 className='text-2xl font-medium capitalize'>{name}</h2>
			<button
				onClick={onClose}
				className='flex short:flex-col items-center text-white/60 hover:text-white transition-colors duration-300'
			>
				<IoClose size={28} />
				<span className='non-touch-screen-only text-sm font-medium uppercase'>
					esc
				</span>
			</button>
		</header>
	)
}

export default ModalHeader
