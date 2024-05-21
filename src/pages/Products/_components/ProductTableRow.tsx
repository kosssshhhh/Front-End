import { ProductType } from '@/types/index';

export default function ProductTableRow(props: any) {
	const product = props.product;

	return (
		<tr className="hover:bg-gray-100 cursor-pointer">
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				<img
					src={product.imageUrl}
					alt="상품 이미지"
					className="min-w-[100px] min-h-[120px]  max-w-[100px] object-cover"
				/>
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.name}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.shop}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.brand}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.exposureIndex}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.entering10th}회</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.currentPrice} KW</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.discountPrice} KW</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.reviewCount}</td>
		</tr>
	);
}
