import React, { useState } from 'react';
import Card from '@/components/Card';
import FilterButton from '@/pages/home/_components/filter/FilterButton';
import FilterTags from '@/pages/home/_components/filter/FilterTags.tsx';
import '@/styles/custom.css';

interface SelectedFilters {
	mall: string | null;
	category: string[];
	period: string | null;
	[key: string]: string | string[] | null;
}

export default function HomeFilter() {
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
		mall: null,
		category: [],
		period: null,
	});

	const toggleDropdown = (filterName: string) => {
		setActiveFilter((prev) => (prev === filterName ? null : filterName));
	};

	const applyFilter = (filterName: string, value: string) => {
		if (filterName === 'category') {
			setSelectedFilters((prev) => {
				const newCategories = (prev.category as string[]).includes(value)
					? (prev.category as string[]).filter((category) => category !== value)
					: [...(prev.category as string[]), value];
				return { ...prev, category: newCategories };
			});
		} else {
			setSelectedFilters((prev) => ({ ...prev, [filterName]: value }));
		}
		setActiveFilter(null); // Close the dropdown after applying filter
	};

	const removeFilter = (filterName: string, value?: string) => {
		if (filterName === 'category' && value) {
			setSelectedFilters((prev) => ({
				...prev,
				category: (prev.category as string[]).filter((category) => category !== value),
			}));
		} else {
			setSelectedFilters((prev) => ({ ...prev, [filterName]: null }));
		}
	};

	return (
		<Card className="bg-white col-span-2 p-4 flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
			<div className="w-full md:w-auto flex items-center space-x-4">
				<FilterButton
					filterName="mall"
					activeFilter={activeFilter}
					toggleDropdown={toggleDropdown}
					applyFilter={applyFilter}
					options={['쇼핑몰1', '쇼핑몰2', '쇼핑몰3']}
					isMultiSelect={false}
				/>
				<FilterButton
					filterName="category"
					activeFilter={activeFilter}
					toggleDropdown={toggleDropdown}
					applyFilter={applyFilter}
					options={['카테고리1', '카테고리2', '카테고리3']}
					isMultiSelect={true}
				/>
				<FilterButton
					filterName="period"
					activeFilter={activeFilter}
					toggleDropdown={toggleDropdown}
					applyFilter={applyFilter}
					options={['기간1', '기간2', '기간3']}
					isMultiSelect={false}
				/>
			</div>
			<FilterTags selectedFilters={selectedFilters} removeFilter={removeFilter} />
		</Card>
	);
}
