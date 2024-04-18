import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/home/page';
import ImageSearch from '@/pages/imageSearch/page';

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
			element: <Home />,
		},
		{
			path: ROUTES.IMAGE_SEARCH,
			element: <ImageSearch />,
		},
	],
};

export default mainRoutes;
