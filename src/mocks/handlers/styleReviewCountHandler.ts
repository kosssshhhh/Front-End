import { http, HttpResponse } from 'msw';

const styleReviewCountHandler = [
	http.get('/style/detail/review/:mallType/trend', () => {
		return HttpResponse.json([
			{ date: '2022-03-01', count: 30 },
			{ date: '2022-03-02', count: 40 },
			{ date: '2022-03-03', count: 35 },
			{ date: '2022-03-04', count: 50 },
			{ date: '2022-03-05', count: 49 },
			{ date: '2022-03-06', count: 60 },
			{ date: '2022-03-07', count: 70 },
			{ date: '2022-03-08', count: 91 },
			{ date: '2022-03-09', count: 100 },
			{ date: '2022-03-10', count: 100 },
			{ date: '2022-03-11', count: 130 },
			{ date: '2022-03-12', count: 140 },
			{ date: '2022-03-13', count: 20 },
			{ date: '2022-03-14', count: 20 },
			{ date: '2022-03-15', count: 30 },
		]);
	}),
];

export default styleReviewCountHandler;
