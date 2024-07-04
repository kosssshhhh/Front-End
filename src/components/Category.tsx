import { useState } from "react";

export default funcion Categories(categories: any[]) {
const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());


	return (
		<ul className="pl-4">
			{categories.map((category) => (
				<li key={category.categoryId}>
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={(selectedFilter as string[]).includes(category.categoryId.toString())}
							onChange={() => handleCategoryChange(category)}
						/>
						<span className="ml-2 cursor-pointer" onClick={() => toggleCategory(category.categoryId)}>
							{category.name}
						</span>
						{category.children.length > 0 && (
							<button onClick={() => toggleCategory(category.categoryId)}>
								{expandedCategories.has(category.categoryId) ? '-' : '+'}
							</button>
						)}
					</div>
					{expandedCategories.has(category.categoryId) && renderCategories(category.children)}
				</li>
			))}
		</ul>
	);
};
