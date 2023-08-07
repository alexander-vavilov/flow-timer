import { signInWithEmailAndPassword } from 'firebase/auth'
import Form from '../components/Form'
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

	return <Form title='login' handleSubmit={handleLogin} />
}

export default Login
