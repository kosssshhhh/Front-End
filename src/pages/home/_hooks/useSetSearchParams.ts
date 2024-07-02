import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSetSearchParams = (selectedFilters: { [key: string]: string | string[] | null }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const newSearchParams = new URLSearchParams();

		newSearchParams.delete('category');

		Object.keys(selectedFilters).forEach((key) => {
			const value = selectedFilters[key];
			if (Array.isArray(value)) {
				value.forEach((v) => newSearchParams.append(key, v));
			} else if (value !== null && value !== undefined) {
				newSearchParams.set(key, value);
			} else {
				newSearchParams.delete(key);
			}
		});

		setSearchParams(newSearchParams);
	}, [selectedFilters]);
};
