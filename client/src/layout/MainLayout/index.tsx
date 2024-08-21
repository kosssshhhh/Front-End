import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
import Sidebar from '@/layout/MainLayout/Sidebar';
import Navbar from '@/layout/MainLayout/Navbar';
import { useSidebarToggle } from '@/layout/MainLayout/_hooks/useSidebarToggle';
import MainContainer from '@/layout/MainLayout/_components/MainContainer';

export default function MainLayout() {
	const { isSidebarOpen, toggleSidebar } = useSidebarToggle();
	return (
		<main>
			<Navbar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
			<Sidebar onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
			<MainContainer>
				<Outlet />
			</MainContainer>
		</main>
	);
}
