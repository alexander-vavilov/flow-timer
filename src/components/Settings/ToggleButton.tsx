interface IToggleButton {
	checked?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ToggleButton = ({ checked, onChange }: IToggleButton) => {
	return (
		<label className='relative block max-w-max cursor-pointer'>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className='peer hidden'
			/>
			<div className='w-[50px] h-[30px] bg-zinc-600 rounded-full peer-checked:bg-green-500 transition-colors duration-300' />
			<div className='absolute top-1/2 -translate-y-1/2 right-[calc(100%-28px)] peer-checked:right-1 w-6 h-6 bg-white shadow-2xl rounded-full transition-all duration-300' />
		</label>
	)
}

export default ToggleButton
