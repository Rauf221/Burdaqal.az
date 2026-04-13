'use client'
import { useEffect } from 'react'

export default function DeleteButton() {
	useEffect(() => {
		function handleDeleteClick(event) {
			const deleteButton = event.target.closest('.delete-btns')
			if (deleteButton) {
				const item = deleteButton.closest('.item')
				if (item) {
					item.parentNode.removeChild(item)
				}
			}
		}

		document.addEventListener('click', handleDeleteClick)

		// Cleanup event listener on component unmount
		return () => {
			document.removeEventListener('click', handleDeleteClick)
		}
	}, [])

	return null
}
