import { http, HttpResponse } from 'msw';

const productsHandler = [
	http.get('/style', () => {
		return HttpResponse.json([
			{
				product: {
					id: {
						productId: '1',
						mallType: 'MUSINSA',
					},
					image: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
				},
				brand: '라이크더모스트',
				rankScore: 1,
				fixedPrice: 30000,
				discountedPrice: 20000,
				monetaryUnit: 'KRW',
			},
			{
				product: {
					id: {
						productId: '2',
						mallType: 'WCONCEPT',
					},
					image: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
				},
				brand: '라이크더모스트',
				rankScore: 2,
				fixedPrice: 30000,
				discountedPrice: 20000,
				monetaryUnit: 'KRW',
			},
			{
				product: {
					id: {
						productId: '3',
						mallType: 'MUSINSA',
					},
					image: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
				},
				brand: '라이크더모스트',
				rankScore: 3,
				fixedPrice: 30000,
				discountedPrice: 20000,
				monetaryUnit: 'KRW',
			},
			{
				product: {
					id: {
						productId: '4',
						mallType: 'WCONCEPT',
					},
					image: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
				},
				brand: '라이크더모스트',
				rankScore: 4,
				fixedPrice: 30000,
				discountedPrice: 20000,
				monetaryUnit: 'KRW',
			},
			{
				product: {
					id: {
						productId: '5',
						mallType: 'MUSINSA',
					},
					image: 'https://cdn-img.thehandsome.com/studio/goods/TG/2E/FW/TG2E9WJM046WDI_BL_W01.jpg?rs=684X1032',
				},
				brand: '라이크더모스트',
				rankScore: 5,
			},
		]);
	}),
];

export default productsHandler;
