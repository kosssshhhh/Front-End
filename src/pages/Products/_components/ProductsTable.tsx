import ProductTableRow from './ProductTableRow';

const products = [
	{
		id: 1,
		title: '박스캣 레귤러 or 오버 티셔츠 2colors',
		shop: '무신사',
		brand: '라이크더모스트',
		exposureIndex: 1,
		entering10th: 3,
		currentPrice: 30000,
		discountPrice: 20000,
		reviewCount: 30,
		imageUrl: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
	},
	{
		id: 2,
		title: '반팔',
		shop: '무신사',
		brand: '엑스톤즈',
		exposureIndex: 1,
		entering10th: 3,
		currentPrice: 30000,
		discountPrice: 20000,
		reviewCount: 30,
		imageUrl: 'https://cdn-img.thehandsome.com/studio/goods/IL/2E/SS/IL2E5NOT542WP_DM_W01.jpg?rs=684X1032',
	},
];

export default function ProductsTable() {
	return (
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
										10위 진입수
									</th>
									<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
										현재가
									</th>
									<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
										할인가
									</th>
									<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
										리뷰수
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{products.map((product) => (
									<ProductTableRow product={product} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
