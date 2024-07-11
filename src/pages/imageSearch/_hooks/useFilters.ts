import { useEffect, useState } from 'react';
import { CategoryType } from '@/pages/styles/_types/sidebarFilter.type';

export const useFilters = () => {
	const [mallType, setMallType] = useState<string>('');
	const [category, setCategory] = useState<CategoryType>({ categoryId: '', name: '' });
	const [offset, setOffset] = useState<string>('5');

	const handleCategoryChange = (categoryId: string, name: string) => {
		// setCategory(event.target.value);
		setCategory({ categoryId, name });
	};

	const handleOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOffset(event.target.value);
	};

	const handleMallTypeChange = (mallType: string) => {
		setMallType(mallType);
	};

	return {
		mallType,
		category,
		offset,
		handleMallTypeChange,
		handleCategoryChange,
		handleOffsetChange,
	};
};
