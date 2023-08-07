import Button from './Button'
import Modal from './Modal'

interface IModalWarning {
	name: string
	message: string
	handleCancel: () => void
	handleDiscard: () => void
}

const ModalWarning = ({
	name,
	message,
	handleCancel,
	handleDiscard,
}: IModalWarning) => {
	return (
		<Modal
			name={name}
			onClose={handleCancel}
			className='!max-w-sm !bg-zinc-800'
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