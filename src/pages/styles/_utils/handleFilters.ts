import { CategoryType, FilterType } from '@/pages/styles/_types/sidebarFilter.type';

export const handleChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
	setDateOption: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const { name, value } = e.target;
	setFilters((prev) => ({
		...prev,
		[name]: value,
	}));

	// 날짜 옵션 변경 시 상태 업데이트
	if (name === 'date' && value === 'select') {
		setDateOption(true);
	} else if (name === 'date') {
		setDateOption(false);
	}
};

export const handleMallTypeChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
	handleReset: () => void,
) => {
	const { name, value } = e.target;

	// console.log(name, value);

	handleReset();

	setFilters((prev) => ({
		...prev,
		[name]: value,
	}));
};

export const handleDateOptionChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
	setDateOption: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const { name, value } = e.target;

	setFilters((prev) => ({
		...prev,
		startDate: '',
		endDate: '',
		[name]: value,
	}));

	// 날짜 옵션 변경 시 상태 업데이트
	if (name === 'date' && value === 'select') {
		setDateOption(true);
	} else if (name === 'date') {
		setDateOption(false);
	}
};

export const handleSortChange = (
	e: React.ChangeEvent<HTMLSelectElement>,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
	const [sortBy, sortOrder] = e.target.value.split(',');
	setFilters((prev) => ({
		...prev,
		sortBy,
		sortOrder: sortOrder as 'asc' | 'desc',
	}));
};

export const handleCategoryChange = (
	category: CategoryType,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
	setFilters((prev) => {
		const existingCategoryIndex = prev.category.findIndex((cat) => cat.categoryId === category.categoryId);
		if (existingCategoryIndex >= 0) {
			return {
				...prev,
				category: prev.category.filter((cat) => cat.categoryId !== category.categoryId),
			};
		} else {
			return {
				...prev,
				category: [...prev.category, { categoryId: category.categoryId, name: category.name }],
			};
		}
	});
};

export const handleRemoveCategory = (
	category: CategoryType,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
	setFilters((prev) => ({
		...prev,
		category: prev.category.filter((cat) => cat.categoryId !== category.categoryId),
	}));
};

export const handleBrandChange = (brand: string, setFilters: React.Dispatch<React.SetStateAction<FilterType>>) => {
	if (typeof brand !== 'string') return;

	setFilters((prev) => {
		const existingBrandIndex = prev.brand.findIndex((b) => b === brand);
		if (existingBrandIndex >= 0) {
			return {
				...prev,
				brand: prev.brand.filter((b) => b !== brand),
			};
		} else {
			return {
				...prev,
				brand: [...prev.brand, brand],
			};
		}
	});
};

// export const handleDateChange = (
// 	e: React.ChangeEvent<HTMLInputElement>,
// 	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
// ) => {
// 	const { name, value } = e.target;
// 	setFilters((prev) => ({
// 		...prev,
// 		[name]: value,
// 	}));
// };

export const handleDateChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	setFilters: React.Dispatch<React.SetStateAction<FilterType>>,
) => {
	const { name, value } = e.target;

	setFilters((prevFilters) => ({
		...prevFilters,
		[name]: '',
	}));

	setTimeout(() => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: value,
		}));
	}, 0);
};

export const toggleCategory = (
	categoryId: number,
	setExpandedCategories: React.Dispatch<React.SetStateAction<Set<number>>>,
) => {
	setExpandedCategories((prev) => {
		const newExpandedCategories = new Set(prev);
		if (newExpandedCategories.has(categoryId)) {
			newExpandedCategories.delete(categoryId);
		} else {
			newExpandedCategories.add(categoryId);
		}
		return newExpandedCategories;
	});
};

export const handleSubSidebar = (
	type: string,
	subSidebar: string,
	setSubSidebar: React.Dispatch<React.SetStateAction<string>>,
) => {
	if (subSidebar === type) return setSubSidebar('');
	setSubSidebar(type);
};
