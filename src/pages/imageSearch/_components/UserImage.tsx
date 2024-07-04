import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import Card from '@/components/Card';
import { useFetchSimilarImage } from '@/pages/imageSearch/_hooks/useFetchSimilarImage';

export default function UserInputImage() {
	const [formData, setFormData] = useState<FormData | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [shouldFetch, setShouldFetch] = useState(false);
	const { data, isLoading, isError } = useFetchSimilarImage(formData, shouldFetch);

	const onDrop = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (file) {
			const newFormData = new FormData();
			newFormData.append('image', file);
			newFormData.append('category', 'One Piece');
			newFormData.append('offset', '5'); // 문자열로 변환

			setFormData(newFormData);

			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	console.log(data?.data);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	const handleSubmit = async () => {
		if (formData) {
			// formData를 서버로 보내는 로직이 이미 useFetchSimilarImage 훅에 있으므로,
			// setFormData를 통해 상태를 설정하여 자동으로 훅이 실행되도록 합니다.
			// setFormData(formData);
			setShouldFetch(true);
		}
	};

	return (
		<Card>
			<h2 className="text-lg font-semibold mb-2">Upload a file</h2>
			<p className="text-sm text-gray-600 mb-4">Attach the file below</p>
			<div className="p-10">
				<div
					{...getRootProps()}
					className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer ">
					<input {...getInputProps()} />
					{preview ? (
						<img src={preview} alt="Preview" className="w-auto h-auto object-cover mx-auto" />
					) : (
						<div className="flex flex-col items-center justify-center">
							<svg
								className="w-12 h-12 text-blue-500 mb-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
							</svg>
							<p className="mb-2">Drag file(s) here to upload.</p>
							<p className="text-sm text-gray-600">
								Alternatively, you can select a file by <span className="text-blue-500">clicking here</span>
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="mt-4 flex justify-end space-x-2">
				<button
					className="bg-gray-500 text-white px-4 py-2 rounded"
					onClick={() => {
						setFormData(null);
						setPreview(null);
						setShouldFetch(false);
					}}>
					Cancel
				</button>
				<button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
					Upload File
				</button>
			</div>

			{isLoading && <p>Loading...</p>}
			{isError && <p>Error loading data</p>}
			{data?.data && (
				<Card>
					<div className="flex">
						<div className="mb-10">
							<h2 className="text-xl text-center mb-5">Segmented Image</h2>
							{data.data.segmented_condaimage && (
								<img src={`data:image/png;base64,${data.data.segmented_condaimage}`} alt="Segmented" />
							)}
						</div>
						<h2 className="text-xl text-center mb-10">Similar Images</h2>
						{data.data.similar_images &&
							Object.keys(data.data.similar_images).map((key) => (
								<div key={key} className="mb-10">
									<h3 className="text-sm text-center">{key}</h3>
									{data.data.similar_images[key].map((imgSrc: string, index: number) => (
										<img key={index} src={imgSrc} alt={`Similar ${index}`} />
									))}
								</div>
							))}
					</div>
				</Card>
			)}
		</Card>
	);
}
