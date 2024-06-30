import React from 'react';

interface Category {
	categoryId: number;
	name: string;
	children: Category[];
}

interface CategoryDropdownProps {
	categories: Category[];
	applyFilter: (filterName: string, value: string) => void;
}

const renderCategories = (
	categories: Category[],
	applyFilter: (filterName: string, value: string) => void,
	level = 0,
) => {
	return categories.map((category) => (
		<div key={category.categoryId} style={{ marginLeft: level * 10 }}>
			<p
				className="text-gray-700 cursor-pointer hover:bg-gray-200 p-2 rounded"
				onClick={() => applyFilter('category', category.name)}>
				{category.name}
			</p>
			{category.children.length > 0 && renderCategories(category.children, applyFilter, level + 1)}
		</div>
	));
};

// TODO: Dropdow 카테고리 적용
const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories, applyFilter }) => {
	return <div>{renderCategories(categories, applyFilter)}</div>;
};

export default CategoryDropdown;
