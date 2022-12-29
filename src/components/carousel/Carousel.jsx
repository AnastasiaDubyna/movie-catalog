import { Card, Tab, Tabs } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import "./carousel.css";


const Carousel = ({title, tabs, media, activeTab, onTabChange}) => {
    if (media) {
        return (
            <div className="carousel">
                <div className="carousel-title">{ title }</div>
                <Tabs
                    value={activeTab}
                    onChange={onTabChange}
                >
                    {
                        tabs.map(tab => <Tab label={tab} value={tab} key={nanoid(3)} />)
                    }
                </Tabs>
                <div className="carousel-media">
                    {
                        media.map(mediaData => (
                            <Card key={nanoid(4)}>{mediaData.title}</Card>
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