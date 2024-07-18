import Card from '@/components/Card';

export default function ImageSearchResultsSkeleton({ offset }: { offset: string }) {
	return (
		<>
			<Card>
				<div className="p-6">
					<h2 className="text-xl text-center font-semibold mb-20">이미지 검색 결과</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
						{[...Array(parseInt(offset))].map((_, index) => (
							<div
								key={index}
								className="rounded overflow-hidden shadow-lg bg-gray-200 animate-pulse h-[480px] w-full"></div>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}
