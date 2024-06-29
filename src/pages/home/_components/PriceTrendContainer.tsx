import Card from '@/components/Card';
import PriceTrendChart from '@/pages/home/_components/charts/PriceTrendChart';
import { useFetchPriceTrend } from '@/pages/home/_hooks/useFetchPriceTrend.ts';

export default function PriceTrendContainer() {
	const { data, isLoading, isError } = useFetchPriceTrend();

	return (
		<div>
			<Card className="col-span-1 xl:col-span-2 2xl:col-span-3">
				<div className="flex items-center justify-between mb-4">
					<div className="flex-shrink-0">
						{/* <h3 className="text-xl font-bold text-gray-900 mb-2">Top 10 브랜드</h3> */}
						<h3 className="text-xl font-bold text-gray-900 mb-2">가격대 별 상품 수</h3>
						<span className="text-base font-normal text-gray-500">Styles Price </span>
					</div>
					{/* <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
						12.5%
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
								clip-rule="evenodd"></path>
						</svg>
					</div> */}
				</div>
				{isLoading && <div>Loading...</div>}
				{isError && <div>Error...</div>}
				{!isLoading && !isError && data && <PriceTrendChart data={data} />}
			</Card>
		</div>
	);
}
