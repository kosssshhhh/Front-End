import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';

export const useFetchCategory = (mallTypeId: string) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['category'],
		queryFn: () => {
			console.log('Fetching category');
			return httpInterface.getCategory(mallTypeId);
		},
	});
	return { data, isLoading, isError };
};
