import PropTypes from 'prop-types';
import Carousel from "../carousel/Carousel";
import { mediaTypes, trendingCarouselTabs } from "../../constants";

const TrendingCarousel = ({activeTab, onTabChange, media, onMediaCardClick}) => (
    <Carousel
        title="Trending"
        activeTab={activeTab}
        tabs={trendingCarouselTabs}
        onTabChange={onTabChange}
        media={media}
        onMediaCardClick={onMediaCardClick}
    />
);

TrendingCarousel.propTypes = {
    activeTab: PropTypes.oneOf(trendingCarouselTabs).isRequired,
    onTabChange: PropTypes.func.isRequired, 
    media: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        poster_path: PropTypes.string,
        profile_path: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        vote_average: PropTypes.number,
        media_type: PropTypes.oneOf(mediaTypes)
    })),
    onMediaCardClick: PropTypes.func
};

export default TrendingCarousel;