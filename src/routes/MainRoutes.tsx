import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import MainLayout from '@/layout/MainLayout';

const HomePage = lazy(async () => import('@/pages/home/page'));
const ImageSearchPage = lazy(async () => import('@/pages/imageSearch/page'));
const NotFoundPage = lazy(async () => import('@/pages/notFound/page'));
const ProductDetail = lazy(async () => import('@/pages/styleDetail/page'));
const Styles = lazy(async () => import('@/pages/styles/page'));

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Navigate replace to={ROUTES.HOME} />,
		},
		{
			path: ROUTES.HOME,
			element: (
				<Suspense fallback="loading...">
					<HomePage />
				</Suspense>
			),
		},
		{
			path: ROUTES.STYLES,
			element: (
				<Suspense fallback="loading...">
					<Styles />
				</Suspense>
			),
		},
		{
			path: ROUTES.STYLE_DETAIL,
			element: (
				<Suspense fallback="loading...">
					<ProductDetail />
				</Suspense>
			),
		},
		{
			path: ROUTES.IMAGE_SEARCH,
			element: (
				<Suspense fallback="loading...">
					<ImageSearchPage />
				</Suspense>
			),
		},
		{
			path: '*',
			element: (
				<Suspense fallback="loading...">
					<NotFoundPage />
				</Suspense>
			),
		},
	],
};

export default mainRoutes;
