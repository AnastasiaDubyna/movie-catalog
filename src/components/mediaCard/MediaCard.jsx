import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import RatingCircle from "../ratingCircle/RatingCircle";
import { API_IMG_W154_URL } from "./constants";
import "./mediaCard.css";

const MediaCard = ({mediaData}) => {
    return (
        <div key={nanoid(4)} className="media-card">
            <div className="image-rating-container">
                <RatingCircle className="media-rating" voteAverage={mediaData.vote_average} />
                <img className="media-image" src={`${API_IMG_W154_URL}${mediaData.poster_path ||mediaData.profile_path}`} />
            </div>
            <p className="media-title">{mediaData.title || mediaData.name}</p>
        </div>
    )
};

MediaCard.propTypes = {
    mediaData: PropTypes.object.isRequired
}

export default MediaCard;