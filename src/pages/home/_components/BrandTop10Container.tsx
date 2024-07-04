import Card from '@/components/Card';
import '@/styles/custom.css';
import Top10BrandChart from '@/pages/home/_components/charts/Top10BrandChart.tsx';
import { useFetchTop10Brand } from '@/pages/home/_hooks/useFetchTop10Brand.ts';
import Top10BrandChartSkeleton from '@/components/skeleton/Top10BrandChartSkeleton.tsx';
import ErrorComponent from '@/components/ErrorComponent.tsx';

export default function BrandTop10Container() {
	const { data, isLoading, isError } = useFetchTop10Brand();

	return (
		<div className="col-span-2 lg:col-span-1">
			<Card>
				<div className="mb-4 flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold text-gray-900 mb-2">Top 10 브랜드</h3>
						<span className="text-base font-normal text-gray-500">Top 10 brand Chart</span>
					</div>
				</div>
				{isLoading && <Top10BrandChartSkeleton />}
				{isError && <ErrorComponent />}
				{!isLoading && !isError && data && <Top10BrandChart data={data} />}
			</Card>
		</div>
	);
}
