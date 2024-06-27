import Card from '@/components/Card';
import '@/styles/custom.css';

const data = {
	top10BrandList: [
		{
			brand: '웬즈데이오아시스',
			exposureIndexSum: 117.854416,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '울랄라파자마',
			exposureIndexSum: 111.852425,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '비뮤즈맨션',
			exposureIndexSum: 104.187386,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '꼼파뇨',
			exposureIndexSum: 103.34705,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '파사드패턴',
			exposureIndexSum: 100.72583,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '프론트로우',
			exposureIndexSum: 84.36364,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '시야쥬',
			exposureIndexSum: 83.44733,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '닐바이피',
			exposureIndexSum: 79.9798,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '틸아이다이',
			exposureIndexSum: 79.20656,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '망고매니플리즈',
			exposureIndexSum: 73.040405,
			mallTypeId: 'l8WAu4fP',
		},
	],
};

export default function BrandTop10Container() {
	return (
		<div className="col-span-2 lg:col-span-1">
			<Card>
				<div className="mb-4 flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold text-gray-900 mb-2">Top 10 브랜드</h3>
						<span className="text-base font-normal text-gray-500">Top 10 brand Chart</span>
					</div>
				</div>
				<div className="flex flex-col mt-8">
					<div className="overflow-x-auto rounded-lg">
						<div className="align-middle inline-block min-w-full">
							<div className="shadow overflow-hidden sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												브랜드
											</th>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												노출 지수 합계
											</th>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												쇼핑몰
											</th>
										</tr>
									</thead>
									<tbody className="bg-white">
										{data.top10BrandList.map((brand, index) => (
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
			</Card>
		</div>
	);
}
