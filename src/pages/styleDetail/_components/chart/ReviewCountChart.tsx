import Chart from 'react-apexcharts';

import { RawReviewCountData } from '@/pages/styleDetail/_types/stylesReview.type';

import { transformReviewCountData } from '@/pages/styleDetail/_utils/transformReviewCountData';

// TODO: 실제 API response 로 변경

interface ReviewCountChartProps {
	data: RawReviewCountData[];
}

export default function ReviewCountChart({ data }: ReviewCountChartProps) {
	const transformData = transformReviewCountData(data);
	const options = {
		series: [
			{
				name: '리뷰 수',
				data: transformData,
			},
		],
		chart: {
			type: 'area' as const,
			stacked: false,
			height: 350,
			zoom: {
				type: 'x' as const,
				enabled: true,
				autoScaleYaxis: true,
			},
			toolbar: {
				autoSelected: 'zoom' as const,
			},
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			size: 0,
		},
		title: {
			text: '리뷰 수 변화',
			align: 'left' as const,
		},
		yaxis: {
			labels: {
				formatter: function (val: number) {
					return val.toFixed(0);
				},
			},
			title: {
				text: '리뷰 수',
			},
		},
		xaxis: {
			type: 'datetime' as const,
		},
		tooltip: {
			shared: false,
			y: {
				formatter: function (val: number) {
					return val.toFixed(0);
				},
			},
		},
		stroke: {
			curve: 'smooth' as const,
		},
	};

	return <Chart options={options} series={options.series} height={350} />;
}
