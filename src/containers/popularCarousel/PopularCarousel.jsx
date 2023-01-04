import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopularMediaAction from "../../redux/actions/getPopularMediaAction";
import Carousel from "../../components/carousel/Carousel";
import { popularCarouselTabs, STREAMING } from "../../constants";

const PopularCarousel = () => {
    const [activeTab, setActiveTab] = useState(STREAMING);
    const media = useSelector(state => state.mediaReducer.popular);
    const dispatch = useDispatch();

    const handleTabsChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        dispatch(getPopularMediaAction(activeTab));
    }, [activeTab]);

    return (
        <Carousel
            title="What's Popular"
            activeTab={activeTab}
            tabs={popularCarouselTabs}
            onTabChange={handleTabsChange}
            media={media}
        />
    );
};

export default PopularCarousel;