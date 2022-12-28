import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/carousel/Carousel";
import PageBase from "../components/pageBase/PageBase";
import { trendingCarouselTabs } from "./constants";
import getTrendingMediaAction from "../redux/actions/getTrendingMediaAction";

const HomePage = () => {
    const [trendingCarouselActiveTab, setTrandingCarouselActiveTab] = useState(trendingCarouselTabs.DAY);
    let trendingCarouselMedia = useSelector(state => state.mediaReducer.trending.trendingCarouselActiveTab);
    const dispatch = useDispatch();

    const handleTrendingCarouselClick = ({target: {value}}) => {
        setTrandingCarouselActiveTab(value);
    };

    useEffect(() => {
        trendingCarouselMedia = useSelector(state => state.mediaReducer.trending.trendingCarouselActiveTab);
    }, [trendingCarouselActiveTab])

    useEffect(() => {
        if (!trendingCarouselMedia) {
            dispatch(getTrendingMediaAction(trendingCarouselActiveTab));
        }
    }, []);

    console.log(trendingCarouselMedia);

    return (
        <PageBase>
            <Carousel
                title="Trending"
                active={trendingCarouselActiveTab}
                buttons={[trendingCarouselTabs.DAY, trendingCarouselTabs.WEEK]}
                onClick={handleTrendingCarouselClick}
                media={trendingCarouselMedia}
            />
        </PageBase>
    )
}

export default HomePage;