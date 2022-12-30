import { Tab, Tabs } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
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
                    >
                        {
                            tabs.map(tab => <Tab label={tab} value={tab} key={nanoid(3)} />)
                        }
                    </Tabs>
                </div>
                <div className="carousel-media">
                    {
                        media.map(mediaData => (
                            <div key={nanoid(4)} className="media-card">
                                <img className="media-image" src={`https://image.tmdb.org/t/p/w154${mediaData.poster_path}`} />
                                <p className="media-title">{mediaData.title || mediaData.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
};

Carousel.propTypes = {
    title: PropTypes.string, 
    tabs: PropTypes.array, 
    media: PropTypes.array,
    activeTab: PropTypes.string,
    onTabChange: PropTypes.func
};

export default Carousel;