import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageBase from "../../components/pageBase/PageBase";
import { DAY, popularMediaTypes, STREAMING } from "../../constants";
import PopularCarousel from "../../components/popularCarousel/PopularCarousel";
import SearchBanner from "../../containers/searchBanner/SearchBanner";
import TrendingCarousel from "../../components/trendingCarousel/TrendingCarousel";
import getPopularMediaAction from "../../redux/actions/getPopularMediaAction";
import "./homePage.css";
import getTrendingMediaAction from "../../redux/actions/getTrendingMediaAction";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [popularCarouselActiveTab, setPopularCarouselActiveTab] = useState(STREAMING);
    const popularMedia = useSelector(state => state.mediaReducer.popular);
    const [trendingCarouselActiveTab, setTrendingCarouselActiveTab] = useState(DAY);
    const trendingMedia = useSelector(state => state.mediaReducer.trending);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePopularCarouselTabChange = (event, newValue) => {
        setPopularCarouselActiveTab(newValue);
    };
    const handleTrendingCarouselTabChange = (event, newValue) => {
        setTrendingCarouselActiveTab(newValue);
    };
    const handleMediaCardClick = (id, type) => {
        navigate(`/media?type=${type}&id=${id}`);
    };

    useEffect(() => {
        dispatch(getPopularMediaAction(popularCarouselActiveTab));
    }, [popularCarouselActiveTab]);
    useEffect(() => {
        dispatch(getTrendingMediaAction(trendingCarouselActiveTab));
    }, [trendingCarouselActiveTab]);

    return (
        <PageBase>
            <div className="home-page-content">
                <SearchBanner />
                <PopularCarousel 
                    activeTab={popularCarouselActiveTab}
                    onTabChange={handlePopularCarouselTabChange}
                    media={popularMedia}
                    onMediaCardClick={handleMediaCardClick}
                    mediaType={popularMediaTypes[popularCarouselActiveTab]}
                />
                <TrendingCarousel 
                    activeTab={trendingCarouselActiveTab}
                    onTabChange={handleTrendingCarouselTabChange}
                    onMediaCardClick={handleMediaCardClick}
                    media={trendingMedia}
                />
            </div>
        </PageBase>
    )
}

export default HomePage;