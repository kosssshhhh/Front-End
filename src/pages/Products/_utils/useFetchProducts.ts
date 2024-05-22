import useNetwork from '@/stores/networkStore';
import { ProductType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useFetchProducts = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['products'],
		queryFn: () => httpInterface.getProducts(),
	});

	useEffect(() => {
		if (data?.data && Array.isArray(data.data)) {
			setProducts(data.data);
		}
	}, [data]);

	return { products, isLoading, isError };
};
