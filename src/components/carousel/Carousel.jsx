import { Tab, Tabs } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { mediaTypes } from "../../constants";
import MediaCard from "../mediaCard/MediaCard";
import "./carousel.css";


const Carousel = ({ title, tabs, media, activeTab, onTabChange, mediaType, onMediaCardClick }) => {
    if (media) {
        return (
            <div className="carousel">
                <div className="carousel-header">
                    <div className="carousel-title">{ title }</div>
                    <Tabs
                        value={activeTab}
                        onChange={onTabChange}
                        id="carousel-tabs"
                    >
                        { tabs.map(tab => <Tab className="carousel-tab" label={tab} value={tab} key={nanoid(3)} />) }
                    </Tabs>
                </div>
                <div className="carousel-media">
                    { media.map(mediaData => (
                        <MediaCard 
                            mediaData={mediaType ? {...mediaData, media_type: mediaType} : mediaData} 
                            withRating={true} 
                            key={mediaData.id}
                            onClick={onMediaCardClick}
                        />
                    )) }
                </div>
            </div>
        )
    }
    return null;
    // допилить загрузку
};

Carousel.propTypes = {
    title: PropTypes.string.isRequired, 
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired, 
    activeTab: PropTypes.string.isRequired,
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
    mediaType: PropTypes.oneOf(mediaTypes),
    onMediaCardClick: PropTypes.func
};

export default Carousel;