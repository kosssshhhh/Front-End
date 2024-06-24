import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

import { svgObj } from '@/assets/svg';

export default function DetailWconcept({ variable }: { variable: StyleDetailVariable }) {
	// Hansome 페이지에 대한 렌더링 로직
	return (
		<div className="mt-12">
			<div className="flex mb-2 items-center">
				<span className="text-xl text text-gray-600">{variable.soldOut ? '품절' : '판매중'}</span>
			</div>

			<table className="divide-y divide-gray-200 mb-5">
				<tbody className="bg-white">
					<tr className="flex items-center">
						{svgObj.like()}
						<td className="p-2 text-sm text-gray-500">좋아요</td>
						<td className="p-2 text-l font-medium">{variable.likes}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
