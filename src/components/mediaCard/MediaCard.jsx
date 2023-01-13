import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { mediaTypes} from "../../constants";
import RatingCircle from "../ratingCircle/RatingCircle";
import { API_IMG_W154_URL } from "./constants";
import "./mediaCard.css";

const MediaCard = ({mediaData, withRating, onClick}) => {
    return (
        <div key={nanoid(4)} className="media-card" onClick={() => onClick(mediaData.id, mediaData.media_type)}>
            <img className="media-image" src={`${API_IMG_W154_URL}${mediaData.poster_path ||mediaData.profile_path}`} />
            {withRating && <RatingCircle voteAverage={mediaData.vote_average} />}
            <p className="media-title">{mediaData.title || mediaData.name}</p>
        </div>
    )
};

MediaCard.propTypes = {
    mediaData: PropTypes.shape({
        id:PropTypes.number,
        poster_path: PropTypes.string,
        profile_path: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        vote_average: PropTypes.number,
        media_type: PropTypes.oneOf(mediaTypes)
    }),
    withRating: PropTypes.bool,
    onClick: PropTypes.func
};

MediaCard.defaultProps = {
    withRating: false
};

export default MediaCard;