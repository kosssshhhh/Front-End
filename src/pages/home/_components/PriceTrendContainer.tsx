import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // CSS 파일 추가

import Card from '@/components/Card';
import PriceTrendChart from '@/pages/home/_components/charts/PriceTrendChart';
import { useFetchPriceTrend } from '@/pages/home/_hooks/useFetchPriceTrend.ts';
import ErrorComponent from '@/components/ErrorComponent';

export default function PriceTrendContainer() {
	const { data, isLoading, isError } = useFetchPriceTrend();

	return (
		<div>
			<Card className="col-span-1 xl:col-span-2 2xl:col-span-3">
				<div className="flex items-center justify-between mb-4">
					<div className="flex-shrink-0">
						<h3 className="text-xl font-bold text-gray-900 mb-2">가격대 별 상품 수</h3>
						<span className="text-base font-normal text-gray-500">Styles Price</span>
					</div>
				</div>
				{isLoading && (
					<div className="flex flex-col space-y-4">
						<Skeleton height={570} width="100%" />
					</div>
				)}
				{isError && <ErrorComponent />}
				{!isLoading && !isError && data && <PriceTrendChart data={data} />}
			</Card>
		</div>
	);
}
