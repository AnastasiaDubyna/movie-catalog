import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { API_IMG_ORIGINAL_URL, API_IMG_W300_URL } from "../../constants";
import IconPopover from '../iconPopover/IconPopover';
import RatingCircle from "../ratingCircle/RatingCircle";
import { iconPopovers } from './constants';
import "./mediaBanner.css";

const MediaBanner = ({mediaData}) => {
    const {title, backdrop_path, poster_path, release_date, genres, runtime} = mediaData;
    const getGenresString = () => (
        genres.map(genre => genre.name).join(", ")
    );
    console.log(mediaData);
    return (
        <div className="media-banner">
            <div className="media-banner-content">
                <img src={`${API_IMG_W300_URL}${poster_path}`} className="media-banner-poster" />
                <div className="media-banner-overview">
                    <h1 className="media-banner-title">{title} <span>({release_date.substring(0, 4)})</span></h1>
                    <div className="media-banner-subtitle">
                        <p>{release_date}</p>
                        <p>|</p> 
                        <p>{getGenresString()}</p>
                        <p>|</p>
                        <p>{runtime} min</p>
                    </div>
                    <div className="media-banner-icons">
                        <div className="media-banner-rating">
                            <RatingCircle
                                voteAverage={mediaData.vote_average}
                            />
                        </div>
                        <p>User Score</p>
                        {iconPopovers.map((iconData => 
                            <IconPopover
                                icon={iconData.icon}
                                text={iconData.text}
                                key={nanoid()}
                            />
                        ))}
                    </div>
                    <p className="media-banner-tagline">{mediaData.tagline}</p>
                    <div className="media-banner-description">
                        <h2>Overview</h2>
                        <p>{mediaData.overview}</p>
                    </div>
                </div>
            </div>
            <div className="media-banner-backdrop">
                <img src={`${API_IMG_ORIGINAL_URL}${backdrop_path}`} />
            </div>
        </div>
    )
};

MediaBanner.propTypes = {
    mediaData: PropTypes.shape({
        runtime: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired, 
            name: PropTypes.string.isRequired
        })),
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        tagline: PropTypes.string,
        overview: PropTypes.string
    })
};

MediaBanner.defaultProps = {
    mediaData: {
        tagline: " ",
        overview: " "
    }
};

export default MediaBanner;