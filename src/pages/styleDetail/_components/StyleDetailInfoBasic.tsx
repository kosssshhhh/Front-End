import { StyleDetailBasic, ExposureIndex } from '@/pages/styleDetail/_types/styles.type';

interface StyleDetailInfoBasicProps {
	basicDetail: StyleDetailBasic;
	children: React.ReactNode;
}

export default function StyleDetailInfoBasic({ basicDetail, children }: StyleDetailInfoBasicProps) {
	console.log(basicDetail);

	return (
		<div className="p-12">
			<h1 className="text-2xl font-bold mb-3">{basicDetail.mallType}</h1>

			<hr />
			<h1 className="text-xl font-bold mb-7 mt-5">{basicDetail.brand}</h1>
			<div className="mb-2">
				<span className="text-sm text-gray-500 mr-20">상품 ID</span>
				<span className="text-l font-medium">{basicDetail.productId}</span>
			</div>
			<div className="mb-2">
				<span className="text-sm text-gray-500 mr-20">고정가</span>
				<span className="text-l font-medium">
					{basicDetail.fixedPrice} {basicDetail.monetaryUnit}
				</span>
			</div>
			<div className="mb-2">
				<span className="text-sm text-gray-500 mr-20">할인가</span>
				<span className="text-l font-medium">{basicDetail.discountedPrice} </span>
				<span>{basicDetail.monetaryUnit}</span>
			</div>

			<div className="mb-3">
				<span className="text-sm text-gray-500 mr-20">날짜</span>
				<span className="text-l font-medium">{basicDetail.crawledDate}</span>
			</div>

			{/* <hr className="mt-5 mb-5" /> */}

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
									{basicDetail.exposureIndexList.map((exposureIndex: ExposureIndex) => {
										return (
											<tr key={exposureIndex.productId}>
												<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
													{exposureIndex.category.name}
												</td>

												<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
													{exposureIndex.exposureIndex} <span className="font-meduium text-gray-500">점</span>
												</td>
											</tr>
										);
									})}
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
