import useNetwork from '@/stores/networkStore';

export default function Home() {
	const httpInterface = useNetwork((state) => state.httpInterface);

	httpInterface.getMockData().then((res) => {
		console.log(res);
	});

	return (
		<>
			<h1>Home Page</h1>
		</>
	);
}
