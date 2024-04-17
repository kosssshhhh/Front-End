import { Navigate } from 'react-router-dom';

import { routes } from '@/constants/routes';

import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/home/page';
import ImageSearch from '@/pages/imageSearch/page';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Navigate replace to={routes.home.path} />,
		},
		{
			path: routes.home.path,
			element: <Home />,
		},
		{
			path: routes.imageSearch.path,
			element: <ImageSearch />,
		},
	],
};

export default mainRoutes;
