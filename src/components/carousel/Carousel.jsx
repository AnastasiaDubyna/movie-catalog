import { Tab, Tabs } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import RatingCircle from "../ratingCircle/RatingCircle";
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
                        className="carousel-tabs"
                        sx={{
                            ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
                                fontFamily: "'Source Sans Pro', sans-serif"
                            }, 
                            ".css-1aquho2-MuiTabs-indicator": {
                                display: "none"
                            },
                            ".css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                                backgroundColor: "rgb(3, 37, 65)",
                                color: "#1ed5a9"
                            }
                        }}
                    >
                        {
                            tabs.map(tab => <Tab className="carousel-tab" label={tab} value={tab} key={nanoid(3)} />)
                        }
                    </Tabs>
                </div>
                <div className="carousel-media">
                    {/* { снести ссылку в константы */
                        media.map(mediaData => (
                            <div key={nanoid(4)} className="media-card">
                                <div className="image-rating-container">
                                    <RatingCircle className="media-rating" percentage={Math.floor(mediaData.vote_average * 10)} />
                                    <img className="media-image" src={`https://image.tmdb.org/t/p/w154${mediaData.poster_path}`} />
                                </div>
                                <p className="media-title">{mediaData.title || mediaData.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
};
// масив чего?
Carousel.propTypes = {
    title: PropTypes.string, 
    tabs: PropTypes.array, 
    media: PropTypes.array,
    activeTab: PropTypes.string,
    onTabChange: PropTypes.func
};

export default Carousel;