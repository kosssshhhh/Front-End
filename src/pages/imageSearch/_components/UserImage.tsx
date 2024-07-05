import React, { useState, useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import Card from '@/components/Card';
import { useFetchSimilarImage } from '@/pages/imageSearch/_hooks/useFetchSimilarImage';
import { MALL_TYPE_ID } from '@/constants/mallTypeId';

export default function UserInputImage() {
	const [formData, setFormData] = useState<FormData | null>(null);
	const [preview, setPreview] = useState<string | null>(null);
	const [shouldFetch, setShouldFetch] = useState(false);
	const [category, setCategory] = useState<string>('Shirts');
	const [offset, setOffset] = useState<string>('5');
	const { data, isLoading, isError } = useFetchSimilarImage(formData, shouldFetch);

	const onDrop = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (file) {
			const newFormData = new FormData();
			newFormData.append('image', file);
			newFormData.append('category', category);
			newFormData.append('offset', offset);

			setFormData(newFormData);

			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/png': ['.png'],
			'image/jpeg': ['.jpg', '.jpeg'],
		},
	});

	const handleSubmit = () => {
		if (formData) {
			setShouldFetch(true);
		} else {
			alert('이미지를 업로드 해주세요');
		}
	};

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(event.target.value);
		if (formData) {
			formData.set('category', event.target.value);
		}
	};

	const handleOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOffset(event.target.value);
		if (formData) {
			formData.set('offset', event.target.value);
		}
	};

	return (
		<>
			<Card>
				<h2 className="text-xl font-semibold mb-2">이미지 검색</h2>
				<p className="text-sm text-gray-600 mb-4">원하시는 스타일 이미지를 업로드 해주세요</p>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div className="p-6">
						<div>
							<div
								{...getRootProps()}
								className="border-2 border-dashed min-w-64 border-gray-300 bg-gray-50 rounded-lg p-6 text-center cursor-pointer ">
								<input {...getInputProps()} />
								{preview ? (
									<div className="rounded overflow-hidden shadow-lg">
										<img src={preview} alt="Preview" className="w-full max-w-96 mx-auto" />
									</div>
								) : (
									<div className="flex flex-col items-center justify-center h-96">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-14 h-14 text-blue-500 mb-3">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
											/>
										</svg>

										<p className="mb-2 text-lg text-gray-600">Drag and Drop Images</p>
										<p className="text-sm text-gray-600">
											Alternatively, you can select a file by <span className="text-blue-500">clicking here</span>
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="p-6">
						<div className="mt-4">
							<label className="block text-lg font-medium text-gray-700 mb-1">쇼핑몰</label>
							<span className="text-sm text-gray-500">쇼핑몰을 선택한 후 카테고리를 선택해주세요</span>
							<select
								className="mt-2 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								value={category}
								onChange={handleCategoryChange}>
								{Object.keys(MALL_TYPE_ID).map((key) => (
									<option key={key} value={MALL_TYPE_ID[key]}>
										{key}
									</option>
								))}
							</select>
						</div>
						<div className="mt-4">
							<label className="block text-lg font-medium text-gray-700">카테고리</label>
							<select
								className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								value={category}
								onChange={handleCategoryChange}>
								{/* {Object.keys(MALL_TYPE_ID).map((key) => (
									<option key={key} value={MALL_TYPE_ID[key]}>
										{key}
									</option>
								))} */}
								{<option value="">상의</option>}
							</select>
						</div>
						<div className="mt-4">
							<label className="block text-lg font-medium text-gray-700">제공받을 이미지 개수</label>
							<input
								type="number"
								className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
								value={offset}
								onChange={handleOffsetChange}
							/>
						</div>
					</div>
					<div></div>
					<div className="flex justify-end space-x-2">
						<button
							className="bg-gray-500 text-white px-4 py-2 rounded-lg"
							onClick={() => {
								setFormData(null);
								setPreview(null);
								setShouldFetch(false);
							}}>
							초기화
						</button>
						<button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSubmit}>
							검색
						</button>
					</div>
				</div>

				{isLoading && <p>Loading...</p>}
				{isError && <p>Error loading data</p>}
			</Card>
			{!isLoading && data?.data && (
				<Card>
					<div className="p-6">
						<h2 className="text-xl text-center mb-5">Segmented Image</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{data.data.segmented_condaimage && (
								<div className="rounded overflow-hidden shadow-lg">
									<img
										src={`data:image/png;base64,${data.data.segmented_condaimage}`}
										alt="Segmented"
										className="w-full"
									/>
								</div>
							)}
						</div>
						<h2 className="text-xl text-center my-5">이미지 검색 결과</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
			)}
		</>
	);
}
