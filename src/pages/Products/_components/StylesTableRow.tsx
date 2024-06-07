// ProductTableRow.tsx
import { StyleType } from '@/types/index';
import { Link, useNavigate } from 'react-router-dom';

interface ProductTableRowProps {
	style: StyleType;
}

export default function ProductTableRow({ style }: ProductTableRowProps) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/style/detail/${style.product.id.mallType}/${style.product.id.productId}?page=1`);
	};

	console.log(style);

	return (
		<tr onClick={handleNavigate} className="hover:bg-gray-100 cursor-pointer">
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900 relative">
				<img
					src={style.product.image}
					alt="상품 이미지"
					className="min-w-[100px] min-h-[120px] max-w-[100px] object-cover transition-transform duration-200 ease-in-out transform hover:scale-150 hover:z-10"
				/>
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.product.id.productId}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.product.id.mallType}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.brand}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.rankScore}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.rankScore}회</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.fixedPrice} {style.monetaryUnit}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.discountedPrice} {style.monetaryUnit}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.rankScore}</td>
		</tr>
	);
}
