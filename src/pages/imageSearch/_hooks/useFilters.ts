import { useEffect, useState } from 'react';
import { CategoryType } from '@/pages/styles/_types/sidebarFilter.type';

export const useFilters = () => {
	const [mallType, setMallType] = useState<string>('');
	const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
	const [offset, setOffset] = useState<string>('5');

	const handleCategoryChange = (categoryId: string, name: string) => {
		if (categoryId === '' && name === '') {
			setCategoryList([]);
			return;
		}

		setCategoryList((prev) => {
			const isExist = prev.find((item) => item.categoryId === categoryId);
			if (isExist) {
				return prev.filter((item) => item.categoryId !== categoryId);
			} else {
				return [...prev, { categoryId, name }];
			}
		});
	};

	const handleOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOffset(event.target.value);
	};

	const handleMallTypeChange = (mallType: string) => {
		setMallType(mallType);
	};

	return {
		mallType,
		categoryList,
		offset,
		handleMallTypeChange,
		handleCategoryChange,
		handleOffsetChange,
	};
};
