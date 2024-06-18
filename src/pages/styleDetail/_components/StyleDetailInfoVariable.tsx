import DetailMusinsa from '@/pages/styleDetail/_components/detailVariable/DetailMusinsa';
import DetailHandsome from '@/pages/styleDetail/_components/detailVariable/DetailHandsome';
import DetailWconcept from '@/pages/styleDetail/_components/detailVariable/DetailWconcept';

import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

import { MALL_TYPE_ID } from '@/constants/mallTypeId';

interface StyleDetailInfoVariableProps {
	variable: StyleDetailVariable;
	mallTypeId: string;
}

export default function StyledDetailInfoVariable({ variable, mallTypeId }: StyleDetailInfoVariableProps) {
	console.log(variable);

	let content = null;

	switch (mallTypeId) {
		case MALL_TYPE_ID.MUSINSA:
			content = <DetailMusinsa variable={variable} />;
			break;
		case MALL_TYPE_ID.HANDSOME:
			content = <DetailHandsome variable={variable} />;
			break;
		case MALL_TYPE_ID.WCONCEPT:
			content = <DetailWconcept variable={variable} />;
			break;
		default:
			content = null;
	}

	return content;
}
