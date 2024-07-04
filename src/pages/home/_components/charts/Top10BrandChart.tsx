import { Top10BrandDataType } from '@/pages/home/_types/priceTrendData.type.ts';

interface Top10BrandChartProps {
	data: {
		top10BrandList: Top10BrandDataType[];
	};
}

export default function Top10BrandChart({ data }: Top10BrandChartProps) {
	console.log(data);
	return (
		<div className="flex flex-col mt-8">
			<div className="overflow-x-auto rounded-lg">
				<div className="align-middle inline-block min-w-full">
					<div className="shadow overflow-hidden sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										브랜드
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										노출 지수 합계
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										쇼핑몰
									</th>
								</tr>
							</thead>
							<tbody className="bg-white">
								{data.data.top10BrandList?.map((brand, index) => (
									<tr
										key={index}
										className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} animate-fadeInUp custom-delay-${
											10 - index
										}`}>
										<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">{brand.brand}</td>
										<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
											{brand.exposureIndexSum.toFixed(2)}
										</td>
										<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">{brand.mallTypeId}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
