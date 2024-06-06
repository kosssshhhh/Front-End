import useNetwork from '@/stores/networkStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchStyleDetail = () => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const { productId, mallType } = useParams();

	if (!productId || !mallType) {
		return {
			data: null,
			isLoading: false,
			isError: false,
		};
	}

	// const [styleDetail, setStyleDetail] = useState({});

	const { data, isLoading, isError } = useQuery({
		queryKey: ['styleDetail'],
		queryFn: () => httpInterface.getStyleDetail(mallType, productId),
	});

	return { data, isLoading, isError };
};
