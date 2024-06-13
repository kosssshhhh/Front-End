import React, { useEffect, useState } from 'react';
import { renderStars } from '@/utils/renderStars';

import { Count } from '@/pages/styleDetail/_types/stylesReview.type';

interface ReviewFilterProps {
	reviewCount: Count;
}

const ReviewFilter = ({ reviewCount }: ReviewFilterProps) => {
	const [selectedDateFilter, setSelectedDateFilter] = useState<string>('Newest');
	const [selectedStarFilters, setSelectedStarFilters] = useState<number[]>([]);

	const handleDateFilterClick = (filter: string) => {
		setSelectedDateFilter(filter);
	};

	const handleStarFilterClick = (rating: number) => {
		setSelectedStarFilters((prev) =>
			prev.includes(rating) ? prev.filter((star) => star !== rating) : [...prev, rating],
		);
	};

	useEffect(() => {
		console.log(selectedDateFilter, selectedStarFilters);
	}, [selectedDateFilter, selectedStarFilters]);

	return (
		<div className="mb-5">
			<div className="flex space-x-2 mb-4">
				{['Latest Month', '3 Months', '6 Months', '12 Months', 'Newest'].map((filter, index) => (
					<div
						key={index}
						onClick={() => handleDateFilterClick(filter)}
						className={`cursor-pointer p-2 text-sm ${
							selectedDateFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
						} rounded`}>
						{filter}
					</div>
				))}
			</div>
			<div className="flex space-x-2">
				<div className="p-3 rounded bg-gray-200">{reviewCount.total} Review</div>
				{[1, 2, 3, 4, 5].map((rating, index) => {
					const key = `rate${rating}` as keyof Count;
					return (
						<div
							key={index}
							onClick={() => handleStarFilterClick(rating)}
							className={`cursor-pointer p-3 rounded flex items-center justify-center ${
								selectedStarFilters.includes(rating) ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'
							}`}>
							<div className="flex items-center">
								{renderStars(rating)}
								<span className="ml-2">({reviewCount[key]})</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ReviewFilter;
