import { svgObj } from '@/assets/svg';

export const renderStars = (rating: number) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			stars.push(svgObj.filledStar());
		} else {
			stars.push(svgObj.emptyStar());
		}
	}
	return stars;
};
