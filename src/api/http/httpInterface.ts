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

	async getStyleDetail(mallType: string, styleId: string) {
		return this.apiClient.get(`/style/detail/${mallType}/${styleId}`);
	}

	// TODO: params 수정 필요, URL 수정 필요
	async getStyleReview(mallType: string, styleId: string, page: string, startDate?: string, rate?: string[]) {
		return this.apiClient.get(`/style/details/review/${mallType}`, {
			params: { page: page, productId: styleId, startDate: startDate, rate: rate },
		});
	}

	async getStyleReviewCount(mallType: string, styleId: string) {
		return this.apiClient.get(`/style/detail/review/${mallType}/trend`, { params: { styleId: styleId } });
	}
}
