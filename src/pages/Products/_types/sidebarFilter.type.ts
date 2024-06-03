export interface SidebarFilterProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface CategoryType {
	categoryId: number;
	name: string;
}

export interface FilterType {
	mallType: string;
	date: string;
	startDate: string;
	endDate: string;
	category: CategoryType[];
	brand: string[];
}
