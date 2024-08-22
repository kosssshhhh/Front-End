import { http, HttpResponse } from 'msw';

const brandTop10Handler = [
	http.get('/home/brand', () => {
		return HttpResponse.json({
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
		});
	}),
];

export default brandTop10Handler;
