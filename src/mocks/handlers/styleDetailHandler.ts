import { http, HttpResponse } from 'msw';

const styleDetailHandler = [
	http.get('/style/detail/:mallType/:productId', () => {
		return HttpResponse.json({
			variable: {
				variableId: 128,
				productInfo:
					'무릎까지 오는 길이감과 여유롭게 떨어지는 실루엣으로 캐주얼한 매력이 돋보이는 버뮤다 스타일의 데님 쇼츠입니다. 밝은 컬러감과 섬세한 워싱이 눈길을 끌며, 허리 라인에 밴딩과 드로우스트링이 있어 편안한 착용감을 전해줍니다. 간결한 디자인으로 어디에나 두루 어울리며, 같은 소재로 제작한 데님 자켓과 함께 스타일링 하기에도 좋습니다.',
				fittingInfo:
					'[WIDE FIT] 힙에서부터 밑단까지 여유있는 트렌디한 실루엣으로 캐쥬얼한 라인187cm, 105 사이즈 모델이 86 사이즈 착용',
				additionalInfo: '"100% 면 소재", "허리 라인에 밴딩과 드로우스트링", "양옆과 힙에 포켓"',
			},
			basicDetail: {
				productId: 'TH2E3NPC588N',
				mallType: 'HANDSOME',
				brand: 'TIME HOMME',
				discountedPrice: 295000,
				fixedPrice: 295000,
				monetaryUnit: 'KRW',
				crawledDate: '2024-06-02T15:00:00.000+00:00',
				imageList: [
					{
						imageId: 780,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 0,
					},
					{
						imageId: 781,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 1,
					},
					{
						imageId: 782,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 2,
					},
					{
						imageId: 783,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 3,
					},
					{
						imageId: 784,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 4,
					},
					{
						imageId: 785,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 5,
					},
					{
						imageId: 786,
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mzbMHg0UEH2WcUQkPcx4YATDMX_fWw-SOA&s',
						sequence: 6,
					},
				],
				skuAttribute: {
					sizes: '86',
					colors: 'LIGHT BLUE',
				},
				exposureIndexList: [
					{
						productId: 'TH2E3NPC588N',
						mallType: 'HANDSOME',
						exposureIndex: 6.0,
						category: {
							categoryId: 1199,
							orgCategoryId: '5012',
							mallType: 'HANDSOME',
							name: '데님',
						},
					},
				],
			},
		});
	}),
];

export default styleDetailHandler;
