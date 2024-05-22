import SidebarContainer from '@/layout/MainLayout/Sidebar/_components/SidebarContainer';
import SidebarList from '@/layout/MainLayout/Sidebar/_components/SidebarList';

import { SIDEBAR_ITEMS } from '@/layout/MainLayout/_constants/constant';

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
	console.log(isSidebarOpen);

	return (
		<>
			<aside
				id="sidebar"
				className={`flex fixed z-10 h-full top-0 left-0 pt-16 transition-width lg:flex w-64 flex-shrink-0 flex-col transform transition-width duration-100 ${
					isSidebarOpen ? '' : 'hidden w-0'

					// TODO: 좌우 애니메이션 구현하기
					// isSidebarOpen ? styles['sidebar-transition'] : 'hidden'
					// isSidebarOpen ? 'translate-x-0' : '-translate-x-full '
				}`}
				aria-label="Sidebar">
				<SidebarContainer>
					{SIDEBAR_ITEMS.map((item, index) => {
						return <SidebarList key={index} title={item.title} href={item.href} svgName={item.svgName} />;
					})}
				</SidebarContainer>
			</aside>
		</>
	);
}
