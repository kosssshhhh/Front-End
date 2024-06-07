import productsHandler from '@/mocks/handlers/productsHandler';
import categoryHandler from '@/mocks/handlers/categoryHandler';
import brandHandler from '@/mocks/handlers/brandHandler';
import styleDetailHandler from '@/mocks/handlers/styleDetailHandler';
import styleReviewHandler from '@/mocks/handlers/styleReviewHandler';

export const handler = [
	...productsHandler,
	...categoryHandler,
	...brandHandler,
	...styleDetailHandler,
	...styleReviewHandler,
];
