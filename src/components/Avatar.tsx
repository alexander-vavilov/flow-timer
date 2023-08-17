import { FC, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { UserContextType } from '../types'

const Avatar: FC = () => {
	const { currentUser } = useContext(UserContext) as UserContextType

	return (
		<div className='w-10 h-10'>
			{currentUser?.photoURL ? (
				<img
					src={currentUser.photoURL}
					className='w-full h-full object-cover object-center'
					alt=''
				/>
			) : (
				<div className='flex justify-center items-center w-full h-full p-4 bg-slate-500 rounded-full capitalize'>
					{currentUser?.displayName?.charAt(0)}
				</div>
			)}
		</div>
	)
}

export default Avatar
