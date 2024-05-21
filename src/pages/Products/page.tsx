import useNetwork from '@/stores/networkStore';
import ProductsContainer from './_components/ProductsContainer';
import ProductsTable from './_components/ProductsTable';
import ProductsTableFooter from './_components/ProductsTableFooter';

export default function Products() {
	const httpInterface = useNetwork((state) => state.httpInterface);

	httpInterface.getMockData().then((res) => {
		console.log(res);
	});

	return (
		<>
			<ProductsContainer>
				<ProductsTable />
				<ProductsTableFooter />
			</ProductsContainer>
		</>
	);
}
