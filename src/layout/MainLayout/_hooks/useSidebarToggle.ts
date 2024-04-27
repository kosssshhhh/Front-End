import { useState } from 'react';

export const useSidebarToggle = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
		console.log('toggleSidebar', isSidebarOpen);
	};

	return {
		isSidebarOpen: isSidebarOpen,
		toggleSidebar,
	};
};
