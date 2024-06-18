export const convertDate = (date: string) => {
	const today = new Date();
	let resultDate;

	switch (date) {
		case 'week':
			resultDate = new Date(today);
			resultDate.setDate(today.getDate() - 7);
			break;

		case 'month':
			resultDate = new Date(today);
			resultDate.setMonth(today.getMonth() - 1);
			break;

		case 'months':
			resultDate = new Date(today);
			resultDate.setMonth(today.getMonth() - 3);
			break;

		case 'year':
			resultDate = new Date(today);
			resultDate.setFullYear(today.getFullYear() - 1);
			break;

		default:
			resultDate = null;
			break;
	}

	if (resultDate) {
		return resultDate.toISOString().split('T')[0];
	} else {
		return null;
	}
};
