// TODO: 백엔드와 협의 후 변경
export interface StyleType {
	styleId: string;
	mallTypeId: string;
	brand: string;
	discountedPrice: number;
	fixedPrice: number;
	styleName: string;
	exposureIndex: number;
	monetaryUnit: string;
	image: ImageType;
	category: CategoryType;
	dupeExposureIndexList: [];
}

export interface ImageType {
	imageId: number;
	url: string;
	sequence: number;
}

export interface CategoryType {
	categoryId: number;
	orgCategoryId: string;
	mallType: {
		mallTypeId: string;
		mallTypeName: string;
	};
	name: string;
}
