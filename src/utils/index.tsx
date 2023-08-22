import { ISelectOption } from '../types'

export const findOptionByValue = (value: number, array: ISelectOption[]) => {
	const customOption = { value, label: 'custom' }

	return (
		array.find((option: ISelectOption) => option.value === value) ||
		customOption
	)
}
