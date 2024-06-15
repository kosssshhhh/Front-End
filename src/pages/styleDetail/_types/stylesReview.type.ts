export interface RawReviewCountData {
	date: string;
	count: number;
}

export interface ReviewCountData {
	x: number;
	y: number;
}

export interface ReviewResType {
	review: Review;
	count: Count;
}

export interface Count {
	rate1: number;
	rate2: number;
	rate3: number;
	rate4: number;
	rate5: number;
	total: number;
}

export interface Review {
	content: Content[];
	pageable: Pageable;
	last: boolean;
	totalPages: number;
	totalElements: number;
	size: number;
	number: number;
	sort: Sort;
	first: boolean;
	numberOfElements: number;
	empty: boolean;
}

export interface Content {
	reviewId: number;
	productId: string;
	orgReviewId: string;
	rating: number;
	writtenDate: string;
	userId: string;
	body: string;
	productColor: string;
	productSize: string;
	importSource: string;
	userHeight: number | null;
	userSize: number | null;
}

export interface Pageable {
	pageNumber: number;
	pageSize: number;
	sort: Sort;
	offset: number;
	unpaged: boolean;
	paged: boolean;
}

export interface Sort {
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
}
