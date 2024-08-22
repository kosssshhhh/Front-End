import { sidebarListType } from '@/layout/_types/type';

export const SIDEBAR_ITEMS: sidebarListType[] = [
	{
		title: 'Home',
		href: '/',
		svgName: 'home',
	},
	{
		title: 'Style',
		href: '/style?page=1',
		svgName: 'user',
	},
	{
		title: 'Image Search',
		href: '/imageSearch',
		svgName: 'search',
	},
];
