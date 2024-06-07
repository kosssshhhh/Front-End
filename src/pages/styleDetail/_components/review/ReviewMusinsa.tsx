export default function ReviewMusinsa() {
	return (
		<table className="p-12 table-fixed min-w-full divide-y divide-gray-200">
			<thead className="bg-gray-100">
				<tr>
					<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
						리뷰 아이디
					</th>
					<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
						작성일
					</th>
					<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
						유저 아이디
					</th>
					<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
						리뷰
					</th>
					<th scope="col" className="p-4 text-center text-xs font-medium text-gray-500 uppercase">
						평점
					</th>
				</tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
				<tr className="hover:bg-gray-100 cursor-pointer">
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">1</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">2024-05-11</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">smc***********</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900 max-w-sm overflow-wrap break-words">
						재킷 색상은 착샷이 살짝 밝게 나온편이고, 실제는 모델색상에 가깝습니다. 무엇보다 입지 않은것 같은 가벼움과
						여러 색상이 섞여있는 오묘한 컬러감이 너무 예쁩니다. 길이는 요즘 워낙 짧게 나와서 그런지 제기준에는 크게 짧게
						느껴지진 않네요^^ 원래 재킷류 잘 입지 않는데 올해는 마인 재킷들이 맴쏙이라 사지 않을수가 없네요~
					</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">5</td>
				</tr>
				<tr className="hover:bg-gray-100 cursor-pointer">
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">1</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">2024-05-11</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">smc***********</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900 max-w-sm overflow-wrap break-words">
						재킷 색상은 착샷이 살짝 밝게 나온편이고, 실제는 모델색상에 가깝습니다. 무엇보다 입지 않은것 같은 가벼움과
						여러 색상이 섞여있는 오묘한 컬러감이 너무 예쁩니다. 길이는 요즘 워낙 짧게 나와서 그런지 제기준에는 크게 짧게
						느껴지진 않네요^^ 원래 재킷류 잘 입지 않는데 올해는 마인 재킷들이 맴쏙이라 사지 않을수가 없네요~
					</td>
					<td className="p-4 whitespace-nowrap text-center font-medium text-gray-900">5</td>
				</tr>
			</tbody>
		</table>
	);
}
