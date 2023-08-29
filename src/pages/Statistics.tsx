import { createPortal } from 'react-dom'
import Modal from '../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'

const Statistics = () => {
	const navigate = useNavigate()

	const modalRoot = document.getElementById('modal')
	if (!modalRoot) return null

	return createPortal(
		<Modal name='Statistics' onClose={() => navigate('/app')}>
			<div className='p-4'>
				The developer is too lazy to add statistics for now. He'll definitely do
				it someday.
			</div>
		</Modal>,
		modalRoot
	)
}

export default Statistics
