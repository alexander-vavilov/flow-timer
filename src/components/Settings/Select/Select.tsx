import React, { FC } from 'react'
import SelectOption from './SelectOption'

interface ISelect {
	title: string
	value: number | string
	onChange: React.ChangeEventHandler<HTMLSelectElement>
	options: number[]
	unit: string
}
const Select: FC<ISelect> = ({ title, value, onChange, options, unit }) => {
	return (
		<div className='flex justify-between items-center px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-zinc-800 rounded-lg'>
			<span className='md:text-lg'>{title}</span>
			<select
				onChange={onChange}
				name='select'
				className='text-center p-1 bg-zinc-700 rounded-md cursor-pointer'
				value={value}
			>
				{options.map(option => (
					<SelectOption key={option} option={option} unit={unit} />
				))}
			</select>
		</div>
	)
}

export default Select
