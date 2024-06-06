// ProductTableRow.tsx
import { StyleType } from '@/types/index';
import { Link, useNavigate } from 'react-router-dom';

interface ProductTableRowProps {
	product: StyleType;
}

export default function ProductTableRow({ product }: ProductTableRowProps) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/style/detail/${product.product.id.mallType}/${product.product.id.productId}`);
	};

	return (
		<tr onClick={handleNavigate} className="hover:bg-gray-100 cursor-pointer">
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				<img
					src={product.product.image}
					alt="상품 이미지"
					className="min-w-[100px] min-h-[120px]  max-w-[100px] object-cover"
				/>
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.product.id.productId}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.product.id.mallType}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.brand}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.rankScore}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.rankScore}회</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{product.fixedPrice} {product.monetaryUnit}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{product.discountedPrice} {product.monetaryUnit}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{product.rankScore}</td>
		</tr>
	);
}
