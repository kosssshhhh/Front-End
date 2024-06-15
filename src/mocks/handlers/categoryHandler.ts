import { http, HttpResponse } from 'msw';

const categoryHandler = [
	http.get('/style/filter/category/:mallType', () => {
		return HttpResponse.json([
			{
				categoryId: 1075,
				name: '상의',
				children: [
					{
						categoryId: 1076,
						name: '니트/스웨터',
						children: [],
					},
					{
						categoryId: 1077,
						name: '후드 티셔츠',
						children: [],
					},
					{
						categoryId: 1078,
						name: '맨투맨/스웨트셔츠',
						children: [],
					},
					{
						categoryId: 1079,
						name: '긴소매 티셔츠',
						children: [],
					},
					{
						categoryId: 1080,
						name: '셔츠/블라우스',
						children: [],
					},
					{
						categoryId: 1081,
						name: '피케/카라 티셔츠',
						children: [],
					},
					{
						categoryId: 1082,
						name: '반소매 티셔츠',
						children: [],
					},
					{
						categoryId: 1083,
						name: '민소매 티셔츠',
						children: [],
					},
					{
						categoryId: 1084,
						name: '스포츠 상의',
						children: [],
					},
					{
						categoryId: 1085,
						name: '기타 상의',
						children: [],
					},
				],
			},
			{
				categoryId: 1086,
				name: '아우터',
				children: [
					{
						categoryId: 1087,
						name: '후드 집업',
						children: [],
					},
					{
						categoryId: 1088,
						name: '블루종/MA-1',
						children: [],
					},
					{
						categoryId: 1089,
						name: '레더/라이더스 재킷',
						children: [],
					},
					{
						categoryId: 1090,
						name: '무스탕/퍼',
						children: [],
					},
					{
						categoryId: 1091,
						name: '트러커 재킷',
						children: [],
					},
					{
						categoryId: 1092,
						name: '슈트/블레이저 재킷',
						children: [],
					},
					{
						categoryId: 1093,
						name: '카디건',
						children: [],
					},
					{
						categoryId: 1094,
						name: '아노락 재킷',
						children: [],
					},
					{
						categoryId: 1095,
						name: '플리스/뽀글이',
						children: [],
					},
					{
						categoryId: 1096,
						name: '트레이닝 재킷',
						children: [],
					},
					{
						categoryId: 1097,
						name: '스타디움 재킷',
						children: [],
					},
					{
						categoryId: 1098,
						name: '환절기 코트',
						children: [],
					},
					{
						categoryId: 1099,
						name: '겨울 싱글 코트',
						children: [],
					},
					{
						categoryId: 1100,
						name: '겨울 더블 코트',
						children: [],
					},
					{
						categoryId: 1101,
						name: '겨울 기타 코트',
						children: [],
					},
					{
						categoryId: 1102,
						name: '롱패딩/롱헤비 아우터',
						children: [],
					},
					{
						categoryId: 1103,
						name: '숏패딩 숏헤비 아우터',
						children: [],
					},
					{
						categoryId: 1104,
						name: '패딩 베스트',
						children: [],
					},
					{
						categoryId: 1105,
						name: '베스트',
						children: [],
					},
					{
						categoryId: 1106,
						name: '사파리/헌팅 재킷',
						children: [],
					},
					{
						categoryId: 1107,
						name: '나일론/코치 재킷',
						children: [],
					},
					{
						categoryId: 1108,
						name: '기타 아우터',
						children: [],
					},
				],
			},
			{
				categoryId: 1109,
				name: '바지',
				children: [
					{
						categoryId: 1110,
						name: '데님 팬츠',
						children: [],
					},
					{
						categoryId: 1111,
						name: '코튼 팬츠',
						children: [],
					},
					{
						categoryId: 1112,
						name: '슈트 팬츠/슬렉스',
						children: [],
					},
					{
						categoryId: 1113,
						name: '트레이닝/조거 팬츠',
						children: [],
					},
					{
						categoryId: 1114,
						name: '숏 팬츠',
						children: [],
					},
					{
						categoryId: 1115,
						name: '레깅스',
						children: [],
					},
					{
						categoryId: 1116,
						name: '점프 슈트/오버울',
						children: [],
					},
					{
						categoryId: 1117,
						name: '스포츠 하의',
						children: [],
					},
					{
						categoryId: 1118,
						name: '기타 바지',
						children: [],
					},
				],
			},
			{
				categoryId: 1119,
				name: '원피스',
				children: [
					{
						categoryId: 1120,
						name: '미니 원피스',
						children: [],
					},
					{
						categoryId: 1121,
						name: '미디 원피스',
						children: [],
					},
					{
						categoryId: 1122,
						name: '맥시 원피스',
						children: [],
					},
				],
			},
			{
				categoryId: 1123,
				name: '스커트',
				children: [
					{
						categoryId: 1124,
						name: '미니스커트',
						children: [],
					},
					{
						categoryId: 1125,
						name: '미디스커트',
						children: [],
					},
					{
						categoryId: 1126,
						name: '롱스커트',
						children: [],
					},
				],
			},
		]);
	}),
];

export default categoryHandler;
