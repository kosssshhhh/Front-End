import { renderStars } from '@/utils/renderStars';
import { Content } from '@/pages/styleDetail/_types/stylesReview.type';

interface StyleReviewProps {
	review: Content;
}

export default function StyleReview({ review }: StyleReviewProps) {
	console.log(review);

	return (
		<div className="p-4 border-t mb-1">
			<div className="flex flex-col md:flex-row md:justify-between">
				<div className="flex items-center mb-2 md:mb-0">
					<span className="flex p-2 text-yellow-500">{renderStars(review.rate)}</span>
					<span className="ml-2 text-lg font-semibold">{`Test`}</span>
				</div>
				<div className="flex items-center md:justify-end text-sm md:text-base">
					<span className="order-2 md:order-1 text-gray-500 ">{review.userId}</span>
					<span className="order-1 md:order-2 ml-2 :ml-4 pr-2 text-gray-500">{review.writtenDate}</span>
				</div>
			</div>
			<div className="mt-4 p-2 md:max-w-full">
				<p className="text-gray-700">{review.body}</p>
			</div>
		</div>
	);
}
