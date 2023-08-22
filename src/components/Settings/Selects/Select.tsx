import { FC, useEffect, useState } from 'react'
import { useClickAway } from '../../../hooks/useClickAway'
import { ISelectOption } from '../../../types'

interface ISelect {
	options: ISelectOption[]
	value: ISelectOption
	unit?: string
	onChange?: (newOption: ISelectOption) => void
}

const Select: FC<ISelect> = ({ options, value, unit, onChange }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<ISelectOption>(value)

	const ref = useClickAway(() => setIsOpen(false))

	const handleSelect = (option: ISelectOption) => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	useEffect(() => {
		onChange && onChange(selectedOption)
	}, [selectedOption])

	return (
		<div className='flex items-center gap-1'>
			<div ref={ref} className='relative max-w-max select-none'>
				<button
					onClick={() => setIsOpen(prevState => !prevState)}
					className='px-2 py-1 sm:px-3 sm:py-2 bg-zinc-700 rounded-lg'
				>
					{selectedOption.label}
				</button>
				<ul
					className={`absolute top-[calc(100%_+_5px)] p-1 ${
						isOpen ? '' : 'invisible opacity-0 scale-75'
					} bg-zinc-800 rounded-lg overflow-y-auto z-10 transition-all duration-300`}
				>
					{options.map(option => (
						<li
							key={option.label}
							onClick={() => handleSelect(option)}
							className='px-4 py-1 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors duration-300'
						>
							{option.label}
						</li>
					))}
				</ul>
			</div>
			{selectedOption.label === 'custom' && (
				<div className='flex items-center bg-zinc-700 rounded-md overflow-hidden'>
					<input
						type='number'
						defaultValue={selectedOption.value}
						onChange={e =>
							setSelectedOption(selectedOption => ({
								...selectedOption,
								value: Number(e.target.value) * 60,
							}))
						}
						className='max-w-[50px] sm:max-w-[70px] h-full px-3 py-1 bg-zinc-700'
						placeholder='Enter your own value'
					/>
					{unit && (
						<span className='inline-block px-3 py-1 bg-zinc-600 text-sm'>
							{unit}
						</span>
					)}
				</div>
			)}
		</div>
	)
}

export default Select
