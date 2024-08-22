import { useEffect, useState } from 'react';

export const useCheckLastPage = (end: number, total: number) => {
	const [isLastPage, setIsLastPage] = useState<boolean>(false);
	useEffect(() => {
		setIsLastPage(end >= total);
	}, [end, total]);

	return isLastPage;
};

export const useCheckFirstPage = (start: number) => {
	const [isFirstPage, setIsFirstPage] = useState<boolean>(false);
	useEffect(() => {
		setIsFirstPage(start === 1);
	}, [start]);

	return isFirstPage;
};
