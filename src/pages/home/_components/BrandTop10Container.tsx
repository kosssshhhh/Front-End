import Card from '@/components/Card';
import '@/styles/custom.css';
import Top10BrandChart from '@/pages/home/_components/charts/Top10BrandChart.tsx';
import { useFetchTop10Brand } from '@/pages/home/_hooks/useFetchTop10Brand.ts';
import Top10BrandChartSkeleton from '@/components/skeleton/Top10BrandChartSkeleton.tsx';
import ErrorComponent from '@/components/ErrorComponent.tsx';

const data = {
	top10BrandList: [
		{
			brand: '웬즈데이오아시스',
			exposureIndexSum: 117.854416,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '울랄라파자마',
			exposureIndexSum: 111.852425,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '비뮤즈맨션',
			exposureIndexSum: 104.187386,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '꼼파뇨',
			exposureIndexSum: 103.34705,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '파사드패턴',
			exposureIndexSum: 100.72583,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '프론트로우',
			exposureIndexSum: 84.36364,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '시야쥬',
			exposureIndexSum: 83.44733,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '닐바이피',
			exposureIndexSum: 79.9798,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '틸아이다이',
			exposureIndexSum: 79.20656,
			mallTypeId: 'l8WAu4fP',
		},
		{
			brand: '망고매니플리즈',
			exposureIndexSum: 73.040405,
			mallTypeId: 'l8WAu4fP',
		},
	],
};

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
