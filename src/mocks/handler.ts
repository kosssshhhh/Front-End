import exampleHandler from '@/mocks/mockExampleHandler';
import productsHandler from '@/mocks/productsHandler';
import categoryHandler from '@/mocks/categoryHandler';
import brandHandler from '@/mocks/brandHandler';

export const handler = [...exampleHandler, ...productsHandler, ...categoryHandler, ...brandHandler];
