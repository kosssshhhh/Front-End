export default function ProductsContainer({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
				<div className="mb-1 w-full">
					<div className="mb-4">
						<nav className="flex mb-5"></nav>
						<h1 className="text-xl sm:text-2xl font-semibold text-gray-900">모든 상품</h1>
					</div>
					<div className="sm:flex">
						<div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
							<form className="lg:pr-3" action="#" method="GET">
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
								<a
									href="#"
									className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
									필터 &nbsp;
									<svg
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										id="filter-alt"
										className="w-6 h-6">
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
										<g id="SVGRepo_iconCarrier">
											<path d="M12,9a3.66,3.66,0,0,0,1-.13V21a1,1,0,0,1-2,0V8.87A3.66,3.66,0,0,0,12,9Z"></path>
											<path d="M19,16a3.66,3.66,0,0,0,1-.13V21a1,1,0,0,1-2,0V15.87A3.66,3.66,0,0,0,19,16Z"></path>
											<path d="M20,3V8.13a3.91,3.91,0,0,0-2,0V3a1,1,0,0,1,2,0Z"></path>
											<path d="M6,3V15.13A3.66,3.66,0,0,0,5,15a3.66,3.66,0,0,0-1,.13V3A1,1,0,0,1,6,3Z"></path>
											<path d="M8,19a3,3,0,1,1-4-2.82,2.87,2.87,0,0,1,2,0A3,3,0,0,1,8,19Z"></path>
											<path d="M15,5a3,3,0,0,1-2,2.82,2.87,2.87,0,0,1-2,0A3,3,0,1,1,15,5Z"></path>
											<path d="M22,12a3,3,0,0,1-2,2.82,2.87,2.87,0,0,1-2,0,3,3,0,0,1,0-5.64,2.87,2.87,0,0,1,2,0A3,3,0,0,1,22,12Z"></path>
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}
