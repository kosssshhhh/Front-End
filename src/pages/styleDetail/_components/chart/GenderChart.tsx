import Chart from 'react-apexcharts';

interface GenderProps {
	malePercentage?: number;
	femalePercentage?: number;
}

export default function GenderChart({ malePercentage, femalePercentage }: GenderProps) {
	if (!malePercentage || !femalePercentage) {
		return null;
	}

	const options = {
		chart: {
			type: 'donut' as const,
			offsetX: 0,
			offsetY: 0,
		},
		title: {
			text: '성별 조회 비율',
			align: 'center' as const,
			style: {
				fontSize: '12px',
				color: '#6B7280',
			},
		},

		labels: ['남성', '여성'],

		plotOptions: {
			pie: {
				donut: {
					size: '50%',
				},
			},
		},
		colors: ['#1E90FF', '#FF1493'],

		animations: {
			enabled: true,
			easing: 'easeinout',
			speed: 800,
			animateGradually: {
				enabled: true,
				delay: 150,
			},
			dynamicAnimation: {
				enabled: true,
				speed: 350,
			},
		},
	};

	const series = [malePercentage, femalePercentage];

	return <Chart options={options} series={series} type="donut" height={200} />;
}
