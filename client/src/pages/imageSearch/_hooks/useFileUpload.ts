import { useState } from 'react';

export const useFileUpload = () => {
	const [formData, setFormData] = useState<FormData | null>(null);
	const [preview, setPreview] = useState<string | null>(null);

	const onDrop = (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (file) {
			const newFormData = new FormData();
			newFormData.append('image', file);
			setFormData(newFormData);

			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	return {
		formData,
		preview,
		setPreview,
		setFormData,
		onDrop,
	};
};
