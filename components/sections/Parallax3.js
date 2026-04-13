
import Link from "next/link"

export default function Parallax3() {
	return (
		<>

			<div className="parallax-wrap style-1">
				<div className="content color-white">
					<div className="heading wow fadeInUp">Discover a Place You’ll <br /> Love To Live</div>
					<div className="text wow fadeInUp">Pellentesque egestas elementum egestas faucibus sem.<br /> Velit
						nunc egestas ut morbi. Leo diam diam </div>
					<Link href="/#" className="tf-button-primary m-auto wow fadeInUp">View Properties<i className="icon-arrow-right-add" /></Link>
				</div>
			</div>
		</>
	)
}
