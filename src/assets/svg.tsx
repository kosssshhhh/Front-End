// NOTE: svg 파일 관리하는 object

export const svgObj = {
	home: () => (
		<svg
			className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<path d="M3.012,10.981,3,11H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11h2a1,1,0,0,0,.555-1.832l-9-6a1,1,0,0,0-1.11,0l-9,6a1,1,0,0,0-.277,1.387A.98.98,0,0,0,3.012,10.981ZM10,14a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v5H10Z"></path>
			</g>
		</svg>
	),
	product: () => (
		<svg
			className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
			viewBox="-20 0 190 190"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				{' '}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M135.24 117.11L124.24 117.37L124.58 147.07H100.41L99.41 117.18L110.24 117.11L105.47 92.69L87.84 83.42L96.44 79.23C97.38 74.66 101.28 72.71 101.28 69.86C101.28 65.86 94.72 65.86 94.72 71.19L90.52 70.19C91 64.53 93 61 99.69 61C105.11 61 107.69 64 107.69 69.62C107.69 74.23 104.27 75.85 103.69 79.26L130.47 92.67L135.24 117.11ZM73.92 147.11H26.47V118.51L14.77 118.79L19.27 92.48L46.44 79.23C47.38 74.66 51.28 72.71 51.28 69.86C51.28 65.86 44.72 65.86 44.72 71.19L40.52 70.19C41 64.53 43 61 49.69 61C55.11 61 57.69 64 57.69 69.62C57.69 74.23 54.27 75.85 53.69 79.26L80.47 92.69L85.24 117.11L74.07 117.37L73.92 147.11ZM71.42 79.3C72.34 74.68 76.28 72.72 76.28 69.86C76.28 65.86 69.72 65.86 69.72 71.19L65.52 70.19C66 64.53 68 61 74.69 61C80.11 61 82.69 64 82.69 69.62C82.69 74.53 78.82 76.05 78.58 79.94L71.42 79.3Z"
					fill="#000000"></path>{' '}
			</g>
		</svg>
	),
	pieChart: () => (
		<svg
			className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
			<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
		</svg>
	),
	kanban: () => (
		<svg
			className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
		</svg>
	),
	user: () => (
		<svg
			className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
		</svg>
	),
	hamburger: () => (
		<svg
			id="toggleSidebarMobileHamburger"
			className="w-6 h-6"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clipRule="evenodd"></path>
		</svg>
	),
	close: () => (
		<svg
			id="toggleSidebarMobileClose"
			className="w-6 h-6"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"></path>
		</svg>
	),
	search: () => (
		<svg
			className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clipRule="evenodd"></path>
		</svg>
	),
	previous: () => (
		<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
				clip-rule="evenodd"></path>
		</svg>
	),
	next: () => (
		<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"></path>
		</svg>
	),
};
