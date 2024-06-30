import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

export const useFetchStyles = () => {
	const [searchParams] = useSearchParams();

	const httpInterface = useNetwork((state) => state.httpInterface);

	const fetchQuery = () => {
		const params = new URLSearchParams(searchParams);

		// page 파라미터를 1 빼서 설정
		const page = params.get('page');
		if (page) {
			const adjustedPage = (parseInt(page, 10) - 1).toString();
			params.set('page', adjustedPage);
		}

		console.log(params);

		return params;
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styles', fetchQuery().toString()],
		queryFn: () => httpInterface.getStyles(fetchQuery()),
	});

	return { data, isLoading, isError };
};
