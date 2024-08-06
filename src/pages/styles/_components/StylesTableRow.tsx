// ProductTableRow.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DuplicateCategoryTooltip from './DuplicateCategory';
import { StyleType } from '@/types/index';

interface ProductTableRowProps {
	style: StyleType;
}

interface TooltipType {
	visible: boolean;
	x: number;
	y: number;
}

export default function ProductTableRow({ style }: ProductTableRowProps) {
	const navigate = useNavigate();
	const [tooltip, setTooltip] = useState<TooltipType>({ visible: false, x: 0, y: 0 });

	const isDuplicatedCategory = style.dupeExposureIndexList.length > 0;

	const handleNavigate = () => {
		navigate(`/style/detail/${style.mallTypeId}/${style.styleId}?page=1`, { preventScrollReset: true });
	};

	const handleMouseEnter = (e: React.MouseEvent) => {
		setTooltip({ visible: true, x: e.clientX, y: e.clientY + window.scrollY });
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		setTooltip({ visible: true, x: e.clientX, y: e.clientY + window.scrollY });
	};

	const handleMouseLeave = (e: React.MouseEvent) => {
		setTooltip({ visible: false, x: 0, y: 0 });
	};

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (tooltip.visible) {
	// 			setTooltip((prev) => ({ ...prev, y: prev.y + window.scrollY }));
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [tooltip.visible]);

	return (
		<tr
			onClick={handleNavigate}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="hover:bg-gray-100 cursor-pointer">
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900 relative">
				{style.image ? (
					<img
						src={style.image?.url}
						alt="상품 이미지"
						className="min-w-[100px] min-h-[120px] max-w-[100px] object-cover transition-transform duration-200 ease-in-out transform hover:scale-150 hover:z-10"
					/>
				) : (
					<div className="min-w-[100px] min-h-[120px] max-w-[100px]  bg-gray-100 flex items-center justify-center">
						<span className="text-xs text-gray-500">이미지 없음</span>
					</div>
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
			<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">
				<div>{style.category.name}</div>
				{isDuplicatedCategory && (
					<div className="text-gray-400 py-4 px-2 font-normal">한 상품이 여러 카테고리에 속합니다.</div>
				)}
			</td>
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
			{isDuplicatedCategory && tooltip.visible && (
				<div className="absolute rounded" style={{ top: tooltip.y, left: tooltip.x }}>
					{isDuplicatedCategory && tooltip.visible && (
						<DuplicateCategoryTooltip dupeExposureIndexList={style.dupeExposureIndexList} />
					)}
				</div>
			)}
		</tr>
	);
}
