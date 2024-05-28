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

	// useEffect(() => {
	// 	// 개별 쿼리 파라미터 값 가져오기
	// 	const mallType = searchParams.get('mallType') || '';
	// 	const startDate = searchParams.get('startDate') || '';
	// 	const endDate = searchParams.get('endDate') || '';
	// 	const category = searchParams.getAll('category');
	// 	const brand = searchParams.getAll('brand');

	// 	console.log({ mallType, startDate, endDate, category, brand });
	// }, [searchParams]);

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
