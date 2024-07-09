import { useState } from 'react';

export const useFilters = () => {
	const [category, setCategory] = useState<string>('T-Shirts');
	const [offset, setOffset] = useState<string>('5');

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(event.target.value);
	};

	const handleOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOffset(event.target.value);
	};

	return {
		category,
		offset,
		handleCategoryChange,
		handleOffsetChange,
	};
};
