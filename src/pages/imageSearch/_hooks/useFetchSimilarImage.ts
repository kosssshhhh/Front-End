import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useFetchSimilarImage = (
	formData: FormData | null,
	shouldFetch: boolean,
	setShouldFetch: (value: boolean) => void,
) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	console.log("formData?.get('mallTypeId')", formData?.get('mallTypeId'));
	console.log("formData?.get('categoryList')", formData?.get('categoryList'));
	console.log("formData?.get('offset')", formData?.get('offset'));
	console.log("formData?.get('image')", formData?.get('image'));

	const { data, isLoading, isError } = useQuery({
		queryKey: [
			'similarImage',
			formData?.get('mallTypeId'),
			formData?.get('categoryList'),
			formData?.get('offset'),
			formData?.get('image'),
		],
		queryFn: () => {
			// if (formData.get('categroyList') === 0) {
			// 	formData.set('categoryList', null);
			// }
			return httpInterface.postUserInputImage(formData);
		},
		enabled: shouldFetch,
	});

	useEffect(() => {
		if (shouldFetch) {
			setShouldFetch(false);
		}
	}, [isLoading]);

	return { data, isLoading, isError };
};
