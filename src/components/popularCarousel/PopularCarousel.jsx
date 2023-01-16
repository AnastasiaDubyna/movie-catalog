import PropTypes from 'prop-types';
import Carousel from "../carousel/Carousel";
import { mediaTypes, popularCarouselTabs } from "../../constants";

const PopularCarousel = ({activeTab, onTabChange, media, mediaType, onMediaCardClick}) => (
    <Carousel
        title="What's Popular"
        activeTab={activeTab}
        tabs={popularCarouselTabs}
        onTabChange={onTabChange}
        media={media}
        mediaType={mediaType}
        onMediaCardClick={onMediaCardClick}
    />
);

PopularCarousel.propTypes = {
    activeTab: PropTypes.oneOf(popularCarouselTabs).isRequired,
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
    mediaType: PropTypes.oneOf(mediaTypes).isRequired,
    onMediaCardClick: PropTypes.func
};

export default PopularCarousel;