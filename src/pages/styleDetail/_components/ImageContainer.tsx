import { useEffect, useState } from 'react';
import { Image } from '@/pages/styleDetail/_types/styles.type';

interface ImageContainerProps {
	imageList: Image[];
}

export default function ImageContainer({ imageList }: ImageContainerProps) {
	const [mainImage, setMainImage] = useState<string>('');

	useEffect(() => {
		if (imageList.length > 0) {
			setMainImage(imageList[0].url);
		}
	}, [imageList]);

	if (!mainImage || imageList.length === 0) {
		return null; // 이미지가 없을 때 처리할 내용
	}

	return (
		<div className="p-12 xl:border-r-2">
			<img src={mainImage} alt="Main" className="w-full h-auto" />
			<div className="flex mt-4 overflow-x-scroll">
				{imageList.map((image) => (
					<img
						key={image.imageId}
						src={image.url}
						alt={`Thumbnail ${image.sequence}`}
						className={`w-12 h-16 cursor-pointer mr-2 ${image.url === mainImage ? '' : 'opacity-30'}`}
						onClick={() => setMainImage(image.url)}
					/>
				))}
			</div>
		</div>
	);
}
