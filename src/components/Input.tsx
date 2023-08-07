import React from 'react'

interface IInput {
	type: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder: string
}

const Input = ({ type, value, onChange, placeholder }: IInput) => {
	return (
		<div className='relative'>
			<input
				type={type}
				value={value}
				onChange={onChange}
				className={`px-2 py-1 w-full bg-transparent border-2 border-white/30 ${
					value ? 'border-white/60' : ''
				} focus:border-white/80 rounded-md peer transition-colors duration-300`}
			/>
			<label
				className={`absolute left-2 -translate-y-1/2 ${
					value
						? 'top-0 text-white/90'
						: 'top-1/2 peer-focus:top-0 text-white/60'
				} peer-focus:text-white bg-zinc-800 pointer-events-none transition-all duration-300`}
			>
				{placeholder}
			</label>
		</div>
	)
}

export default Input
