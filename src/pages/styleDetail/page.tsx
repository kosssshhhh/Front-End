import StyleDetailContainer from '@/pages/styleDetail/_components/StyleDetailContainer';
import ImageContainer from '@/pages/styleDetail/_components/ImageContainer';
import StyleDetailInfoBasic from '@/pages/styleDetail/_components/StyleDetailInfoBasic';
import StyledDetailInfoVariable from '@/pages/styleDetail/_components/StyleDetailInfoVariable';
import StyleReviewContainer from '@/pages/styleDetail/_components/StyleReviewContainer';
import ReviewCountGraphContainer from '@/pages/styleDetail/_components/review/ReaviewCountGraphContainer';

import { useFetchStyleDetail } from '@/pages/styleDetail/hooks/useFetchStyleDetail';

function ProductDetail() {
	const { data, isLoading, isError } = useFetchStyleDetail();

	if (isLoading) {
		return <div>로딩중</div>;
	}

	if (isError) {
		return <div>에러</div>;
	}

	if (!data || !data.data || !data.data.basicDetail || !data.data.basicDetail.imageList) {
		return <div>데이터가 없습니다.</div>; // 데이터가 없는 경우에 대한 처리
	}

	const { basicDetail, variable } = data.data;

	return (
		<>
			<StyleDetailContainer>
				<ImageContainer imageList={basicDetail.imageList} />
				<StyleDetailInfoBasic basicDetail={basicDetail}>
					<StyledDetailInfoVariable variable={variable} mallType={basicDetail.mallType} />
				</StyleDetailInfoBasic>
				<ReviewCountGraphContainer />
			</StyleDetailContainer>
			<StyleReviewContainer mallType={basicDetail.mallType} />
		</>
	);
}

export default ProductDetail;
