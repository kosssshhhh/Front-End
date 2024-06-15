import { StyleDetailVariable } from '@/pages/styleDetail/_types/styles.type';
import { svgObj } from '@/assets/svg';
import GenderChart from '@/pages/styleDetail/_components/chart/GenderChart';
import AgeChart from '../chart/AgeChart';

export default function DetailMusinsa({ variable }: { variable: StyleDetailVariable }) {
	// Musinsa 페이지에 대한 렌더링 로직
	return (
		<div className="mt-10">
			<div className="flex mb-2 items-center">
				{svgObj.like()} &nbsp;
				<span className="text-sm text-gray-500 mr-5">좋아요</span>
				<span className="text-l font-medium">{variable.likes}</span>
			</div>
			<div className="flex"></div>
			<div className="flex mb-2 items-center">
				<span className="text-sm text-gray-500 mr-5">누적 판매량</span>
				<span className="text-l font-medium">{variable.cumulativeSales}</span>
			</div>

			{/* <div className="p-4 flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0"> */}
			<div className="my-12 mx-auto">
				<GenderChart malePercentage={variable.malePercentage} femalePercentage={variable.femalePercentage} />
			</div>
			<div className="my-12 mx-auto">
				<AgeChart
					ageUnder18={variable.ageUnder18}
					age19To23={variable.age19To23}
					age24To28={variable.age24To28}
					age29To33={variable.age29To33}
					age34To39={variable.age34To39}
					ageOver40={variable.ageOver40}
				/>
			</div>
		</div>
		// </div>
	);
}
