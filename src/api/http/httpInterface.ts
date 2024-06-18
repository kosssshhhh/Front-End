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

	async getStyles(params: any) {
		return this.apiClient.get('/style/filter', { params: params });
	}

	async getCategory(mallTypeId: string) {
		return this.apiClient.get(`style/filter/category/${mallTypeId}`);
	}

	async getBrand(mallTypeId: string) {
		return this.apiClient.get(`/style/filter/brand/${mallTypeId}`);
	}

	async getStyleDetail(mallTypeId: string, styleId: string) {
		return this.apiClient.get(`/style/detail/${mallTypeId}/${styleId}`);
	}

	// TODO: params 수정 필요, URL 수정 필요
	async getStyleReview(mallTypeId: string, styleId: string, page: string, startDate?: string, rate?: string[]) {
		// 페이지 번호를 1 빼서 설정
		const adjustedPage = (parseInt(page, 10) - 1).toString();

		const params = new URLSearchParams();
		params.append('page', adjustedPage);
		params.append('styleId', styleId);
		if (startDate) {
			params.append('startDate', startDate);
		}

		if (rate) {
			rate.forEach((r) => params.append('rate', r));
		}

		return this.apiClient.get(`/style/detail/review/${mallTypeId}`, { params });
	}

	async getStyleReviewCount(mallTypeId: string, styleId: string) {
		return this.apiClient.get(`/style/detail/review/${mallTypeId}/trend`, { params: { styleId: styleId } });
	}
}
