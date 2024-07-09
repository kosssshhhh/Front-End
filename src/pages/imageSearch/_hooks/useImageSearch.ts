import { useFileUpload } from '@/pages/imageSearch/_hooks/useFileUpload';
import { useFilters } from '@/pages/imageSearch/_hooks/useFilters';
import { useEffect, useState } from 'react';
import { useFetchSimilarImage } from './useFetchSimilarImage';

export const useImageSearch = () => {
	const { formData, preview, setFormData, onDrop } = useFileUpload();
	const { category, offset, handleCategoryChange, handleOffsetChange } = useFilters();
	const [shouldFetch, setShouldFetch] = useState(false);
	const { data, isLoading, isError } = useFetchSimilarImage(formData, shouldFetch);

	useEffect(() => {
		if (formData) {
			formData.set('category', category);
			formData.set('offset', offset);
		}
	}, [category, offset, formData]);

	const handleSubmit = () => {
		if (formData) {
			setShouldFetch(true);
		} else {
			alert('이미지를 업로드 해주세요');
		}
	};

	const handleReset = () => {
		setFormData(null);
		setShouldFetch(false);
	};

	return {
		preview,
		category,
		offset,
		data,
		isLoading,
		isError,
		onDrop,
		handleCategoryChange,
		handleOffsetChange,
		handleSubmit,
		handleReset,
	};
};
