import { svgObj } from '@/assets/svg';
import { useCheckFirstPage, useCheckLastPage } from '@/hooks/useCheckPageRange';
import { useControlPageNumber } from '@/pages/styles/_hooks/usePageNumber';

interface StylesTableFooterProps {
	start: number;
	end: number;
	total: number;
}

export default function StylesTableFooter({ start, end, total }: StylesTableFooterProps) {
	const [increasePage, decreasePage] = useControlPageNumber();

	const isLastPage = useCheckLastPage(end, total);
	const isFirstPage = useCheckFirstPage(start);

	const handleDecreasePage = () => {
		if (!isFirstPage) {
			decreasePage();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleIncreasePage = () => {
		if (!isLastPage) {
			increasePage();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<>
			<div className="bg-white sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
				<div className="flex items-center mb-4 sm:mb-0">
					<button
						className={`text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2 ${
							isFirstPage && 'cursor-not-allowed'
						}`}
						onClick={handleDecreasePage}>
						{svgObj.previous()}
					</button>
					<button
						className={`text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2 ${
							isLastPage && 'cursor-not-allowed'
						}`}
						onClick={handleIncreasePage}>
						<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"></path>
						</svg>
					</button>
					{!isNaN(start) && (
						<span className="text-sm font-normal text-gray-500">
							Showing{' '}
							<span className="text-gray-900 font-semibold">
								{start}-{end}
							</span>{' '}
							of <span className="text-gray-900 font-semibold">{total}</span>
						</span>
					)}
				</div>
				<div className="flex items-center space-x-3">
					<button
						// className="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
						className={`flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center ${
							isFirstPage && 'cursor-not-allowed'
						}`}
						onClick={handleDecreasePage}>
						<svg
							className="-ml-1 mr-1 h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"></path>
						</svg>
						Previous
					</button>
					<button
						className={`flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center ${
							isLastPage && 'cursor-not-allowed'
						}`}
						onClick={handleIncreasePage}>
						Next
						<svg
							className="-mr-1 ml-1 h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"></path>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}
