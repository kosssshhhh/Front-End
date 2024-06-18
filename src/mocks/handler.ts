import stylesHandler from '@/mocks/handlers/stylesHandler';
import categoryHandler from '@/mocks/handlers/categoryHandler';
import brandHandler from '@/mocks/handlers/brandHandler';
import styleDetailHandler from '@/mocks/handlers/styleDetailHandler';
import styleReviewHandler from '@/mocks/handlers/styleReviewHandler';
import styleReviewCountHandler from '@/mocks/handlers/styleReviewCountHandler';

export const handler = [
	...stylesHandler,
	...categoryHandler,
	...brandHandler,
	...styleDetailHandler,
	...styleReviewHandler,
	...styleReviewCountHandler,
];
