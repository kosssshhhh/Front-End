import DetailMusinsa from '@/pages/styleDetail/_components/detailVariable/DetailMusinsa';
import DetailHandsome from '@/pages/styleDetail/_components/detailVariable/DetailHandsome';
import DetailWconcept from '@/pages/styleDetail/_components/detailVariable/DetailWconcept';

import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

interface StyleDetailInfoVariableProps {
	variable: StyleDetailVariable;
	mallType: string;
}

export default function StyledDetailInfoVariable({ variable, mallType }: StyleDetailInfoVariableProps) {
	console.log(variable);

	let content = null;

	switch (mallType) {
		case 'MUSINSA':
			content = <DetailMusinsa variable={variable} />;
			break;
		case 'HANDSOME':
			content = <DetailHandsome variable={variable} />;
			break;
		case 'WCONCEPT':
			content = <DetailWconcept variable={variable} />;
			break;
		default:
			content = null;
	}

	return content;
}
