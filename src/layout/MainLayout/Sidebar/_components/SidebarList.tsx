import { svgObj } from '@/assets/svg';
import { sidebarListType } from '@/layout/_types/type';
import { Link, useNavigate } from 'react-router-dom';

function SidebarList({ title, href, svgName, onToggleSidebar }: sidebarListType) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(href);
		onToggleSidebar();
	};

	return (
		<li>
			<div
				onClick={handleClick}
				// to={href}
				className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group cursor-pointer {{ end }}">
				{svgObj[svgName]()}
				<span className="ml-3 flex-1 whitespace-nowrap">{title}</span>
				{/* <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
					Pro
				</span> */}
			</div>
		</li>
	);
}

export default SidebarList;
