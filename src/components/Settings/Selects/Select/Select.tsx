import { FC, useEffect, useState } from 'react'
import { ISelectOption } from '../../../../types'
import { useClickAway } from '../../../../hooks/useClickAway'
import SelectCustomField from './SelectCustomField'
import SelectItems from './SelectItems'
import SelectButton from './SelectButton'

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

	useEffect(() => {
		onChange && onChange(selectedOption)
	}, [selectedOption])

	return (
		<div className='flex items-center gap-1'>
			<div ref={ref} className='relative select-none'>
				<SelectButton setIsOpen={setIsOpen} label={selectedOption.label} />
				<SelectItems
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					setSelectedOption={setSelectedOption}
					options={options}
				/>
			</div>
			{selectedOption.label === 'custom' && (
				<SelectCustomField
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					unit={unit}
				/>
			)}
		</div>
	)
}

export default Select
