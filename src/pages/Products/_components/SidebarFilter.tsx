// FilterSidebar.tsx
import React from 'react';
import { SidebarFilterProps } from '@/pages/Products/_types/sidebarFilter.type';
import { svgObj } from '@/assets/svg';

function FilterSidebar({ isOpen, onClose }: SidebarFilterProps) {
	const handleChange = (e: React.ChangeEvent) => {
		// const { name, value } = e.target;
		// setFilters((prev) => ({
		// 	...prev,
		// 	[name]: value,
		// }));
	};

	return (
		<div
			className={`fixed z-50 inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out`}>
			<div className="p-4 relative">
				<h2 className="text-xl font-bold mb-4">필터</h2>
				<button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded">
					{svgObj.close()}
				</button>
				<div>
					<label className="block mb-2">브랜드</label>
					<input name="brand" onChange={handleChange} className="w-full p-2 border rounded" />
				</div>
				<div>
					<label className="block mb-2">최소 가격</label>
					<input
						type="number"
						name="minPrice"
						onChange={handleChange}
						// value={filters.minPrice}
						className="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label className="block mb-2">최대 가격</label>
					<input
						type="number"
						name="maxPrice"
						onChange={handleChange}
						// value={filters.maxPrice}
						className="w-full p-2 border rounded"
					/>
				</div>
			</div>
		</div>
	);
}

export default FilterSidebar;
