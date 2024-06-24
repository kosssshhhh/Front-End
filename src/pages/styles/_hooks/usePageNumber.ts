import { useEffect } from 'react';

import usePageStore from '@/stores/pageStore';
import { useSearchParams } from 'react-router-dom';

// TODO: 상위 hooks 디렉토리로 이동

export const usePageNumber = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const setPage = usePageStore((state) => state.setPageNumber);
	const page = usePageStore((state) => state.page);

	useEffect(() => {
		if (searchParams.get('page') == null) {
			searchParams.set('page', '1');
			setPage(1);
		} else {
			setPage(Number(searchParams.get('page')));
		}
		setSearchParams(searchParams);
	}, [searchParams.get('page')]);

	useEffect(() => {
		console.log(`page`, page);
	}, [page]);
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
