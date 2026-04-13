import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('./CounterUp'), {
	ssr: false,
})

export default function CounterNumber() {
	return (
		<>
			<CounterUp count={686} time={1} />
		</>
	)
}
