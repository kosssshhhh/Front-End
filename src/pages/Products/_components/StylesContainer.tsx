import { useEffect, useState } from 'react';

import FilterSidebar from '@/pages/Products/_components/SidebarFilter';
import { svgObj } from '@/assets/svg';
import { useSidebarFilter } from '@/pages/Products/_hooks/useSidebarFilter';
import { usePageNumber } from '@/pages/Products/_hooks/usePageNumber';

export default function StylesContainer({ children }: { children: React.ReactNode }) {
	const [isOpen, onClose, sidebarToggle] = useSidebarFilter();
	usePageNumber();

	return (
		<div>
			<div className="p-4 bg-white block sm:flex items-center justify-between border-b rounded-t-xl border-gray-200 lg:mt-1.5">
				<div className="mb-1 w-full">
					<div className="mb-4">
						{/* <nav className="flex mb-5"></nav> */}
						<h1 className="text-xl sm:text-2xl font-semibold text-gray-900">모든 상품</h1>
					</div>
					<div className="sm:flex">
						<div className="sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
							<form className="hidden sm:flex lg:pr-3" action="#" method="GET">
								<label htmlFor="users-search" className="sr-only">
									Search
								</label>
								<div className="mt-1 relative lg:w-64 xl:w-96">
									<input
										type="text"
										name="email"
										id="users-search"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										placeholder="Search for users"
									/>
								</div>
							</form>
							<div className="flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0">
								<button
									className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
									onClick={() => {
										sidebarToggle();
									}}>
									필터 &nbsp;
									{svgObj.filter()}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FilterSidebar isOpen={isOpen} onClose={onClose} />
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}
			{children}
		</div>
	);
}
