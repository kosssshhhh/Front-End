import useNetwork from '@/stores/networkStore';
import { ProductType } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchProducts = () => {
	const [searchParams] = useSearchParams();

	const [products, setProducts] = useState<ProductType[]>([]);
	const httpInterface = useNetwork((state) => state.httpInterface);

	const fetchQuery = () => {
		const params = new URLSearchParams(searchParams);
		console.log(params);

		return params;
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styles', searchParams.toString()],
		queryFn: () => httpInterface.getStyles(fetchQuery()),
	});

	useEffect(() => {
		if (data?.data && Array.isArray(data.data)) {
			setProducts(data.data);
		}
	}, [data]);

	return { products, isLoading, isError };
};
