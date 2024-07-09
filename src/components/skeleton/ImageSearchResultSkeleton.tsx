import Card from '@/components/Card';

export default function ImageSearchResultsSkeleton() {
	return (
		<>
			<Card>
				<div className="p-6">
					<h2 className="text-xl text-center mb-5">Segmented Image</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="rounded overflow-hidden shadow-lg bg-gray-200 animate-pulse h-48 w-full"></div>
					</div>
					<h2 className="text-xl text-center my-5">이미지 검색 결과</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{[...Array(6)].map((_, index) => (
							<div
								key={index}
								className="rounded overflow-hidden shadow-lg bg-gray-200 animate-pulse h-48 w-full"></div>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}
