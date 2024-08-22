import React from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploadProps {
	onDrop: (acceptedFiles: File[]) => void;
	preview: string | null;
}

export default function ImageUpload({ onDrop, preview }: ImageUploadProps) {
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/png': ['.png'],
			'image/jpeg': ['.jpg', '.jpeg'],
		},
	});

	return (
		<div
			{...getRootProps()}
			className="border-2 border-dashed min-w-64 border-gray-300 bg-gray-50 rounded-lg p-6 text-center cursor-pointer">
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
	);
}
