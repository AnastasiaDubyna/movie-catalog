import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import RatingCircle from "../ratingCircle/RatingCircle";
import { API_IMG_W154_URL } from "./constants";
import "./mediaCard.css";

const MediaCard = ({mediaData, withRating}) => {
    return (
        <div key={nanoid(4)} className="media-card">
            <img className="media-image" src={`${API_IMG_W154_URL}${mediaData.poster_path ||mediaData.profile_path}`} />
            {withRating ? <RatingCircle voteAverage={mediaData.vote_average} /> : null}
            <p className="media-title">{mediaData.title || mediaData.name}</p>
        </div>
    )
};

MediaCard.propTypes = {
    mediaData: PropTypes.shape({
        poster_path: PropTypes.string,
        profile_path: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        vote_average: PropTypes.number
    }),
    withRating: PropTypes.bool
};

MediaCard.defaultProps = {
    withRating: false
};

export default MediaCard;