export const calculateStartDate = (filter: string): string => {
	const today = new Date();

	switch (filter) {
		case 'Latest Month':
			return new Date(today.setMonth(today.getMonth() - 1)).toISOString().split('T')[0];

		case '3 Months':
			return new Date(today.setMonth(today.getMonth() - 3)).toISOString().split('T')[0];

		case '6 Months':
			return new Date(today.setMonth(today.getMonth() - 6)).toISOString().split('T')[0];

		case '12 Months':
			return new Date(today.setMonth(today.getMonth() - 12)).toISOString().split('T')[0];
		default:
			return '';
	}
};
