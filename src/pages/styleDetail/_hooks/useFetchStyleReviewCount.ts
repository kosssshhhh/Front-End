import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useFetchStyleReviewCount = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { styleId, mallTypeId } = useParams();

	if (!styleId || !mallTypeId) {
		return {
			data: null,
			isLoading: false,
			isError: false,
		};
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styleReviewCount'],
		queryFn: () => httpInterface.getStyleReviewCount(mallTypeId, styleId),
	});

	return { data, isLoading, isError };
};
