import { http, HttpResponse } from 'msw';

const exampleHandler = [
	http.get('/example', () => {
		return HttpResponse.json([
			{ name: 'kosh', department: '정보융합학부', roles: ['#Front-End', '#AI'] },
			{ name: 'kosh', department: '정보융합학부', roles: ['#Front-End', '#AI'] },
		]);
	}),
];

export default exampleHandler;
