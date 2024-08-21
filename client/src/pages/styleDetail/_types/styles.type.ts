export interface Image {
	imageId: number;
	url: string;
	sequence: number;
}

export interface ExposureIndex {
	styleId: string;
	mallTypeId: string;
	exposureIndex: number;
	category: {
		categoryId: number;
		orgCategoryId: string;
		mallType: string;
		name: string;
	};
}

export interface StyleDetailBasic {
	styleId: string;
	styleName: string;
	mallTypeId: string;
	brand: string;
	discountedPrice: number;
	fixedPrice: number;
	monetaryUnit: string;
	crawledDate: string;
	imageList: Image[];
	skuAttribute: {
		sizes: string;
		colors: string;
	};
	exposureIndexList: ExposureIndex[];
}

export interface StyleDetailVariable {
	variableId: number;
	styleInfo?: string;
	fittingInfo?: string;
	additionalInfo?: string;
	productName?: string;
	likes?: number;
	soldOut?: boolean;
	productNum?: string;
	malePercentage?: number;
	femalePercentage?: number;
	cumulativeSales?: number;
	ageUnder18?: number;
	age19To23?: number;
	age24To28?: number;
	age29To33?: number;
	age34To39?: number;
	ageOver40?: number;
}

export interface StyleDetail {
	basicDetail: StyleDetailBasic;
	variableDetail: StyleDetailVariable;
}
