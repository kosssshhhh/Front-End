import Card from '@/components/Card';

export default function ImageSearchResults(data: any) {
	return (
		<>
			<Card>
				<div className="p-6">
					<h2 className="text-xl text-center mb-5">Segmented Image</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{data.data.segmented_condaimage && (
							<>
								<div></div>
								<div className="rounded overflow-hidden shadow-lg">
									<img
										src={`data:image/png;base64,${data.data.segmented_condaimage}`}
										alt="Segmented"
										className="w-full max-w-48 mx-auto"
									/>
								</div>
								<div></div>
							</>
						)}
					</div>
					<h2 className="text-xl text-center my-5 mt-32">이미지 검색 결과</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
						{data.data.similar_images &&
							Object.keys(data.data.similar_images).map((key) =>
								data.data.similar_images[key].map((imgSrc: string, index: number) => (
									<div key={`${key}-${index}`} className="rounded overflow-hidden shadow-lg">
										<img src={imgSrc} alt={`Similar ${index}`} className="w-full" />
									</div>
								)),
							)}
					</div>
				</div>
			</Card>
		</>
	);
}
