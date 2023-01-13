import PropTypes from 'prop-types';
import { API_IMG_ORIGINAL_URL, API_IMG_W300_URL } from "./constants";
import "./mediaBanner.css";

const MediaBanner = ({mediaData}) => {
    const {title, backdrop_path, poster_path, release_date, genres, runtime} = mediaData;
    const getGenresString = () => (
        genres.map(genre => genre.name).join(", ")
    );
    console.log(runtime);

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
        genres: PropTypes.arrayOf(PropTypes.object),
        release_date: PropTypes.string,
        title: PropTypes.string,
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string
    })
};

export default MediaBanner;