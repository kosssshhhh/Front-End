import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';

export const useFetchSimilarImage = (formData: FormData | null, shouldFetch: boolean) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['similarImage', formData],
		queryFn: () => {
			return httpInterface.postUserInputImage(formData);
		},
		enabled: shouldFetch,
	});

	return { data, isLoading, isError };
};
