import { ICommunication } from './http';

// import { Response } from 'http-proxy-middleware/dist/types';

export class HttpInterface {
	private defaultOptions;
	constructor(private apiClient: ICommunication) {
		this.apiClient = apiClient;
		this.defaultOptions = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
	}

	// TODO: Api 명세 대로 구현하기
	// async checkAuthentication(data: CheckAuthData) {
	// 	return this.apiClient.post('/users/session', data);
	// }
	async getMockData() {
		return this.apiClient.get('/example');
	}

	async getStyles(params: any) {
		return this.apiClient.get('/style', { params: params });
	}

	async getCategory(mallType: string) {
		return this.apiClient.get(`style/filter/category/${mallType}`);
	}

	async getBrand(mallType: string) {
		return this.apiClient.get(`/style/filter/brand/${mallType}`);
	}

	async getStyleDetail(mallType: string, productId: string) {
		return this.apiClient.get(`/style/detail/${mallType}/${productId}`);
	}

	async getStyleReview(mallType: string, productId: string, page: number) {
		return this.apiClient.get(`/style/detail/${mallType}/review/${productId}`, { params: { page: page } });
	}

	async getReviewCount(mallType: string, productId: string) {
		return this.apiClient.get(`/style/detail/review/${mallType}/trend`, { params: { productId: productId } });
	}
}
