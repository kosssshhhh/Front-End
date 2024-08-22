import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';

export default function DetailHandsome({ variable }: { variable: StyleDetailVariable }) {
	// Hansome 페이지에 대한 렌더링 로직
	return (
		<div className="mt-12">
			<div className="flex-col mb-5 items-center">
				<div className="text-sm text-gray-500">스타일 정보</div>
				<div className="text-sm font-medium p-2">{variable.styleInfo}</div>
			</div>

			<div className="flex-col mb-5 items-center">
				<div className="text-sm text-gray-500">착장 정보</div>
				<div className="text-sm font-medium p-2">{variable.fittingInfo}</div>
			</div>

			<div className="flex-col mb-3 items-center">
				<div className="text-sm text-gray-500">추가 정보</div>
				<div className="text-sm font-medium p-2">{variable.additionalInfo}</div>
			</div>
		</div>
	);
}
