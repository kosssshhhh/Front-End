import { CategoryType, FilterType } from '@/pages/styles/_types/sidebarFilter.type';
import useFilterStore from '@/stores/useFilterStore';

export const handleChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	setDateOption: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const { name, value } = e.target;
	const { setFilters } = useFilterStore.getState();

	setFilters({
		[name]: value,
	});

	// 날짜 옵션 변경 시 상태 업데이트
	if (name === 'date' && value === 'select') {
		setDateOption(true);
	} else if (name === 'date') {
		setDateOption(false);
	}
};

export const handleMallTypeChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	handleReset: () => void,
) => {
	const { name, value } = e.target;
	const { setFilters } = useFilterStore.getState();

	handleReset();

	setFilters({
		[name]: value,
	});
};

export const handleDateOptionChange = (
	e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	setDateOption: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	const { name, value } = e.target;
	const { setFilters } = useFilterStore.getState();

	setFilters({
		startDate: '',
		endDate: '',
		[name]: value,
	});

	// 날짜 옵션 변경 시 상태 업데이트
	if (name === 'date' && value === 'select') {
		setDateOption(true);
	} else if (name === 'date') {
		setDateOption(false);
	}
};

export const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
	const [sortBy, sortOrder] = e.target.value.split(',');
	const { setFilters } = useFilterStore.getState();

	setFilters({
		sortBy,
		sortOrder: sortOrder as 'asc' | 'desc',
	});
};

export const handleCategoryChange = (category: CategoryType) => {
	const { handleCategoryChange } = useFilterStore.getState();
	handleCategoryChange(category);
};

export const handleRemoveCategory = (category: CategoryType) => {
	const { setFilters, filters } = useFilterStore.getState();

	setFilters({
		category: filters.category.filter((cat) => cat.categoryId !== category.categoryId),
	});
};

export const handleBrandChange = (brand: string) => {
	const { filters, setFilters } = useFilterStore.getState();

	const updatedBrands = filters.brand.includes(brand)
		? filters.brand.filter((b) => b !== brand)
		: [...filters.brand, brand];

	setFilters({ brand: updatedBrands });
};

export const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const { name, value } = e.target;
	const { setFilters } = useFilterStore.getState();

	// Clear the date field first
	setFilters({ [name]: '' } as Partial<FilterType>);

	// Set the date field after a brief delay
	setTimeout(() => {
		setFilters({ [name]: value } as Partial<FilterType>);
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
