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

	async getProducts() {
		return this.apiClient.get('/products');
	}
}
