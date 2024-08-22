export default function StyleTableRowSkeleton() {
	return (
		<tr className="animate-pulse">
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-[120px] w-[100px] mx-auto rounded"></div>
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[150px] mx-auto rounded"></div> {/* 상품명 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[100px] mx-auto rounded"></div> {/* 쇼핑몰 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[120px] mx-auto rounded"></div> {/* 카테고리 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[100px] mx-auto rounded"></div> {/* 브랜드 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[100px] mx-auto rounded"></div> {/* 노출지수 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[120px] mx-auto rounded"></div> {/* 고정가 */}
			</td>
			<td className="p-4 whitespace-nowrap text-center">
				<div className="bg-gray-300 h-6 w-[120px] mx-auto rounded"></div> {/* 할인가 */}
			</td>
		</tr>
	);
}
