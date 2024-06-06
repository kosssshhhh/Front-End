import { http, HttpResponse } from 'msw';

const styleDetailHandler = [
	http.get('/style/detail/:mallType/:productId', () => {
		return HttpResponse.json({
			variable: {
				variableId: 228,
				productNum: 'T4S-ORJP406',
				malePercentage: 90,
				femalePercentage: 10,
				likes: 626,
				cumulativeSales: 387,
				ageUnder18: 3,
				age19To23: 11,
				age24To28: 25,
				age29To33: 22,
				age34To39: 16,
				ageOver40: 23,
			},
			basicDetail: {
				productId: '3827664',
				mallType: 'MUSINSA',
				brand: 'toffee',
				discountedPrice: 19900,
				fixedPrice: 109000,
				monetaryUnit: 'KRW',
				crawledDate: '2024-06-02T15:00:00.000+00:00',
				imageList: [
					{
						imageId: 780,
						url: 'https://product-image.wconcept.co.kr/productimg/image/img0/46/302849046_IX66682.jpg',
						sequence: 0,
					},
					{
						imageId: 781,
						url: 'https://product-image.wconcept.co.kr/productimg/image/img0/46/302849046_add1_PF51602.jpg',
						sequence: 1,
					},
					{
						imageId: 782,
						url: 'https://product-image.wconcept.co.kr/productimg/image/img0/46/302849046_add2_HR83094.jpg',
						sequence: 2,
					},
				],
				skuAttribute: {},
				exposureIndexList: [
					{
						productId: '3827664',
						mallType: 'MUSINSA',
						exposureIndex: 4.0,
						category: {
							categoryId: 1088,
							orgCategoryId: '002001',
							mallType: 'MUSINSA',
							name: '블루종/MA-1',
						},
					},
				],
			},
		});
	}),
];

export default styleDetailHandler;
