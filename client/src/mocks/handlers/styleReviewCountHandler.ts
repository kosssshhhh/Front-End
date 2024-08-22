import { http, HttpResponse } from 'msw';

const styleReviewCountHandler = [
	http.get('/style/detail/review/:mallType/trend', () => {
		return HttpResponse.json([
			{ date: '2022-03-01', reviewCount: 30 },
			{ date: '2022-03-02', reviewCount: 40 },
			{ date: '2022-03-03', reviewCount: 35 },
			{ date: '2022-03-04', reviewCount: 50 },
			{ date: '2022-03-05', reviewCount: 49 },
			{ date: '2022-03-06', reviewCount: 60 },
			{ date: '2022-03-07', reviewCount: 70 },
			{ date: '2022-03-08', reviewCount: 91 },
			{ date: '2022-03-09', reviewCount: 100 },
			{ date: '2022-03-10', reviewCount: 100 },
			{ date: '2022-03-11', reviewCount: 130 },
			{ date: '2022-03-12', reviewCount: 140 },
			{ date: '2022-03-13', reviewCount: 20 },
			{ date: '2022-03-14', reviewCount: 20 },
			{ date: '2022-03-15', reviewCount: 30 },
		]);
	}),
];

export default styleReviewCountHandler;
