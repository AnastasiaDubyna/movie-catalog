import PropTypes from 'prop-types';
import Carousel from "../carousel/Carousel";
import { mediaTypes, popularCarouselTabs } from "../../constants";

const PopularCarousel = ({activeTab, onTabChange, media, mediaType, onMediaCardClick, getIsFavourite}) => (
    <Carousel
        title="What's Popular"
        activeTab={activeTab}
        tabs={popularCarouselTabs}
        onTabChange={onTabChange}
        media={media}
        mediaType={mediaType}
        onMediaCardClick={onMediaCardClick}
        getIsFavourite={getIsFavourite}
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
    onMediaCardClick: PropTypes.func.isRequired,
    getIsFavourite: PropTypes.func.isRequired
};

export default PopularCarousel;