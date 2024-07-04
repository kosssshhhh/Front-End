// ErrorComponent.js
export default function ErrorComponent() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="text-red-500">
				<svg
					className="w-16 h-16 mb-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m0-4h.01M12 9v2m0 4h.01m0 0H12m0 0h-1v-1m0 1h.01M21 21H3c-1.5 0-2.5-1-2.5-2.5v-14C.5 4 1.5 3 3 3h18c1.5 0 2.5 1 2.5 2.5v14c0 1.5-1 2.5-2.5 2.5z"></path>
				</svg>
			</div>
			<h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
			<p className="text-base font-normal text-gray-500">We encountered an error while fetching the data.</p>
			<button
				className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
				onClick={() => window.location.reload()}>
				Reload
			</button>
		</div>
	);
}
