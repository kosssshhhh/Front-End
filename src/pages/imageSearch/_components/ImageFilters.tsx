import React from 'react';
import { MALL_TYPE_ID } from '@/constants/mallTypeId';

interface ImageFiltersProps {
	category: string;
	offset: string;
	handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleOffsetChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageFilters({
	category,
	offset,
	handleCategoryChange,
	handleOffsetChange,
}: ImageFiltersProps) {
	return (
		<div className="p-6">
			<div className="mt-4">
				<label className="block text-lg font-medium text-gray-700 mb-1">쇼핑몰</label>
				<span className="text-sm text-gray-500">쇼핑몰을 선택한 후 카테고리를 선택해주세요</span>
				<select
					className="mt-2 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
					value={category}
					onChange={handleCategoryChange}>
					<option value="">전체</option>
					{Object.keys(MALL_TYPE_ID).map((key) => (
						<option key={key} value={MALL_TYPE_ID[key]}>
							{key}
						</option>
					))}
				</select>
			</div>
			<div>
				<label className="block text-lg font-medium text-gray-700">카테고리</label>
				<select
					className='"mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
					value={category}
					onChange={handleCategoryChange}>
					<option>전체</option>
					<option>상의</option>
					<option>하의</option>
				</select>
			</div>
			<div className="mt-4">
				<label className="block text-lg font-medium text-gray-700">제공받을 이미지 개수</label>
				<input
					type="number"
					className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
					value={offset}
					onChange={handleOffsetChange}
				/>
			</div>
		</div>
	);
}
