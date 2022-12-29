import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/carousel/Carousel";
import PageBase from "../components/pageBase/PageBase";
import { trendingCarouselTabs } from "./constants";
import getTrendingMediaAction from "../redux/actions/getTrendingMediaAction";

const HomePage = () => {
    const [trendingCarouselActiveTab, setTrandingCarouselActiveTab] = useState(trendingCarouselTabs.DAY);
    const trendingCarouselMedia = useSelector(state => state.mediaReducer.trending);
    const dispatch = useDispatch();

    const handleTrendingTabsChange = (event, newValue) => {
        setTrandingCarouselActiveTab(newValue);
    };

    useEffect(() => {
        dispatch(getTrendingMediaAction(trendingCarouselActiveTab));
    }, [trendingCarouselActiveTab]);

    console.log(trendingCarouselMedia);

    return (
        <PageBase>
            <Carousel
                title="Trending"
                activeTab={trendingCarouselActiveTab}
                tabs={[trendingCarouselTabs.DAY, trendingCarouselTabs.WEEK]}
                onTabChange={handleTrendingTabsChange}
                media={trendingCarouselMedia}
            />
        </PageBase>
    )
}

export default HomePage;