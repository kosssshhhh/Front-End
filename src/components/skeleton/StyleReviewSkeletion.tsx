export default function StyleReviewSkeleton() {
	const renderSkeletonStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(<div key={i} className="w-5 h-5 bg-gray-300 rounded mr-1"></div>);
		}
		return stars;
	};

	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className="p-4 border-b mb-1 animate-pulse">
					<div className="flex justify-between">
						<div className="flex items-center">
							<div className="flex p-2 text-yellow-500">{renderSkeletonStars()}</div>
							<div className="ml-2 w-20 h-6 bg-gray-300 rounded"></div>
						</div>
						<div className="flex items-center">
							<div className="w-16 h-6 bg-gray-300 rounded"></div>
							<div className="pr-2 ml-4 w-24 h-6 bg-gray-300 rounded"></div>
						</div>
					</div>
					<div className="mt-4 p-2">
						<div className="w-full h-20 bg-gray-300 rounded"></div>
					</div>
				</div>
			))}
		</>
	);
}
