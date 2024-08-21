import { http, HttpResponse } from 'msw';

const priceTrendHandler = [
	http.get('/home/price', () => {
		return HttpResponse.json({
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
		});
	}),
];

export default priceTrendHandler;
