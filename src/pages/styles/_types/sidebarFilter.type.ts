export interface SidebarFilterProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface CategoryType {
	categoryId: number;
	name: string;
}

export interface FilterType {
	mallTypeId: string;
	date: string;
	startDate: string;
	endDate: string;
	category: CategoryType[];
	brand: string[];
	sortBy: string;
	sortOrder: 'asc' | 'desc';
}
