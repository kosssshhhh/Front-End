// ErrorComponent.js
export default function ErrorComponent() {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<div className="text-red-500">
				<svg className="w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
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
