import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFilterStore from '@/stores/useFilterStore';
import { useFetchStyles } from '@/pages/styles/_hooks/useFetchStyles';
import { calcPaging } from '@/utils/calcPaging';
import StylesTableRow from '@/pages/styles/_components/StylesTableRow';
import StyleTableRowSkeleton from '@/components/skeleton/StyleTableRowSkeleton';
import StyleTableFooter from '@/pages/styles/_components/StylesTableFooter';
import ExceptionWord from '@/components/ExceptionWord';
import { StyleType } from '@/types';

export default function ProductsTable() {
	const { data, isLoading, isError } = useFetchStyles();
	const { filters, setFilters } = useFilterStore();
	const [searchParams, setSearchParams] = useSearchParams();
	const [isSorting, setIsSorting] = useState(false); // 추가된 상태

	const { start, end, total } = calcPaging(
		data?.data.pageable?.pageNumber,
		data?.data.pageable?.pageSize,
		data?.data.totalElements,
	);

	const handleColumnSort = (column: string) => {
		if (isSorting) return; // 정렬 중이면 아무것도 하지 않음

		setIsSorting(true); // 정렬 시작

		let sortOrder: 'asc' | 'desc' = 'asc';

		if (filters.sortBy === column) {
			sortOrder = filters.sortOrder === 'asc' ? 'desc' : 'asc';
		}

		setFilters({
			sortBy: column,
			sortOrder: sortOrder,
		});

		// Update the URL with the new filter parameters
		const params = new URLSearchParams(searchParams);
		params.set('sortBy', column);
		params.set('sortOrder', sortOrder);
		setSearchParams(params);

		// 0.5초 후에 다시 정렬 가능하도록 설정
		setTimeout(() => {
			setIsSorting(false);
		}, 500);
	};

	const renderSortIcon = (column: string) => {
		if (filters.sortBy !== column) return null;

		return filters.sortOrder === 'asc' ? (
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-1" viewBox="0 0 20 20" fill="gray">
				<path fillRule="evenodd" d="M5 10l5-5 5 5H5z" clipRule="evenodd" />
			</svg>
		) : (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 inline-block ml-1"
				viewBox="0 0 20 20"
				fill="gray"
				style={{ transform: 'translateY(-2px)' }} // SVG를 약간 위로 이동
			>
				<path fillRule="evenodd" d="M5 10l5 5 5-5H5z" clipRule="evenodd" />
			</svg>
		);
	};

	return (
		<>
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden">
							<table className="table-fixed min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-100">
									<tr>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											상품 이미지
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											상품명
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											쇼핑몰
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											카테고리
										</th>
										<th
											scope="col"
											className="p-4 text-center text-xs font-medium text-gray-500 uppercase cursor-pointer"
											onClick={() => handleColumnSort('brand')}>
											<div className="flex items-center justify-center">
												<span>브랜드</span>
												{renderSortIcon('brand')}
											</div>
										</th>
										<th
											scope="col"
											className="p-4 text-center text-xs font-medium text-gray-500 uppercase cursor-pointer"
											onClick={() => handleColumnSort('exposureIndex')}>
											노출지수
											{renderSortIcon('exposureIndex')}
										</th>
										<th
											scope="col"
											className="p-4 text-center text-xs font-medium text-gray-500 uppercase cursor-pointer"
											onClick={() => handleColumnSort('fixedPrice')}>
											고정가
											{renderSortIcon('fixedPrice')}
										</th>
										<th
											scope="col"
											className="p-4 text-center text-xs font-medium text-gray-500 uppercase cursor-pointer"
											onClick={() => handleColumnSort('discountedPrice')}>
											할인가
											{renderSortIcon('discountedPrice')}
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{isLoading
										? Array.from({ length: 20 }).map((_, index) => <StyleTableRowSkeleton key={index} />)
										: data?.data.content?.map((style: StyleType) => (
												<StylesTableRow key={style.styleId} style={style} />
											))}
									{data?.data.content?.length === 0 && (
										<tr>
											<td colSpan={8}>
												<ExceptionWord text="상품이 존재하지 않습니다." />
											</td>
										</tr>
									)}
									{isError && (
										<tr>
											<td colSpan={8} className="p-4 text-center text-xs font-medium text-red-500">
												<ExceptionWord text="에러가 발생했습니다." />
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<StyleTableFooter start={start} end={end} total={total} />
		</>
	);
}
