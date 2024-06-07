import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

// TODO: Style 별 Review fetch 과정 (page 포함해서)
//       API response data 확정되면

export const useFetchReview = (mallType: string, styleId: string, page: number) => {
	const [searchParams] = useSearchParams();

	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styles-review', page.toString()],
		queryFn: () => httpInterface.getStyleReview(mallType, styleId, page),
	});

	return { data, isLoading, isError };
};
