import Chart from 'react-apexcharts';

type PriceData = {
	[priceRange: string]: number;
};

const data: PriceData = {
	'8500-223500': 3157,
	'223500-438500': 153,
	'438500-653500': 23,
	'653500-868500': 4,
	'868500-1083500': 4,
	'1083500-1298500': 0,
	'1298500-1513500': 0,
	'1513500-1728500': 0,
	'1728500-1943500': 0,
	'1943500-2158500': 1,
};

// Helper function to format the price range strings
const formatPriceRange = (range: string) => {
	const [min, max] = range.split('-').map((num) => parseInt(num, 10).toLocaleString());
	return `${min}~${max}`;
};

const formattedCategories = Object.keys(data).map(formatPriceRange);

export default function PriceTrendChart() {
	const series = [
		{
			name: 'Style Count',
			data: Object.values(data),
			color: '#0694a2',
		},
	];

	const options = {
		chart: {
			type: 'bar' as const,
			fontFamily: 'Inter, sans-serif',
			foreColor: '#6B7280',
			toolbar: {
				show: false,
			},
		},
		grid: {
			// show: false,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				dataLabels: {
					position: 'top', // 값을 막대 위에 표시
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: (val: number) => `${val.toLocaleString()}개`,
			offsetY: -20, // 값의 y축 위치 조정
			style: {
				fontSize: '12px',
				colors: ['#6B7280'],
			},
		},

		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		xaxis: {
			categories: formattedCategories,
			labels: {
				rotate: -45,
				style: {
					colors: ['#6B7280'],
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter: (value: string) => value + ' 원',
			},
			axisBorder: {
				color: '#F3F4F6',
			},
			axisTicks: {
				color: '#F3F4F6',
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: '#6B7280',
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter: (val: number) => `${val.toLocaleString()}`,
			},
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false,
						},
					},
				},
			},
		],
		// title: {
		// 	text: '가격대별 상품 수',
		// 	align: 'center' as const,
		// },
	};

	return (
		<div className="flex justify-center w-full">
			<div className="w-full">
				<Chart options={options} series={series} type="bar" height={570} width="100%" />
			</div>
		</div>
	);
}
