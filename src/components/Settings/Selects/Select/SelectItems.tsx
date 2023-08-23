import React, { FC } from 'react'
import { ISelectOption } from '../../../../types'

interface ISelectItems {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setSelectedOption: React.Dispatch<React.SetStateAction<ISelectOption>>
	options: ISelectOption[]
}

const SelectItems: FC<ISelectItems> = ({
	isOpen,
	setIsOpen,
	setSelectedOption,
	options,
}) => {
	const handleSelect = (option: ISelectOption) => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	return (
		<ul
			className={`absolute top-[calc(100%_+_5px)] left-1/2 -translate-x-1/2 max-h-56 p-1 ${
				isOpen ? '' : 'invisible opacity-0 scale-75'
			} bg-zinc-800/80 backdrop-blur-md rounded-lg overflow-y-auto z-10 transition-all duration-300`}
		>
			{options.map(option => (
				<li
					key={option.label}
					onClick={() => handleSelect(option)}
					className='px-4 py-1 select-option'
				>
					{option.label}
				</li>
			))}
		</ul>
	)
}

export default SelectItems
