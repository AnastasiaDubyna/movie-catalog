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
import getFavouriteMediaIDsAction from "../../redux/actions/getFavouriteMediaIDsAction";

const HomePage = () => {
    const [popularCarouselActiveTab, setPopularCarouselActiveTab] = useState(STREAMING);
    const popularMedia = useSelector(state => state.mediaReducer.popular);
    const [trendingCarouselActiveTab, setTrendingCarouselActiveTab] = useState(DAY);
    const trendingMedia = useSelector(state => state.mediaReducer.trending);
    const favouriteMediaIDs = useSelector(state => state.mediaReducer.favourites);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePopularCarouselTabChange = (_, newValue) => {
        setPopularCarouselActiveTab(newValue);
    };
    const handleTrendingCarouselTabChange = (_, newValue) => {
        setTrendingCarouselActiveTab(newValue);
    };
    const handleMediaCardClick = (id, type) => {
        navigate(`/media?type=${type}&id=${id}`);
    };

    const getIsFavourite = (id) => {
        return favouriteMediaIDs.includes(id);
    };

    useEffect(() => {
        dispatch(getPopularMediaAction(popularCarouselActiveTab));
    }, [popularCarouselActiveTab]);
    useEffect(() => {
        dispatch(getTrendingMediaAction(trendingCarouselActiveTab));
    }, [trendingCarouselActiveTab]);
    useEffect(() => {
        dispatch(getFavouriteMediaIDsAction());
    }, []);

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
                    getIsFavourite={getIsFavourite}
                />
                <TrendingCarousel 
                    activeTab={trendingCarouselActiveTab}
                    onTabChange={handleTrendingCarouselTabChange}
                    onMediaCardClick={handleMediaCardClick}
                    media={trendingMedia}
                    getIsFavourite={getIsFavourite}
                />
            </div>
        </PageBase>
    )
}

export default HomePage;