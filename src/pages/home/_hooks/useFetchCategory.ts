import React, { useEffect } from 'react';

import useNetwork from '@/stores/networkStore';

export const useFetchCategory = (
	mallTypeId: string,
	setCategoryOptions: React.Dispatch<React.SetStateAction<string[]>>,
) => {
	const httpInterface = useNetwork((state) => state.httpInterface);

	useEffect(() => {
		httpInterface
			.getCategory(mallTypeId)
			.then((res) => {
				setCategoryOptions(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [mallTypeId]);
};
