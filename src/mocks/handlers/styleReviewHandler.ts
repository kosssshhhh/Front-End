import { http, HttpResponse, delay } from 'msw';

const styleReviewHandler = [
	http.get('/style/details/review/:mallType', async () => {
		await delay(300);
		return HttpResponse.json({
			review: {
				content: [
					{
						reviewId: 50319,
						productId: 'CM2E3KCD526W',
						orgReviewId: '13181432',
						rating: 4,
						writtenDate: '2024-05-29',
						userId: 'phi****',
						body: '더캐는 색깔 고민하면 금방 그 색이 품절되더라고요. 라이트 베이지 계속 품절 상태였는데 급 재고 떠서 구매했어요. 주문 후 오래 기다렸는데, 색깔은 너무 마음에 듭니다. \n다만, 총 길이가 생각보다 너무 짧아서 내 상체가 이렇게 길었나 순간 당황했네요. 폼은 커서 편한데 길이는 짧은 옷.  일단 옷 색감과 소재 자체는 마음에 들어서 입어 보려고 합니다. ^^ ',
						productColor: 'LIGHT BEIGE',
						productSize: '85',
						importSource: '더한섬닷컴 더캐시미어',
						userHeight: 161,
						userSize: 55,
					},
					{
						reviewId: 50325,
						productId: 'CM2E3KCD526W',
						orgReviewId: '13174952',
						rating: 4,
						writtenDate: '2024-05-28',
						userId: 'sos*****',
						body: '매장갈때마다 추천해주셨던거 쳐다도 안보다가 이번에 화이트컬러 나와서 막차탔어요 ㅎㅎㅎ\n노란끼 없는 오프화이트색상으로 브라운 스트라이프로 되어 있구요.\n스커트보다는 팬츠나 청바지 가디건에 코디하는게 예쁘더라구요\n기본디자인이라 두루두루 오래 소장할만해요~\n',
						productColor: 'OFF WHITE',
						productSize: '85',
						importSource: '현대미아 더캐시미어',
						userHeight: 164,
						userSize: 55,
					},
					{
						reviewId: 50358,
						productId: 'CM2E3KCD526W',
						orgReviewId: '13122262',
						rating: 4,
						writtenDate: '2024-05-16',
						userId: 'ilo****',
						body: '좋아요, 원단도 좋은 거 같고  이런 색이 없었어서 구입확정했습니다ㅎㅎ 사계절 내내 잘 입을 거 같아요, 웜톤에게 찰떡입니다~',
						productColor: 'CAMEL',
						productSize: '85',
						importSource: '더한섬닷컴 더캐시미어',
						userHeight: null,
						userSize: null,
					},
					{
						reviewId: 652,
						productId: 'CM2E3KCD526W',
						orgReviewId: '12825042',
						rating: 4,
						writtenDate: '2024-03-19',
						userId: 'dae*****************',
						body: '스트라이프는 많아도 미묘한 차이는 있다며 고민하다 라이트베이지로 픽!\n일단 부드러운 촉감에 착용감 편합니다.\n살짝 짧은듯한데 초여름까진 가볍게 입기 좋을 거겉아요.\n기본은 더캐가 젤 나은듯합니다.',
						productColor: 'LIGHT BEIGE',
						productSize: '85',
						importSource: '더한섬닷컴 더캐시미어',
						userHeight: 165,
						userSize: 55,
					},
				],
				pageable: {
					pageNumber: 0,
					pageSize: 10,
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
				totalPages: 1,
				totalElements: 4,
				size: 10,
				number: 0,
				sort: {
					empty: true,
					sorted: false,
					unsorted: true,
				},
				first: true,
				numberOfElements: 4,
				empty: false,
			},
			count: {
				rate1: 0,
				rate2: 0,
				rate3: 1,
				rate4: 4,
				rate5: 160,
				total: 165,
			},
		});
	}),
];

export default styleReviewHandler;
