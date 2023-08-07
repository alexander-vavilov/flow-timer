import { useState, useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext'
import { UserContext } from '../../contexts/UserContext'
import { SettingsContextType, UserContextType } from '../../types'
import Button from '../Button'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const SettingsFooter = () => {
	const { currentUser, userPreferences, setUserPreferences } = useContext(
		UserContext
	) as UserContextType

	const { settings, setSettings } = useContext(
		SettingsContext
	) as SettingsContextType

	const [isSavingInProcess, setIsSavingInProcess] = useState(false)

	const saveChanges = async () => {
		if (!currentUser) return
		setIsSavingInProcess(true)

		const docRef = doc(db, 'users', currentUser.uid)
		await updateDoc(docRef, { userPreferences: settings })
		setUserPreferences(settings)

		setIsSavingInProcess(false)
	}
	const discardChanges = () => setSettings(userPreferences)

	return (
		<footer className='flex justify-end w-full pt-4 bg-zinc-900 z-20'>
			<div className='flex items-center gap-2'>
				<Button onClick={discardChanges} className='!bg-zinc-600'>
					Cancel
				</Button>
				<Button onClick={saveChanges} loading={isSavingInProcess}>
					Save changes
				</Button>
			</div>
		</footer>
	)
}

export default SettingsFooter
