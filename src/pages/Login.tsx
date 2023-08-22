import { signInWithEmailAndPassword } from 'firebase/auth'
import Form from '../components/Form/Form'
import { auth } from '../firebase'

interface ILogin {
	email: string
	password: string
}
const Login = () => {
	const handleLogin = async ({ email, password }: ILogin) => {
		const { user } = await signInWithEmailAndPassword(auth, email, password)
		return user
	}

	return (
		<div className='flex justify-center items-center w-full h-dynamic-screen'>
			<Form title='login' handleSubmit={handleLogin} />
		</div>
	)
}

export default Login
