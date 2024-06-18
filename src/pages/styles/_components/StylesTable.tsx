import StylesTableRow from '@/pages/styles/_components/StylesTableRow';
import StyleTableRowSkeleton from '@/components/skeleton/StyleTableRowSkeleton';
import StyleTableFooter from '@/pages/styles/_components/StylesTableFooter';

import { StyleType } from '@/types/index';

import { useFetchStyles } from '@/pages/styles/_hooks/useFetchStyles';
import { calcPaging } from '@/utils/calcPaging';
// import { useEffect } from 'react';

export default function ProductsTable() {
	const { data, isLoading, isError } = useFetchStyles();
	console.log(data);

	const { start, end, total } = calcPaging(
		data?.data.pageable?.pageNumber,
		data?.data.pageable?.pageSize,
		data?.data.totalElements,
	);

	return (
		<>
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="align-middle inline-block min-w-full">
						<div className="shodow overflow-hidden">
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
											브랜드
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											노출지수
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											카테고리
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											현재가
										</th>
										<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
											할인가
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{isLoading
										? Array.from({ length: 10 }).map((_, index) => <StyleTableRowSkeleton key={index} />)
										: data.data.content?.map((style: StyleType) => (
												<StylesTableRow key={style.styleId} style={style} />
										  ))}
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
