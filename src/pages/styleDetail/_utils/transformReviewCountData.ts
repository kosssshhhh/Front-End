import { RawReviewCountData } from '@/pages/styleDetail/_types/stylesReview.type';

export const transformReviewCountData = (data: RawReviewCountData[]) => {
	return data.map((item) => ({
		x: new Date(item.date).getTime(),
		y: item.count,
	}));
};
