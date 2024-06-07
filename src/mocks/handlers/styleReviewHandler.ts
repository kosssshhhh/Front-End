import { http, HttpResponse } from 'msw';

const styleReviewHandler = [
	http.get('/style/detail/:mallType/review/:productId', () => {
		return HttpResponse.json({
			content: [
				{
					reviewId: 1,
					reviewProduct: {},
					productId: 'MN2E5WJC483W',
					orgReviewId: '13110308',
					rating: 5,
					writtenDate: '2024-05-13',
					userId: 'tel*******',
					body: '실용적이겟음 .차려입은듯 꾸안꾸.이쁨',
					productColor: 'NEUTRAL',
					productSize: '82',
					importSource: '제주한섬하우스 마인',
					userHeight: null,
					userSize: 55,
				},
				{
					reviewId: 2,
					reviewProduct: {},
					productId: 'MN2E5WJC483W',
					orgReviewId: '13102112',
					rating: 5,
					writtenDate: '2024-05-11',
					userId: 'jin*******',
					body: '천이 고급스럽고 너무 두껍지 읺아서 예뻐요',
					productColor: 'NEUTRAL',
					productSize: '76',
					importSource: '더한섬닷컴 마인',
					userHeight: null,
					userSize: 44,
				},
				{
					reviewId: 3,
					reviewProduct: {},
					productId: 'MN2E5WJC483W',
					orgReviewId: '13100973',
					rating: 5,
					writtenDate: '2024-05-11',
					userId: 'smc***********',
					body: '재킷 색상은 착샷이 살짝 밝게 나온편이고, 실제는 모델색상에 가깝습니다. 무엇보다 입지 않은것 같은 가벼움과 여러 색상이 섞여있는 오묘한 컬러감이 너무 예쁩니다. 길이는 요즘 워낙 짧게 나와서 그런지 제기준에는 크게 짧게 느껴지진 않네요^^ 원래 재킷류 잘 입지 않는데 올해는 마인 재킷들이 맴쏙이라 사지 않을수가 없네요~',
					productColor: 'NEUTRAL',
					productSize: '76',
					importSource: '현대대구마인',
					userHeight: 162,
					userSize: 44,
				},
			],
			pageable: {
				pageNumber: 0,
				pageSize: 20,
				sort: {
					empty: true,
					sorted: false,
					unsorted: true,
				},
				offset: 0,
				unpaged: false,
				paged: true,
			},
			last: true,
			totalElements: 3,
			totalPages: 1,
			size: 20,
			number: 0,
			sort: {
				empty: true,
				sorted: false,
				unsorted: true,
			},
			first: true,
			numberOfElements: 3,
			empty: false,
		});
	}),
];

export default styleReviewHandler;
