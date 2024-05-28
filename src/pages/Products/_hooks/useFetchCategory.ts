import { useEffect, useState } from 'react';

export const useFetchCategory = (mallType: string) => {
	const [category, setCategory] = useState<string[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/category')
			.then((res) => res.json())
			.then((data) => setCategory(data));
	}, [mallType]);

	return category;
};
