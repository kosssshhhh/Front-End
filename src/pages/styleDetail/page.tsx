import StyleDetailContainer from '@/pages/styleDetail/_components/StyleDetailContainer';
import ImageContainer from '@/pages/styleDetail/_components/ImageContainer';
import StyleDetailInfoBasic from '@/pages/styleDetail/_components/StyleDetailInfoBasic';
import StyledDetailInfoVariable from '@/pages/styleDetail/_components/StyleDetailInfoVariable';
import StyleReviewContainer from '@/pages/styleDetail/_components/StyleReviewContainer';
import ReviewCountGraphContainer from '@/pages/styleDetail/_components/review/ReviewCountGraphContainer';

import { useFetchStyleDetail } from '@/pages/styleDetail/_hooks/useFetchStyleDetail';
import { useScrollTop } from '@/hooks/useScrollTop';
import Loading from '@/components/Loading';
import ExceptionWord from '@/components/ExceptionWord';
import Card from '@/components/Card';

function ProductDetail() {
	const { data, isLoading, isError } = useFetchStyleDetail();
	useScrollTop();

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			// <div className="flex p-64 justify-center items-center h-full">
			// 	<span className="text-gray-500">잘못된 접근입니다.</span>
			// </div>
			<ExceptionWord text="잘못된 접근입니다." />
		);
	}

	if (!data || !data.data || !data.data.basicDetail || !data.data.basicDetail.imageList) {
		return (
			<div className="flex p-64 justify-center items-center h-full">
				<ExceptionWord text="해당 스타일이 존재하지 않습니다." />
			</div>
		); // 데이터가 없는 경우에 대한 처리
	}

	const { basicDetail, variable } = data.data;

	return (
		<>
			<StyleDetailContainer>
				<ImageContainer imageList={basicDetail.imageList} />
				<StyleDetailInfoBasic basicDetail={basicDetail}>
					<StyledDetailInfoVariable variable={variable} mallTypeId={basicDetail.mallTypeId} />
				</StyleDetailInfoBasic>
				<ReviewCountGraphContainer />
			</StyleDetailContainer>
			<StyleReviewContainer />
		</>
	);
}

export default ProductDetail;
