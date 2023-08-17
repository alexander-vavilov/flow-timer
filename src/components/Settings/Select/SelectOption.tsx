import { FC } from 'react'

interface ISelectOption {
	option: number
	unit: string
}

const SelectOption: FC<ISelectOption> = ({ option, unit }) => {
	return (
		<option value={option} className='bg-zinc-700'>
			{unit === 'min' ? option / 60 : option}&nbsp;
			{unit}
		</option>
	)
}

export default SelectOption
