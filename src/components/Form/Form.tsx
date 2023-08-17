import React, { FC, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { CurrentUserType, UserContextType } from '../../types'
import Input from '../Input'
import ErrorMessage from '../ErrorMessage'
import FormFooter from './FormFooter'

interface ISubmit {
	email: string
	password: string
	username: string
}
interface IForm {
	title: string
	handleSubmit: (data: ISubmit) => {}
}

const Form: FC<IForm> = ({ title, handleSubmit }) => {
	const { currentUser, setCurrentUser } = useContext(
		UserContext
	) as UserContextType

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [isError, setIsError] = useState(false)

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const user = await handleSubmit({ email, password, username })
			setCurrentUser(user as CurrentUserType)
		} catch (error) {
			console.error(error)
			setIsError(true)
		}
	}

	if (currentUser) return <Navigate to='/' />

	return (
		<div className='flex justify-center items-center w-full h-dynamic-screen'>
			<div className='max-w-sm w-full p-4 bg-zinc-800 rounded-md'>
				<h2 className='text-2xl font-medium pb-4 capitalize'>{title}</h2>
				<form onSubmit={onSubmit} className='flex flex-col gap-4'>
					{title === 'register' && (
						<Input
							type='text'
							value={username}
							onChange={e => setUsername(e.target.value)}
							placeholder='Username'
						/>
					)}
					<Input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
					/>
					<Input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
					/>
					<button className='w-full p-1 bg-indigo-500 rounded-md capitalize active:bg-indigo-400 transition-colors duration-300'>
						{title}
					</button>
					{isError && <ErrorMessage />}
					<FormFooter title={title} />
				</form>
			</div>
		</div>
	)
}

export default Form
