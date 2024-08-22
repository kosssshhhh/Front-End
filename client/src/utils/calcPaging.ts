export const calcPaging = (pageNumber: number, pageSize: number, totalElements: number) => {
	const start = pageNumber * pageSize + 1;
	const end = Math.min((pageNumber + 1) * pageSize, totalElements);

	return {
		start,
		end,
		total: totalElements,
	};
};
