import { useParams } from 'react-router-dom';

function ProductDetail() {
	const { productId } = useParams();

	console.log(productId);

	return <div>product {productId} Datail Page</div>;
}

export default ProductDetail;
