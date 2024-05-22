import useNetwork from '@/stores/networkStore';
import ProductsContainer from './_components/ProductsContainer';
import ProductsTable from './_components/ProductsTable';
import ProductsTableFooter from './_components/ProductsTableFooter';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
	return (
		<>
			<ProductsContainer>
				<ProductsTable />
				<ProductsTableFooter />
			</ProductsContainer>
		</>
	);
}
