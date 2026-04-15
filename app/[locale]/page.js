
import Layout from "@/components/layout/Layout"
import FlatCities5 from "@/components/sections/FlatCities5"
import FlatNews4 from "@/components/sections/FlatNews4"
import Slider7 from "@/components/sections/Slider7"
import WorkWithUs6 from "@/components/sections/WorkWithUs6"

export default function Home() {

	return (
		<>

			<Layout headerStyle={7} mainContentCls="default">
				<Slider7 />
				<FlatCities5 />
				<WorkWithUs6 />
				<FlatNews4 />
			</Layout>
		</>
	)
}
