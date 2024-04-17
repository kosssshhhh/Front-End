import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Sidebar from '@/layout/MainLayout/Sidebar';
import Navbar from '@/layout/MainLayout/Navbar';

export default function MainLayout() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	);
}
