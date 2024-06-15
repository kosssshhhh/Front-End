import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useFetchStyleReviewCount = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { styleId, mallType } = useParams();

	if (!styleId || !mallType) {
		return {
			data: null,
			isLoading: false,
			isError: false,
		};
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styleReviewCount'],
		queryFn: () => httpInterface.getStyleReviewCount(mallType, styleId),
	});

	return { data, isLoading, isError };
};
