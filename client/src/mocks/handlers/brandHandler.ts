import { http, HttpResponse } from 'msw';

const brandHandler = [
	http.get('/style/filter/brand/:mallTypeId', () => {
		return HttpResponse.json({
			brand: [
				'insilence',
				'greedilous',
				'musinsastandard',
				'code graphy',
				'toffee',
				'spao',
				'brenson',
				'hugvone',
				'yale',
				'nastyfancyclub',
				'musinsastandardwoman',
				'kiimuir',
				'giordano',
				'comfortlab',
				'partimento',
				'avan',
				'blackmonsterfit',
				'xexymix',
				'ezkaton',
				'physicaleducation',
				'ladyvolume',
				'nicknicole',
				'nepa',
				'londontradition',
				'adidas',
				'someplace',
				'generalideastandard',
				'placestudio',
				'lafudgestore',
				'dimitriblack',
			],
		});
	}),
];

export default brandHandler;
