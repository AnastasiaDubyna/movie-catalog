import PageBase from "../../components/pageBase/PageBase";
import PopularCarousel from "../../components/popularCarousel/PopularCarousel";
import TrendingCarousel from "../../components/trendingCarousel/TrendingCarousel";
import "./homePage.css";

const HomePage = () => {
    return (
        <PageBase>
            <div className="home-page-content">
                <PopularCarousel />
                <TrendingCarousel />
            </div>
        </PageBase>
    )
}

export default HomePage;