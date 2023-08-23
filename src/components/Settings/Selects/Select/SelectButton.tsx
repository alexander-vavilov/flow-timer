import React, { FC } from 'react'

interface ISelectButton {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	label: string
}

const SelectButton: FC<ISelectButton> = ({ setIsOpen, label }) => {
	return (
		<button
			onClick={() => setIsOpen(prevState => !prevState)}
			className='px-2 py-1 sm:px-3 sm:py-2 bg-zinc-700 rounded-lg'
		>
			{label}
		</button>
	)
}

export default SelectButton
