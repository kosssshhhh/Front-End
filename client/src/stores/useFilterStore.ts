import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FilterType, CategoryType } from '@/pages/styles/_types/sidebarFilter.type';

interface FilterState {
	filters: FilterType;
	setFilters: (newFilters: Partial<FilterType>) => void;
	resetFilters: () => void;
	handleSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
	handleCategoryChange: (category: CategoryType) => void;
	handleBrandChange: (brand: string) => void;
}

const useFilterStore = create<FilterState>()(
	devtools(
		(set) => ({
			filters: {
				mallTypeId: '',
				startDate: '',
				endDate: '',
				date: '',
				category: [],
				brand: [],
				sortBy: '',
				sortOrder: 'desc',
			},

			setFilters: (newFilters) => {
				set((state) => ({
					filters: {
						...state.filters,
						...newFilters,
					},
				}));
			},

			resetFilters: () => {
				set({
					filters: {
						mallTypeId: '',
						startDate: '',
						endDate: '',
						date: '',
						category: [],
						brand: [],
						sortBy: '',
						sortOrder: 'desc',
					},
				});
			},

			handleSortChange: (sortBy, sortOrder) => {
				set((state) => ({
					filters: {
						...state.filters,
						sortBy,
						sortOrder,
					},
				}));
			},

			handleCategoryChange: (category) => {
				set((state) => {
					const existingCategoryIndex = state.filters.category.findIndex(
						(cat) => cat.categoryId === category.categoryId,
					);
					const updatedCategories =
						existingCategoryIndex >= 0
							? state.filters.category.filter((cat) => cat.categoryId !== category.categoryId)
							: [...state.filters.category, category];

					return {
						filters: {
							...state.filters,
							category: updatedCategories,
						},
					};
				});
			},

			handleBrandChange: (brand) => {
				set((state) => {
					const existingBrandIndex = state.filters.brand.findIndex((b) => b === brand);
					const updatedBrands =
						existingBrandIndex >= 0 ? state.filters.brand.filter((b) => b !== brand) : [...state.filters.brand, brand];

					return {
						filters: {
							...state.filters,
							brand: updatedBrands,
						},
					};
				});
			},
		}),
		{ name: 'filterParams' },
	),
);

export default useFilterStore;
