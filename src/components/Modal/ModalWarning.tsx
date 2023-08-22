import { FC } from 'react'
import Button from '../Button'
import Modal from './Modal'

interface IModalWarning {
	name: string
	message: string
	handleCancel: () => void
	handleDiscard: () => void
}

const ModalWarning: FC<IModalWarning> = ({
	name,
	message,
	handleCancel,
	handleDiscard,
}) => {
	return (
		<Modal
			name={name}
			onClose={handleCancel}
			className='!max-w-sm !h-max !bg-zinc-800 rounded-lg'
		>
			<span>{message}</span>
			<div className='flex justify-end items-center gap-2 pt-4'>
				<Button onClick={handleCancel} className='!bg-zinc-600'>
					Cancel
				</Button>
				<Button onClick={handleDiscard}>Discard</Button>
			</div>
		</Modal>
	)
}

export default ModalWarning
