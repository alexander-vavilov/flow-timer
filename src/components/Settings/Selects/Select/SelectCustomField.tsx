import React, { FC } from 'react'
import { ISelectOption } from '../../../../types'

interface ISelectCustomField {
	selectedOption: ISelectOption
	setSelectedOption: React.Dispatch<React.SetStateAction<ISelectOption>>
	unit?: string
}

const SelectCustomField: FC<ISelectCustomField> = ({
	selectedOption,
	setSelectedOption,
	unit,
}) => {
	return (
		<div className='flex items-center bg-zinc-700 rounded-md overflow-hidden'>
			<input
				type='number'
				defaultValue={
					unit === 'min' ? selectedOption.value / 60 : selectedOption.value
				}
				onChange={e =>
					setSelectedOption((selectedOption: ISelectOption) => ({
						...selectedOption,
						value:
							unit === 'min'
								? Number(e.target.value) * 60
								: Number(e.target.value),
					}))
				}
				className='max-w-[50px] sm:max-w-[70px] h-full px-3 py-1 bg-zinc-700'
			/>
			{unit && (
				<span className='inline-block px-3 py-1 bg-zinc-600 text-sm'>
					{unit}
				</span>
			)}
		</div>
	)
}

export default SelectCustomField
