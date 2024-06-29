import useNetwork from '@/stores/networkStore.ts';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { MALL_TYPE_ID } from '@/constants/mallTypeId.ts';

export const useFetchPriceTrend = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	// const { mallTypeId } = useParams();

	const mallTypeId = '1';

	const { data, isLoading, isError } = useQuery({
		queryKey: ['priceTrend'],
		queryFn: () => {
			if (mallTypeId) {
				// return httpInterface.getPriceTrend(mallTypeId);
				return httpInterface.getPriceTrend(MALL_TYPE_ID.MUSINSA);
			}

			return Promise.reject('Required parameters are missing');
		},
		enabled: !!mallTypeId,
	});

	return { data, isLoading, isError };
};
