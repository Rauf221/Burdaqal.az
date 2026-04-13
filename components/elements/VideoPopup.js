'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>
			<a onClick={() => setOpen(true)} className="popup-youtube">
				<div className="icon">
					<i className="flaticon-play" />
				</div>
			</a>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="rhu7LAnc_kA" onClose={() => setOpen(false)} />
		</>
	)
}