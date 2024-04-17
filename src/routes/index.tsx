import { useRoutes } from 'react-router-dom';
import mainRoutes from './MainRoutes';

export default function Routes() {
	return useRoutes([mainRoutes]);
}
