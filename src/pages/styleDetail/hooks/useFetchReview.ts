import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useParams } from 'react-router-dom';

export const useFetchReview = () => {
	const [searchParams] = useSearchParams();
	const { mallType, styleId } = useParams<{ mallType: string; styleId: string }>();

	const page = searchParams.get('page') || '1'; // 기본값 설정
	const startDate = searchParams.get('startDate') || ''; // 기본값 설정
	const rate = searchParams.getAll('rate');

	console.log(`mallType: ${mallType}, styleId: ${styleId}, page: ${page}, startDate: ${startDate}, rate: ${rate}`);

	const httpInterface = useNetwork((state) => state.httpInterface);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styleReview', mallType, styleId, page, startDate, rate],
		queryFn: () => {
			if (mallType && styleId) {
				const response = httpInterface.getStyleReview(mallType, styleId, page, startDate, rate);
				console.log('API reponse: ', response);
				return response;
			}
			return Promise.reject('Required parameters are missing');
		},
		enabled: !!mallType && !!styleId, // mallType과 styleId가 존재할 때만 쿼리 실행
	});

	return { data, isLoading, isError };
};
