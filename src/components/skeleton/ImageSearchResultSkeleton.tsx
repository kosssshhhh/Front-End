import Card from '@/components/Card';

export default function ImageSearchResultsSkeleton({ offset }: { offset: string }) {
	return (
		<>
			<Card>
				<div className="p-6">
					<h2 className="text-xl text-center mb-5">Segmented Image</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div></div>
						<div className="rounded overflow-hidden shadow-lg bg-gray-200 animate-pulse h-64 w-full"></div>
						<div></div>
					</div>
					<h2 className="text-xl text-center my-5 mt-32">이미지 검색 결과</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
						{[...Array(parseInt(offset))].map((_, index) => (
							<div
								key={index}
								className="rounded overflow-hidden shadow-lg bg-gray-200 animate-pulse h-[540px] w-full"></div>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}
