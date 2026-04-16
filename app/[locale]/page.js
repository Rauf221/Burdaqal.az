
import Layout from "@/components/layout/Layout"
import Slider7 from '../../components/sections/Slider7'
import FlatCities5 from '../../components/sections/FlatCities5'
import WorkWithUs6 from '../../components/sections/WorkWithUs6'
import FlatNews4 from '../../components/sections/FlatNews4'

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
