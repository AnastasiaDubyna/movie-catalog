import { Tab, Tabs } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import MediaCard from "../mediaCard/MediaCard";
import "./carousel.css";


const Carousel = ({title, tabs, media, activeTab, onTabChange}) => {
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
                        {
                            tabs.map(tab => <Tab className="carousel-tab" label={tab} value={tab} key={nanoid(3)} />)
                        }
                    </Tabs>
                </div>
                <div className="carousel-media">
                    {
                        media.map(mediaData => <MediaCard mediaData={mediaData} withRating={true} key={nanoid(3)}/>)
                    }
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
    media: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
};

export default Carousel;