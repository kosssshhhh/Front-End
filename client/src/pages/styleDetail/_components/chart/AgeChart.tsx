import Chart from 'react-apexcharts';

interface AgeProps {
	ageUnder18?: number;
	age19To23?: number;
	age24To28?: number;
	age29To33?: number;
	age34To39?: number;
	ageOver40?: number;
}

export default function AgeChart({ ageUnder18, age19To23, age24To28, age29To33, age34To39, ageOver40 }: AgeProps) {
	if (!ageUnder18 || !age19To23 || !age24To28 || !age29To33 || !age34To39 || !ageOver40) {
		return null;
	}

	const seriesData = [ageUnder18, age19To23, age24To28, age29To33, age34To39, ageOver40];
	const maxValue = Math.max(...seriesData);
	const colors = seriesData.map((value) => (value === maxValue ? '#0694a2' : '#C0C0C0')); // 최대값은 파란색, 나머지는 회색
	console.log(colors);

	const options = {
		// colors: '#0694a2',
		chart: {
			type: 'bar' as const,
		},
		title: {
			text: '연령별 조회 비율',
			align: 'center' as const,
			style: {
				fontSize: '12px',
				color: '#6B7280',
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30%',
				endingShape: 'rounded',
				dataLabels: {
					position: 'top', // 값을 막대 위에 표시
				},
				colors: {
					ranges: seriesData.map((value) => ({
						from: value,
						to: value,
						color: value === maxValue ? '#0694a2' : '#C0C0C0',
					})),
				},
			},
		},
		dataLabels: {
			enabled: true,
			formatter: (val: number) => `${val}%`,
			offsetY: -20, // 값의 y축 위치 조정
			style: {
				fontSize: '12px',
				colors: ['#6B7280'],
			},
		},

		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: ['~18세', '19~23세', '24~28세', '29~33세', '34~39세', '40세~'],
			labels: {
				style: {
					colors: '#6B7280',
					fontSize: '14px',
					fontWeight: 500,
				},
			},
		},
		yaxis: {
			max: 100,
			tickAmount: 5, // y축 눈금 간격을 20% 단위로 설정
			labels: {
				formatter: (val: number) => `${val}%`,
				style: {
					colors: '#6B7280',
					fontSize: '14px',
					fontWeight: 500,
				},
			},
		},

		tooltip: {
			y: {
				formatter: (val: number) => `${val}%`,
				title: {
					formatter: () => '',
					style: {
						colors: '#6B7280', // text-gray-500
					},
				},
			},
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},

		// animations: {
		// 	enabled: true,
		// 	easing: 'easeinout',
		// 	speed: 800,
		// 	animateGradually: {
		// 		enabled: true,
		// 		delay: 150,
		// 	},
		// 	dynamicAnimation: {
		// 		enabled: true,
		// 		speed: 350,
		// 	},
		// },
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
	};

	const series = [
		{
			name: '연령대별 인원수',
			data: seriesData,
		},
	];

	return <Chart options={options} series={series} type="bar" height={300} />;
}
