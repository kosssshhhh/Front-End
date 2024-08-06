import { DupeExposureIndexType } from '@/types';

interface DuplicateCategoryTooltipProps {
	dupeExposureIndexList: DupeExposureIndexType[];
}

export default function DuplicateCategoryTooltip({ dupeExposureIndexList }: DuplicateCategoryTooltipProps) {
	// console.log(dupeExposureIndexList);

	return (
		<div>
			<div className="bg-white border border-gray-200 p-2 rounded shadow-md">
				<div className="text-sm text-gray-500">중복 카테고리</div>
				{dupeExposureIndexList.map((item) => {
					console.log(item.category.name);

					return (
						<div className="text-black">
							<div>{item.category.name}</div>
							<div>{item.ExposureIndex}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
