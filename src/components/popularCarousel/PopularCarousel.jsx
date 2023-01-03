import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPopularMediaAction from "../../redux/actions/getPopularMediaAction";
import Carousel from "../carousel/Carousel";
import { popularCarouselTabs } from "./constants";

const PopularCarousel = () => {
    const {STREAMING, FOR_RENT, IN_THEATERS, ON_TV} = popularCarouselTabs;
    const [activeTab, setActiveTab] = useState(popularCarouselTabs.STREAMING);
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
            tabs={[STREAMING, FOR_RENT, IN_THEATERS, ON_TV]} //<----------обсудить
            onTabChange={handleTabsChange}
            media={media}
        />
    );
};

export default PopularCarousel;