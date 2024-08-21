export const formatPriceRange = (range: string) => {
	const [min, max] = range.split('-').map((num) => parseInt(num, 10).toLocaleString());
	return `${min}~${max}`;
};
