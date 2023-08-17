import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const FormFooter: FC<{ title: string }> = ({ title }) => {
	return (
		<footer>
			<span>
				{title === 'register' ? 'Already have an account? ' : 'New here? '}
				<Link
					to={`/${title === 'register' ? 'login' : 'register'}`}
					className='text-indigo-300 hover:underline'
				>
					{title === 'register' ? 'Log in' : 'Join now'}
				</Link>
			</span>
		</footer>
	)
}

export default FormFooter
