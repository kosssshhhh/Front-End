// SkeletonTable.js
export default function Top10BrandChartSkeleton() {
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
								{Array.from({ length: 10 }).map((_, index) => (
									<tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
										<td className="p-4 whitespace-nowrap">
											<div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
										</td>
										<td className="p-4 whitespace-nowrap">
											<div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
										</td>
										<td className="p-4 whitespace-nowrap">
											<div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
										</td>
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
