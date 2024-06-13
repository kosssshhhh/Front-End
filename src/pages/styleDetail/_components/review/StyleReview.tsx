import { renderStars } from '@/utils/renderStars';
import { Content } from '@/pages/styleDetail/_types/stylesReview.type';

interface StyleReviewProps {
	review: Content;
}

export default function StyleReview({ review }: StyleReviewProps) {
	console.log(review);

	return (
		<div className="p-4 border-t mb-1">
			<div className="flex justify-between">
				<div className="flex items-center">
					<span className="flex p-2 text-yellow-500">{renderStars(review.rating)}</span>
					<span className="ml-2 text-lg font-semibold">{`Test`}</span>
				</div>
				<div className="flex items-center">
					<span className="text-gray-500">{review.userId}</span>
					<span className="pr-2 ml-4 text-gray-500">{review.writtenDate}</span>
				</div>
			</div>
			<div className="mt-4 p-2">
				<p className="text-gray-700">{review.body}</p>
			</div>
		</div>
	);
}
