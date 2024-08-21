import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const useFetchStyleDetail = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);
	const { styleId, mallTypeId } = useParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styleDetail', mallTypeId, styleId],
		queryFn: () => {
			if (!mallTypeId || !styleId) {
				return Promise.reject(new Error('Missing mallTypeId or styleId'));
			}
			return httpInterface.getStyleDetail(mallTypeId, styleId);
		},
		enabled: !!mallTypeId && !!styleId, // mallType과 styleId가 존재할 때만 쿼리 실행
	});


	return { data, isLoading, isError };
};