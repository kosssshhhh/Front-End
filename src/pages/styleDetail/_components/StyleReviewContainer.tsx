import StyleReview from '@/pages/styleDetail/_components/review/StyleReview';
import ReviewFooter from '@/pages/styleDetail/_components/review/ReviewFooter';

import { useControlPageNumber, usePageNumber } from '@/pages/Products/_hooks/usePageNumber';

import { useFetchReview } from '@/pages/styleDetail/hooks/useFetchReview';
import { useSearchParams, useParams } from 'react-router-dom';
import { Content } from '@/pages/styleDetail/_types/stylesReview.type';
import StyleReviewSkeleton from '@/components/skeleton/StyleReviewSkeletion';
import ReviewFilter from './review/ReviewFilter';

export default function StyleReviewContainer() {
	usePageNumber();

	const [searchParams, setSearchParams] = useSearchParams();

	const page = searchParams.get('page');

	const { mallType, productId } = useParams();

	if (!mallType || !productId || !page) {
		return null;
	}

	const { data, isLoading, isError } = useFetchReview(mallType, productId, page);

	if (data) {
		console.log(data.data);
	}

	return (
		<div className="p-4 bg-white block sm:flex items-center justify-between rounded-lg border-b border-gray-200 lg:mt-1.5">
			<div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
				<div className="flex flex-col xl:col-span-2">
					<div className="overflow-x-auto">
						<div className="align-middle inline-block min-w-full">
							<div className="shadow overflow-hidden">
								{data && <ReviewFilter reviewCount={data?.data.count} />}
								{isLoading && <StyleReviewSkeleton />}
								{data?.data.review.content.map((review: Content) => {
									return <StyleReview review={review} />;
								})}
							</div>
						</div>
					</div>
					<ReviewFooter />
				</div>
			</div>
		</div>
	);
}
