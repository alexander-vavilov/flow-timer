import React from 'react'

type SelectType = {
	title: string
	value: number | string
	onChange: React.ChangeEventHandler<HTMLSelectElement>
	options: number[]
	unit: string
}
const Select = ({ title, value, onChange, options, unit }: SelectType) => {
	return (
		<div className='flex justify-between items-center px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-zinc-800 rounded-lg'>
			<span className='md:text-lg'>{title}</span>
			<select
				onChange={onChange}
				name='select'
				className='text-center p-1 bg-zinc-700 rounded-md cursor-pointer'
				value={value}
			>
				{options.map(option => {
					return (
						<option key={option} value={option} className='bg-zinc-700'>
							{unit === 'min' ? option / 60 : option}&nbsp;
							{unit}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default Select
