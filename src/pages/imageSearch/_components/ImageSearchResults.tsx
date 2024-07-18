import Card from '@/components/Card';
import { useNavigate } from 'react-router-dom';

interface ImageSearchResults {
	data: {
		original_image: string;
		similar_images: {
			style_id: string;
			mall_type_id: string;
			cdn_url: string;
		}[];
	};
}

export default function ImageSearchResults(data: ImageSearchResults) {
	console.log('data', data);

	const handleImageClick = (mallType: string, styleID: string) => {
		window.open(`/style/detail/${mallType}/${styleID}`);
	};

	return (
		<>
			<Card>
				<div className="p-6">
					{/* <h2 className="text-xl text-center mb-5">Segmented Image</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{data.data.original_image && (
							<>
								<div></div>
								<div className="rounded overflow-hidden shadow-lg">
									<img
										src={`data:image/png;base64,${data.data.original_image}`}
										alt="Segmented"
										className="w-full max-w-48 mx-auto"
									/>
								</div>
								<div></div>
							</>
						)}
					</div> */}

					<h2 className="text-xl text-center font-semibold mb-20">이미지 검색 결과</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
						{data.data.similar_images.length === 0 && (
							<div className="text-center col-span-3">검색 결과가 없습니다.</div>
						)}
						{data.data.similar_images.map((similar_image) => (
							<div
								key={similar_image.style_id}
								className="rounded overflow-hidden shadow-lg cursor-pointer border-2"
								onClick={() => handleImageClick(similar_image.mall_type_id, similar_image.style_id)}>
								<img src={similar_image.cdn_url} alt={`Similar ${similar_image.style_id}`} className="w-full" />
							</div>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}
