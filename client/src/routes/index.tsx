import { useRoutes } from 'react-router-dom';
import mainRoutes from '@/routes/MainRoutes';

export default function Routes() {
	return useRoutes([mainRoutes]);
}
