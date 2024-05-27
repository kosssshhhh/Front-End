// FilterSidebar.tsx
import React from 'react';
import { SidebarFilterProps } from '@/pages/Products/_types/sidebarFilter.type';
import { svgObj } from '@/assets/svg';
import { useState } from 'react';

function FilterSidebar({ isOpen, onClose }: SidebarFilterProps) {
	const [filters, setFilters] = useState({
		mallType: '',
		startDate: '',
		endDate: '',
	});

	const [dateOption, setDateOption] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFilters((prev) => ({
			...prev,
			[name]: value,
		}));

		// 날짜 옵션 변경 시 상태 업데이트
		if (value === 'select') {
			setDateOption(true);
		} else {
			setDateOption(false);
		}
	};

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

	return (
		<div
			className={`fixed z-50 inset-y-0 left-0 w-[33%] bg-white shadow-lg transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out`}>
			<div className="p-4 relative">
				<h2 className="text-xl font-bold mb-4">필터</h2>
				<button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded">
					{svgObj.close()}
				</button>
				<div className="mb-5">
					<label className="block mb-2">쇼핑몰</label>
					<select className="w-full p-2 border rounded" name="mallType">
						<option value="all">모든 쇼핑몰</option>
						<option value="MUSINSA">무신사</option>
						<option value="WCONCEPT">W 컨셉</option>
						<option value="HANDSOME">한섬</option>
					</select>
				</div>

				<div className="mb-5">
					<label className="block mb-2">기간 선택</label>
					<select className="w-full p-2 border rounded" name="date" onChange={handleChange}>
						<option defaultChecked value="week">
							최근 1주
						</option>
						<option value="month">최근 1개월</option>
						<option value="months">최근 3개월</option>
						<option value="year">최근 1년</option>
						<option value="select">임의 선택</option>
					</select>
				</div>

				<div className={`mb-5 ${dateOption ? 'block' : 'hidden'} flex items-center space-x-4`}>
					<div className="flex flex-col">
						<label className="block mb-2">시작</label>
						<input type="date" name="minDate" onChange={handleChange} className="p-2 border rounded" />
					</div>

					<div className="flex flex-col">
						<label className="block mb-2">끝</label>
						<input type="date" name="maxDate" onChange={handleChange} className="p-2 border rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FilterSidebar;
