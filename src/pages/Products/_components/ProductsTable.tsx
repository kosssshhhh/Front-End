import { ProductType } from '@/types/index';
import { useFetchProducts } from '../_utils/useFetchProducts';
import ProductTableRow from './ProductTableRow';
// import { useEffect } from 'react';

export default function ProductsTable() {
	const { products, isLoading, isError } = useFetchProducts();

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>Error...</div>;

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
								{products.map((product: ProductType) => (
									<ProductTableRow key={product.product.id.productId} product={product} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
