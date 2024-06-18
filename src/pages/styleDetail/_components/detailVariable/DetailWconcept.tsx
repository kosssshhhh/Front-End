import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

import { svgObj } from '@/assets/svg';

export default function DetailWconcept({ variable }: { variable: StyleDetailVariable }) {
	// Hansome 페이지에 대한 렌더링 로직
	return (
		<div className="mt-12">
			<div className="flex mb-2 items-center">
				<span className="text-lg text-black mr-5">{variable.soldOut ? '품절' : '판매중'}</span>
			</div>
			<div className="flex mb-2 items-center">
				{svgObj.like()} &nbsp;
				<span className="text-sm text-gray-500 mr-5">좋아요</span>
				<span className="text-l font-medium">{variable.likes}</span>
			</div>
		</div>
	);
}
