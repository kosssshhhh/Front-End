// ProductTableRow.tsx
import { StyleType } from '@/types/index';
import { useNavigate } from 'react-router-dom';

interface ProductTableRowProps {
	style: StyleType;
}

export default function ProductTableRow({ style }: ProductTableRowProps) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/style/detail/${style.mallTypeId}/${style.styleId}?page=1`);
	};

	return (
		<tr onClick={handleNavigate} className="hover:bg-gray-100 cursor-pointer">
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900 relative">
				{style.image === null ? (
					<div className="min-w-[100px] min-h-[120px] max-w-[100px]  bg-gray-100 flex items-center justify-center">
						<span className="text-xs text-gray-500">이미지 없음</span>
					</div>
				) : (
					<img
						src={style.image?.url}
						alt="상품 이미지"
						className="min-w-[100px] min-h-[120px] max-w-[100px] object-cover transition-transform duration-200 ease-in-out transform hover:scale-150 hover:z-10"
					/>
				)}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.styleName?.length > 25 ? `${style.styleName?.slice(0, 25)}...` : style.styleName}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.category?.mallType.mallTypeName}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.brand}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900"> {style.exposureIndex.toFixed(2)}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">{style.category.name}</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.fixedPrice.toLocaleString()}
				<br />
				{style.monetaryUnit}
			</td>
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				{style.discountedPrice.toLocaleString()}
				<br />
				{style.monetaryUnit}
			</td>
		</tr>
	);
}
