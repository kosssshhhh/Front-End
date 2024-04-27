import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Sidebar from '@/layout/MainLayout/Sidebar';
import Navbar from '@/layout/MainLayout/Navbar';
import { useSidebarToggle } from '@/layout/MainLayout/_hooks/useSidebarToggle';

export default function MainLayout() {
	const { isSidebarOpen, toggleSidebar } = useSidebarToggle();
	return (
		<>
			<Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<Outlet />
		</>
	);
}
