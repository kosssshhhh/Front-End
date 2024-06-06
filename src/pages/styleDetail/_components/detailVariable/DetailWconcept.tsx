import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

export default function DetailWconcept({ variable }: { variable: StyleDetailVariable }) {
	// Hansome 페이지에 대한 렌더링 로직
	return (
		<div>
			<div>상품 이름: {variable.productName}</div>
			<div>좋아요: {variable.likes}</div>
			<div>{variable.soldOut ? '품절' : '판매중'}</div>
		</div>
	);
}
