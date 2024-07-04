import React from 'react';

interface FilterTagsProps {
	selectedFilters: {
		[key: string]: string | string[] | null;
	};
	removeFilter: (filterName: string, value?: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ selectedFilters, removeFilter }) => {
	return (
		<div className="w-full flex items-center space-x-2 mt-4">
			{Object.keys(selectedFilters).map((filterKey) =>
				Array.isArray(selectedFilters[filterKey])
					? (selectedFilters[filterKey] as string[]).map((value, index) => (
							<div key={index} className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full flex items-center space-x-2">
								<span>{value}</span>
								<button className="focus:outline-none" onClick={() => removeFilter(filterKey, value)}>
									<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						))
					: selectedFilters[filterKey] && (
							<div
								key={filterKey}
								className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full flex items-center space-x-2">
								<span>{selectedFilters[filterKey]}</span>
								<button className="focus:outline-none" onClick={() => removeFilter(filterKey)}>
									<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						),
			)}
		</div>
	);
};

export default FilterTags;
