import { svgObj } from '@/assets/svg';

export interface sidebarListType {
	title: string;
	href: string;
	svgName: keyof typeof svgObj;
}
