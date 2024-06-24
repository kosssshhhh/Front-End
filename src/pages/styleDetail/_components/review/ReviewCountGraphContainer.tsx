import ExceptionWord from '@/components/ExceptionWord';
import ReviewCountChart from '@/pages/styleDetail/_components/chart/ReviewCountChart';

import { useFetchStyleReviewCount } from '@/pages/styleDetail/_hooks/useFetchStyleReviewCount';

export default function ReviewCountGraphContainer() {
	const { data, isLoading, isError } = useFetchStyleReviewCount();

	if (isLoading) {
		return <div>로딩중</div>;
	}

	if (isError) {
		console.log(isError);
		return <div>에러</div>;
	}

	if (!data) {
		return <div>데이터가 없습니다.</div>;
	}

	if (data.data.length === 0) {
		return <ExceptionWord text="해당 스타일은 리뷰가 존재하지 않습니다." />;
	}

	return (
		<div className="p-12 xl:col-span-2 xl:px-32">
			<ReviewCountChart data={data.data} />
		</div>
	);
}
