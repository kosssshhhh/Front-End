// TODO: 백엔드와 협의 후 변경
export interface ProductType {
	product: {
		id: {
			productId: string;
			mallType: 'WCONCEPT' | 'MUSINSA' | 'MUSINSA';
		};
	};
	brand: string;
	rankScore: number;
	fixedPrice: number;
	discountedPrice: number;
	monetaryUnit: 'KRW' | 'USD';
}
