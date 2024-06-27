import { useRef } from 'react';
// import { useSearchParams, useParams } from 'react-router-dom';

import StyleReview from '@/pages/styleDetail/_components/review/StyleReview';
import ReviewFooter from '@/pages/styleDetail/_components/review/ReviewFooter';
import ReviewFilter from '@/pages/styleDetail/_components/review/ReviewFilter';

import { useControlPageNumber, usePageNumber } from '@/pages/styles/_hooks/usePageNumber';
import { useFetchReview } from '@/pages/styleDetail/_hooks/useFetchReview';

import { Content } from '@/pages/styleDetail/_types/stylesReview.type';
import StyleReviewSkeleton from '@/components/skeleton/StyleReviewSkeletion';

import { calcPaging } from '@/utils/calcPaging';
import ExceptionWord from '@/components/ExceptionWord';

export default function StyleReviewContainer() {
	usePageNumber();

	const containerRef = useRef<HTMLDivElement>(null);

	const toScroll = () => {
		containerRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const { data, isLoading, isError } = useFetchReview();

	// if (data) {
	// 	console.log(data.data);
	// }

	const { start, end, total } = calcPaging(
		data?.data.review.pageable.pageNumber,
		data?.data.review.pageable.pageSize,
		data?.data.review.totalElements,
	);

	// if (data?.data.review.content.length === 0) {
	// 	return null;
	// }

	return (
		<div
			ref={containerRef}
			className="p-4 mt-10 shadow-lg bg-white block sm:flex items-center justify-between rounded-lg border-b border-gray-200 lg:p-6 xl:p-8">
			<div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
				<div className="flex flex-col xl:col-span-2">
					<div className="overflow-x-auto">
						<div className="align-middle inline-block min-w-full">
							<div className="shadow overflow-hidden">
								{data && <ReviewFilter reviewCount={data?.data.count} />}
								{isLoading && <StyleReviewSkeleton />}
								{data?.data.review.content.length === 0 && <ExceptionWord text="리뷰가 존재하지 않습니다." />}
								{data?.data.review.content.map((review: Content) => {
									return <StyleReview review={review} key={review.orgReviewId} />;
								})}
							</div>
						</div>
					</div>
					<ReviewFooter toScroll={toScroll} start={start} end={end} total={total} />
				</div>
			</div>
		</div>
	);
}
