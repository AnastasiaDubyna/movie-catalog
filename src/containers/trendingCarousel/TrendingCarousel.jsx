import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTrendingMediaAction from "../../redux/actions/getTrendingMediaAction";
import Carousel from "../../components/carousel/Carousel";
import { DAY, trendingCarouselTabs } from "../../constants";

const TrendingCarousel = () => {
    const [activeTab, setActiveTab] = useState(DAY);
    const media = useSelector(state => state.mediaReducer.trending);
    const dispatch = useDispatch();

    const handleTabsChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        dispatch(getTrendingMediaAction(activeTab));
    }, [activeTab]);

    return (
        <Carousel
            title="Trending"
            activeTab={activeTab}
            tabs={trendingCarouselTabs}
            onTabChange={handleTabsChange}
            media={media}
        />
    )
};

export default TrendingCarousel;