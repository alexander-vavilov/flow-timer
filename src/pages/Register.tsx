import Form from '../components/Form/Form'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

interface IRegister {
	email: string
	password: string
	username?: string
}

const Register = () => {
	const handleRegister = async ({ email, password, username }: IRegister) => {
		const { user } = await createUserWithEmailAndPassword(auth, email, password)
		await updateProfile(user, {
			displayName: username,
		})
		await setDoc(doc(db, 'users', user.uid), {
			displayName: user.displayName,
			photoURL: user.photoURL,
			email: user.email,
		})

		return user
	}

	return (
		<div className='flex justify-center items-center w-full h-dynamic-screen'>
			<Form title='register' handleSubmit={handleRegister} />
		</div>
	)
}

export default Register
