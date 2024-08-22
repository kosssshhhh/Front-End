import useNetwork from '@/stores/networkStore.ts';
import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { MALL_TYPE_ID } from '@/constants/mallTypeId.ts';

export const useFetchTop10Brand = () => {
	const [searchParams] = useSearchParams();

	const httpInterface = useNetwork((state) => state.httpInterface);

	const mallTypeId = searchParams.get('mallTypeId');

	const fetchQuery = () => {
		const params = new URLSearchParams(searchParams);

		return params;
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['top10Brand', fetchQuery().toString()],
		queryFn: () => {
			return httpInterface.getTop10Brand(fetchQuery());
		},
		enabled: !!mallTypeId,
	});

	return { data, isLoading, isError };
};
