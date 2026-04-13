
import Layout from "@/components/layout/Layout"
import AccountBar4 from "@/components/sections/AccountBar4"
import DownloadApp from "@/components/sections/DownloadApp"
import FlatCities5 from "@/components/sections/FlatCities5"
import FlatNews4 from "@/components/sections/FlatNews4"
import FlatTestimonial6 from "@/components/sections/FlatTestimonial6"
import LuxuryHome5 from "@/components/sections/LuxuryHome5"
import Parallax2 from "@/components/sections/Parallax2"
import Slider7 from "@/components/sections/Slider7"
import WorkWithUs3 from "@/components/sections/WorkWithUs3"
import WorkWithUs6 from "@/components/sections/WorkWithUs6"

export default function Home() {

	return (
		<>

			<Layout headerStyle={7} mainContentCls="default">
				<Slider7 />
				<FlatCities5 />
				{/* <WorkWithUs3 /> */}
				{/* <AccountBar4 /> */}
				<WorkWithUs6 />
				{/* <Parallax2 /> */}
				{/* <LuxuryHome5 /> */}
				{/* <FlatTestimonial6 /> */}
				<FlatNews4 />
				{/* <DownloadApp /> */}
			</Layout>
		</>
	)
}
