import React from 'react';
import { StyleDetailBasic, ExposureIndex } from '@/pages/styleDetail/_types/styles.type';
import { MALL_TYPE_ID } from '@/constants/mallTypeId';
import { getKeyByValue } from '@/utils/getKeyByValue';

interface StyleDetailInfoBasicProps {
	basicDetail: StyleDetailBasic;
	children: React.ReactNode;
}

export default function StyleDetailInfoBasic({ basicDetail, children }: StyleDetailInfoBasicProps) {
	console.log(basicDetail);

	const mallType = getKeyByValue(MALL_TYPE_ID, basicDetail.mallTypeId);

	return (
		<div className="p-12">
			<h1 className="text-2xl font-bold mb-3">{mallType}</h1>
			<hr />
			<h1 className="text-xl font-bold mb-7 mt-5">{basicDetail.brand}</h1>

			<table className="min-w-full divide-y divide-gray-200 mb-5">
				<tbody className="bg-white">
					<tr>
						<td className="p-2 text-sm text-gray-500">스타일 ID</td>
						<td className="p-2 text-l font-medium">{basicDetail.styleId}</td>
					</tr>
					<tr>
						<td className="p-2 text-sm text-gray-500">스타일명</td>
						<td className="p-2 text-l font-medium">{basicDetail.styleName}</td>
					</tr>
					<tr>
						<td className="p-2 text-sm text-gray-500">고정가</td>
						<td className="p-2 text-l font-medium">
							{basicDetail.fixedPrice.toLocaleString()} {basicDetail.monetaryUnit}
						</td>
					</tr>
					<tr>
						<td className="p-2 text-sm text-gray-500">할인가</td>
						<td className="p-2 text-l font-medium">
							{basicDetail.discountedPrice.toLocaleString()} {basicDetail.monetaryUnit}
						</td>
					</tr>
					<tr>
						<td className="p-2 text-sm text-gray-500">날짜</td>
						<td className="p-2 text-l font-medium">{basicDetail.crawledDate}</td>
					</tr>
				</tbody>
			</table>

			<div className="flex flex-col mt-8">
				<h1 className="text-m font-medium mb-1 text-gray-500">중복 카테고리</h1>
				<div className="overflow-x-auto rounded-lg">
					<div className="align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											카테고리
										</th>
										<th
											scope="col"
											className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											노출지수
										</th>
									</tr>
								</thead>
								<tbody className="bg-white">
									{basicDetail.exposureIndexList.map((exposureIndex: ExposureIndex, index) => (
										<tr key={exposureIndex.styleId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												{exposureIndex.category.name}
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												{exposureIndex.exposureIndex.toFixed(2)} <span className="font-meduium text-gray-500">점</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<hr className="mt-5 mb-5 border-gray-300" />
			{children}
		</div>
	);
}
