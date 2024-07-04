import { MALL_TYPE_ID } from '@/constants/mallTypeId';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SelectedFilters {
	[key: string]: string | string[] | null;
}

type SetSelectedFilters = React.Dispatch<React.SetStateAction<any>>;

export const useSyncQueryParams = (setSelectedFilters: SetSelectedFilters) => {
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const params: SelectedFilters = {};
		for (const [key, value] of searchParams.entries()) {
			if (params[key]) {
				if (Array.isArray(params[key])) {
					(params[key] as string[]).push(value);
				} else {
					params[key] = [params[key] as string, value];
				}
			} else {
				params[key] = value;
			}
		}

		// mallTypeId가 없으면 기본 값을 "무신사"로 설정
		if (!params.mallTypeId) {
			params.mallTypeId = MALL_TYPE_ID.MUSINSA;
		}

		setSelectedFilters(params);
	}, []);
};
