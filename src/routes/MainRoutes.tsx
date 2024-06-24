import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import MainLayout from '@/layout/MainLayout';
import Loading from '@/components/Loading';

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
				<Suspense fallback={<Loading />}>
					<HomePage />
				</Suspense>
			),
		},
		{
			path: ROUTES.STYLES,
			element: (
				<Suspense fallback={<Loading />}>
					<Styles />
				</Suspense>
			),
		},
		{
			path: ROUTES.STYLE_DETAIL,
			element: (
				<Suspense fallback={<Loading />}>
					<ProductDetail />
				</Suspense>
			),
		},
		{
			path: ROUTES.IMAGE_SEARCH,
			element: (
				<Suspense fallback={<Loading />}>
					<ImageSearchPage />
				</Suspense>
			),
		},
		{
			path: '*',
			element: (
				<Suspense fallback={<Loading />}>
					<NotFoundPage />
				</Suspense>
			),
		},
	],
};

export default mainRoutes;
