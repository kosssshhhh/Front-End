import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

export default function DetailHandsome({ variable }: { variable: StyleDetailVariable }) {
	// Hansome 페이지에 대한 렌더링 로직
	return (
		<div className="p-12">
			<div>상품 정보: {variable.productInfo}</div>
			<div>착장 정보: {variable.fittingInfo}</div>
			<div>추가 정보: {variable.additionalInfo}</div>
		</div>
	);
}
