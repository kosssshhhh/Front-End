import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import usePageStore from '@/stores/pageStore';

// TODO: 상위 hooks 디렉토리로 이동

export const usePageNumber = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const setPage = usePageStore((state) => state.setPageNumber);
	const page = usePageStore((state) => state.page);

	const pageParams = searchParams.get('page');

	useEffect(() => {
		if (pageParams === null) {
			searchParams.set('page', '1');
			setPage(1);
		} else {
			setPage(Number(pageParams));
		}
		setSearchParams(searchParams, { replace: true });
	}, [pageParams]);
};

export const useControlPageNumber = () => {
	const page = usePageStore((state) => state.page);
	const setPage = usePageStore((state) => state.setPageNumber);
	const [searchParams, setSearchParams] = useSearchParams();

	const increasePage = () => {
		setPage(page + 1);
		searchParams.set('page', `${page + 1}`);
		setSearchParams(searchParams);
	};

	const decreasePage = () => {
		if (page <= 1) return;

		setPage(page - 1);
		searchParams.set('page', `${page - 1}`);
		setSearchParams(searchParams);
	};

	return [increasePage, decreasePage];
};
