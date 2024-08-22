import { http, HttpResponse } from 'msw';

// TODO: productId -> styleId 변경
// 		 styleName 추가

// 한섬 데이터
// const styleDetailHandler = [
// 	http.get('/style/detail/:mallTypeId/:styleId', () => {
// 		return HttpResponse.json({
// 			variable: {
// 				variableId: 69,
// 				styleInfo:
// 					'서로 다른 컬러를 믹스하여 포인트를 준 하프 슬리브 자켓입니다. 이탈리아 수입의 린넨과 면 혼방 소재를 사용해 한층 고급스럽게 완성했으며, 살짝 크롭한 기장감이 트렌디한 분위기를 자아냅니다. 가슴 양쪽에 패치 포켓을 디자인했으며, 소맷단과 뒷면 밑단 양옆에 슬릿을 더해 섬세하게 완성했습니다. 깔끔한 레귤러 실루엣으로 높은 활용도를 자랑합니다.',
// 				fittingInfo: '174cm, 55 사이즈 모델이 82 사이즈 착용',
// 				additionalInfo:
// 					'"이탈리아 수입 원단", "린넨과 면 혼방 소재", "앞면에 버튼 클로징", "가슴 양쪽에 포켓", "소맷단과 뒷면 밑단 양옆에 슬릿"',
// 			},
// 			basicDetail: {
// 				styleId: 'MN2E5WJC483W',
// 				mallTypeId: 'FHyETFQN',
// 				brand: 'MINE',
// 				discountedPrice: 595000,
// 				fixedPrice: 595000,
// 				styleName: null,
// 				monetaryUnit: 'KRW',
// 				crawledDate: '2024-06-10',
// 				imageList: [
// 					{
// 						imageId: 1,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/0.webp',
// 						sequence: 0,
// 					},
// 					{
// 						imageId: 2,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/1.webp',
// 						sequence: 1,
// 					},
// 					{
// 						imageId: 3,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/2.webp',
// 						sequence: 2,
// 					},
// 					{
// 						imageId: 4,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/3.webp',
// 						sequence: 3,
// 					},
// 					{
// 						imageId: 5,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/4.webp',
// 						sequence: 4,
// 					},
// 					{
// 						imageId: 6,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/5.webp',
// 						sequence: 5,
// 					},
// 					{
// 						imageId: 7,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/6.webp',
// 						sequence: 6,
// 					},
// 					{
// 						imageId: 8,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/7.webp',
// 						sequence: 7,
// 					},
// 					{
// 						imageId: 9,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/8.webp',
// 						sequence: 8,
// 					},
// 				],
// 				skuAttribute: {
// 					sizes: '88',
// 					colors: 'NEUTRAL',
// 				},
// 				exposureIndexList: [
// 					{
// 						styleId: 'MN2E5WJC483W',
// 						mallTypeId: 'FHyETFQN',
// 						exposureIndex: 3.0,
// 						category: {
// 							categoryId: 1129,
// 							orgCategoryId: '388',
// 							mallType: {
// 								mallTypeId: 'FHyETFQN',
// 								mallTypeName: 'HANDSOME',
// 							},
// 							name: '자켓',
// 						},
// 					},
// 				],
// 			},
// 		});
// 	}),
// ];

// 무신사 데이터
const styleDetailHandler = [
	http.get('/style/detail/:mallTypeId/:styleId', () => {
		return HttpResponse.json({
			variable: {
				variableId: 315,
				malePercentage: 70,
				femalePercentage: 30,
				likes: 25848,
				cumulativeSales: 13809,
				ageUnder18: 2,
				age19To23: 26,
				age24To28: 39,
				age29To33: 21,
				age34To39: 6,
				ageOver40: 6,
			},
			basicDetail: {
				styleId: '3321836',
				mallTypeId: 'JN1qnDZA',
				brand: 'partimento',
				discountedPrice: 37905,
				fixedPrice: 49900,
				styleName: '링클 체크 박시 오버핏 롤업 하프 셔츠 다크 네이비',
				monetaryUnit: 'KRW',
				crawledDate: '2024-06-13',
				imageList: [
					{
						imageId: 1,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/0.webp',
						sequence: 0,
					},
					{
						imageId: 2,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/1.webp',
						sequence: 1,
					},
					{
						imageId: 3,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/2.webp',
						sequence: 2,
					},
					{
						imageId: 4,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/3.webp',
						sequence: 3,
					},
					{
						imageId: 5,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/4.webp',
						sequence: 4,
					},
					{
						imageId: 6,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/5.webp',
						sequence: 5,
					},
					{
						imageId: 7,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/6.webp',
						sequence: 6,
					},
					{
						imageId: 8,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/7.webp',
						sequence: 7,
					},
					{
						imageId: 9,
						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/8.webp',
						sequence: 8,
					},
				],
				skuAttribute: {},
				exposureIndexList: [
					{
						productId: '3321836',
						mallType: 'JN1qnDZA',
						exposureIndex: 3.0,
						category: {
							categoryId: 1080,
							orgCategoryId: '001002',
							mallType: {
								mallTypeId: 'JN1qnDZA',
								mallTypeName: 'MUSINSA',
							},
							name: '셔츠/블라우스',
						},
					},
				],
			},
		});
	}),
];

// W 컨셉 데이터
// const styleDetailHandler = [
// 	http.get('/style/detail/:mallTypeId/:styleId', () => {
// 		return HttpResponse.json({
// 			variable: {
// 				variableId: 157,
// 				likes: 8,
// 				soldOut: true,
// 			},
// 			basicDetail: {
// 				styleId: '304057182',
// 				mallTypeId: 'l8WAu4fP',
// 				brand: '노스페이스',
// 				discountedPrice: 201200,
// 				fixedPrice: 289000,
// 				styleName: null,
// 				monetaryUnit: 'KRW',
// 				crawledDate: '2024-06-07',
// 				imageList: [
// 					{
// 						imageId: 1,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/0.webp',
// 						sequence: 0,
// 					},
// 					{
// 						imageId: 2,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/1.webp',
// 						sequence: 1,
// 					},
// 					{
// 						imageId: 3,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/2.webp',
// 						sequence: 2,
// 					},
// 					{
// 						imageId: 4,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/3.webp',
// 						sequence: 3,
// 					},
// 					{
// 						imageId: 5,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/4.webp',
// 						sequence: 4,
// 					},
// 					{
// 						imageId: 6,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/5.webp',
// 						sequence: 5,
// 					},
// 					{
// 						imageId: 7,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/6.webp',
// 						sequence: 6,
// 					},
// 					{
// 						imageId: 8,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/7.webp',
// 						sequence: 7,
// 					},
// 					{
// 						imageId: 9,
// 						url: 'https://designovellocal.s3.ap-northeast-2.amazonaws.com/handsome/MN2E5WJC483W/8.webp',
// 						sequence: 8,
// 					},
// 				],
// 				skuAttribute: {},
// 				exposureIndexList: [
// 					{
// 						styleId: '304057182',
// 						mallTypeId: 'l8WAu4fP',
// 						exposureIndex: 0.94736844,
// 						category: {
// 							categoryId: 1032,
// 							orgCategoryId: '001001005M',
// 							mallType: {
// 								mallTypeId: 'l8WAu4fP',
// 								mallTypeName: 'WCONCEPT',
// 							},
// 							name: '패딩',
// 						},
// 					},
// 				],
// 			},
// 		});
// 	}),
// ];

export default styleDetailHandler;
