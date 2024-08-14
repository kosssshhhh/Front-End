import { useEffect, useState } from 'react';

import FilterSidebar from '@/pages/styles/_components/FIilterSidebar';
import { svgObj } from '@/assets/svg';
import { useSidebarFilter } from '@/pages/styles/_hooks/useSidebarFilter';
import { usePageNumber } from '@/pages/styles/_hooks/usePageNumber';
import Card from '@/components/Card';

export default function StylesContainer({ children }: { children: React.ReactNode }) {
	const [isOpen, onClose, sidebarToggle] = useSidebarFilter();
	usePageNumber();

	return (
		<div className="pt-6 px-4">
			<div className="w-full grid grid-cols-1 gap-4">
				<Card>
					<div className="p-4 bg-white block sm:flex items-center justify-between border-b rounded-t-xl border-gray-200 lg:mt-1.5">
						<div className="mb-1 w-full flex">
							<div className="mb-4">
								{/* <nav className="flex mb-5"></nav> */}
								<h1 className="text-xl items-center sm:text-2xl font-semibold text-gray-900">모든 상품</h1>
							</div>
							<div className="flex items-center space-x-1 pl-0 ml-6 sm:pl-2 mt-3 sm:mt-0">
								<button
									className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
									onClick={() => {
										sidebarToggle();
									}}>
									필터 &nbsp;
									{svgObj.filter()}
								</button>
							</div>
							{/* <div className="sm:flex">
						<div className="sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0"></div>
					</div> */}
						</div>
					</div>
					<FilterSidebar isOpen={isOpen} onClose={onClose} />
					{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}
					{children}
				</Card>
			</div>
		</div>
	);
}
