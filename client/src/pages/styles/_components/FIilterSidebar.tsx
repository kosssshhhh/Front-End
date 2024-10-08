import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { svgObj } from '@/assets/svg';
import useNetwork from '@/stores/networkStore';

import { SidebarFilterProps } from '@/pages/styles/_types/sidebarFilter.type';
import { CategoryType } from '@/pages/styles/_types/sidebarFilter.type';

import { convertDate } from '@/pages/styles/_utils/convertDate';

import { MALL_TYPE_ID } from '@/constants/mallTypeId';

import {
	handleMallTypeChange,
	handleDateOptionChange,
	handleRemoveCategory,
	handleDateChange,
	toggleCategory,
	handleSubSidebar,
} from '@/pages/styles/_utils/handleFilters';

import useFilterStore from '@/stores/useFilterStore';

function FilterSidebar({ isOpen, onClose }: SidebarFilterProps) {
	const httpInterface = useNetwork((state) => state.httpInterface);

	const [_, setSearchParams] = useSearchParams();

	const { filters, setFilters, resetFilters, handleSortChange, handleCategoryChange, handleBrandChange } =
		useFilterStore();

	const [dateOption, setDateOption] = useState(false);
	const [subSidebar, setSubSidebar] = useState<string>('');
	const [subSidebarCategory, setSubSidebarCategory] = useState<CategoryType[]>([]);
	const [subSidebarBrand, setSubSidebarBrand] = useState<string[]>([]);
	const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

	useEffect(() => {
		if (subSidebar === 'category') {
			httpInterface.getCategory(filters.mallTypeId).then((data) => {
				if (data?.data && Array.isArray(data.data)) {
					setSubSidebarCategory(data.data);
				}
			});
		} else if (subSidebar === 'brand') {
			httpInterface.getBrand(filters.mallTypeId).then((data) => {
				if (data?.data && Array.isArray(data.data.brand)) {
					setSubSidebarBrand(data.data.brand);
				}
			});
		}
	}, [subSidebar]);

	const handleReset = () => {
		resetFilters(); // Zustand에서 제공하는 resetFilters 함수 호출
		setDateOption(false);
		setSubSidebarCategory([]);
		setSubSidebarBrand([]);
		setExpandedCategories(new Set());
	};

	const handleSubmit = () => {
		const params = new URLSearchParams();

		filters.mallTypeId === '' ? params.delete('mallTypeId') : params.set('mallTypeId', filters.mallTypeId);
		params.set('page', '1');

		filters.startDate === '' ? params.delete('startDate') : params.set('startDate', filters.startDate);
		filters.endDate === '' ? params.delete('endDate') : params.set('endDate', filters.endDate);

		filters.category.forEach((cat) => {
			params.append('category', `${cat.categoryId}`);
		});

		filters.brand.forEach((brand) => {
			params.append('brand', brand);
		});

		if (filters.sortBy) {
			params.set('sortBy', filters.sortBy);
			params.set('sortOrder', filters.sortOrder);
		}

		setSearchParams(params);
		setSubSidebar('');

		onClose();
	};

	useEffect(() => {
		if (filters.date === 'select') return;

		const startDate = convertDate(filters.date);

		if (startDate) {
			// 여기서 prev를 사용하지 않고, 새로운 상태를 직접 전달
			setFilters({ startDate });
		}
	}, [filters.date]);

	const renderCategories = (categories: any[]) => {
		return (
			<ul className="pl-4">
				{categories.map((category) => (
					<li key={category.categoryId}>
						<div className="flex items-center">
							<input
								type="checkbox"
								checked={filters.category.some((cat) => cat.categoryId === category.categoryId)}
								onChange={() => handleCategoryChange(category)} // 수정된 부분
							/>
							<span
								className="ml-2 cursor-pointer"
								onClick={() => toggleCategory(category.categoryId, setExpandedCategories)}>
								{category.name}
							</span>
							{category.children.length > 0 && (
								<button onClick={() => toggleCategory(category.categoryId, setExpandedCategories)}>
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

	return (
		<>
			<div
				className={`fixed z-50 inset-y-0 left-0 w-[33%] overflow-y-auto bg-white shadow-lg transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out`}>
				<div className="p-4 relative">
					<button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded">
						{svgObj.close()}
					</button>
					<h2 className="text-xl font-bold mb-4">필터</h2>
					<div className="space-y-4">
						<div className="border-t border-gray-200 pt-4">
							<label className="text-lg font-semibold">쇼핑몰</label>
							<select
								value={filters.mallTypeId}
								onChange={(e) => handleMallTypeChange(e, handleReset)}
								className="w-full p-2 border rounded"
								name="mallTypeId">
								<option defaultChecked value="">
									모든 쇼핑몰
								</option>
								<option value={MALL_TYPE_ID.MUSINSA}>무신사</option>
								<option value={MALL_TYPE_ID.WCONCEPT}>W 컨셉</option>
								<option value={MALL_TYPE_ID.HANDSOME}>한섬</option>
							</select>
						</div>

						<div className="mb-5">
							<label className="text-lg font-semibold">기간</label>
							<select
								className="w-full p-2 border rounded"
								name="date"
								value={filters.date}
								onChange={(e) => handleDateOptionChange(e, setDateOption)}>
								<option defaultChecked value="">
									선택
								</option>
								<option value="week">최근 1주</option>
								<option value="month">최근 1개월</option>
								<option value="months">최근 3개월</option>
								<option value="year">최근 1년</option>
								<option value="select">임의 선택</option>
							</select>
						</div>

						{dateOption && (
							<div className={`mb-5 flex items-center justify-between`}>
								<div className="flex flex-col w-1/2 p-2">
									<label className="mb-2">시작</label>
									<input
										type="date"
										name="startDate"
										onChange={(e) => handleDateChange(e)}
										className="p-2 border rounded"
									/>
								</div>
								<div className="flex flex-col w-1/2 p-2">
									<label className="block mb-2">끝</label>
									<input
										type="date"
										name="endDate"
										onChange={(e) => handleDateChange(e)}
										className="p-2 border rounded"
									/>
								</div>
							</div>
						)}

						{filters.mallTypeId && filters.mallTypeId !== 'all' && (
							<>
								<div className="mt-2 flex flex-wrap">
									{filters.category.map((cat) => (
										<div
											key={cat.categoryId}
											className="flex items-center bg-cyan-600 text-white p-2 m-1 rounded-lg shadow">
											<span>{cat.name}</span>
											<button
												className="ml-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-200 text-white rounded-full w-5 h-5 flex items-center justify-center"
												onClick={() => handleRemoveCategory(cat)}>
												&times;
											</button>
										</div>
									))}
									{filters.brand.map((brand, index) => (
										<div key={index} className="flex items-center bg-cyan-600 text-white p-2 m-1 rounded-lg shadow">
											<span>{brand}</span>
											<button
												className="ml-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-200 text-white rounded-full w-5 h-5 flex items-center justify-center"
												onClick={() => handleBrandChange(brand)}>
												&times;
											</button>
										</div>
									))}
								</div>
								<div
									onClick={() => handleSubSidebar('category', subSidebar, setSubSidebar)}
									className="flex items-center cursor-pointer justify-between border-t border-gray-200 pt-4">
									<h3 className=" text-lg font-semibold">카테고리</h3>
									{svgObj.nextsm()}
								</div>
								<div
									onClick={() => handleSubSidebar('brand', subSidebar, setSubSidebar)}
									className="flex items-center cursor-pointer justify-between border-t border-gray-200 pt-4">
									<h3 className="text-lg font-semibold">브랜드</h3>
									{svgObj.nextsm()}
								</div>
							</>
						)}
					</div>

					<div className="mt-6 flex justify-between">
						<button
							onClick={() => {
								handleReset();
								setSubSidebar('');
							}}
							className="p-2 bg-gray-200 hover:bg-gray-300 rounded w-1/2">
							초기화
						</button>
						<button onClick={handleSubmit} className="p-2 bg-black text-white hover:bg-gray-800 rounded w-1/2 ml-2">
							적용
						</button>
					</div>
				</div>
			</div>
			{isOpen && subSidebar === 'category' && filters.mallTypeId !== 'all' && (
				<div className={`fixed z-50 inset-y-0 left-[33%] w-[33%] bg-white shadow-lg overflow-auto`}>
					<div className="p-4 relative">
						<h2 className="text-xl font-bold mb-4">카테고리 선택</h2>
						{subSidebarCategory && renderCategories(subSidebarCategory)}
					</div>
				</div>
			)}
			{isOpen && subSidebar === 'brand' && filters.mallTypeId !== 'all' && (
				<div className={`fixed z-50 inset-y-0 left-[33%] w-[33%] bg-white shadow-lg overflow-auto`}>
					<div className="p-4 relative">
						<h2 className="text-xl font-bold mb-4">브랜드 선택</h2>
						{subSidebarCategory && (
							<ul className="space-y-2">
								{subSidebarBrand.map((brand, index) => (
									<li key={index} className="flex items-center">
										<input
											type="checkbox"
											checked={filters.brand.includes(brand)}
											onChange={() => handleBrandChange(brand)}
										/>
										<span className="ml-2">{brand}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default FilterSidebar;
