import React from 'react';

interface FilterButtonProps {
	filterName: string;
	activeFilter: string | null;
	toggleDropdown: (filterName: string) => void;
	applyFilter: (filterName: string, value: string) => void;
	options: string[];
	isMultiSelect: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({
	filterName,
	activeFilter,
	toggleDropdown,
	applyFilter,
	options,
	isMultiSelect,
}) => {
	return (
		<div className="relative">
			<button
				className={`${
					activeFilter === filterName ? 'bg-[#0694a2] text-white' : 'bg-gray-100 text-gray-700'
				} rounded-full px-4 py-2 text-sm focus:outline-none hover:bg-[#057b85] hover:text-white flex items-center`}
				onClick={() => toggleDropdown(filterName)}>
				{filterName}
				<svg
					className={`ml-2 w-5 h-5 transition-transform ${activeFilter === filterName ? 'transform rotate-180' : ''}`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			{activeFilter === filterName && (
				<div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10 transition-opacity duration-300 opacity-100">
					{/* Dropdown content */}
					{options.map((option) => (
						<p
							key={option}
							className={`text-gray-700 cursor-pointer ${isMultiSelect && 'hover:bg-gray-200 p-2 rounded'}`}
							onClick={() => applyFilter(filterName, option)}>
							{option}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default FilterButton;
