// import Card from '@/components/Card';
import HomeContainer from '@/pages/home/_components/HomeContainer';
import PriceTrendContainer from '@/pages/home/_components/PriceTrendContainer';
import BrandTop10Container from '@/pages/home/_components/BrandTop10Container';
import HomeFooter from '@/pages/home/_components/HomeFooter';
import HomeFilter from '@/pages/home/_components/HomeFilter';
import ClusterContainer from './_components/ClusterContainer';

// TODO:  Filter 구현
// 필터에서는 URL 만 바꾸면 각 Fetch 함수에서 URL params 받아와서 fetching
// MallType, Category, Date 3개로 필터링
export default function Home() {
	return (
		<HomeContainer>
			<HomeFilter />
			<PriceTrendContainer />
			<BrandTop10Container />
			<ClusterContainer/>
			<HomeFooter />
		</HomeContainer>
	);
}
