import { FC, useContext } from 'react'
import Avatar from '../Avatar'
import { UserContext } from '../../contexts/UserContext'
import { UserContextType } from '../../types'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Profile: FC = () => {
	const { currentUser } = useContext(UserContext) as UserContextType

	return (
		<div className='flex gap-2'>
			<Avatar />
			<div className='flex flex-col'>
				<p className='text-lg font-medium leading-none'>
					{currentUser?.displayName}
				</p>
				<p className='text-sm text-slate-400'>{currentUser?.email}</p>
			</div>
			<button
				onClick={() => signOut(auth)}
				className='px-4 bg-red-500/80 rounded-md hover:bg-red-500 transition-colors duration-300'
			>
				Log out
			</button>
		</div>
	)
}

export default Profile
