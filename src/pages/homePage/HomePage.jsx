import PageBase from "../../components/pageBase/PageBase";
import PopularCarousel from "../../containers/popularCarousel/PopularCarousel";
import SearchBanner from "../../components/searchBanner/SearchBanner";
import TrendingCarousel from "../../containers/trendingCarousel/TrendingCarousel";
import "./homePage.css";

const HomePage = () => {
    return (
        <PageBase>
            <div className="home-page-content">
                <SearchBanner />
                <PopularCarousel />
                <TrendingCarousel />
            </div>
        </PageBase>
    )
}

export default HomePage;