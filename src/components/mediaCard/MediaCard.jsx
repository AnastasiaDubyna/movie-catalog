import PropTypes from 'prop-types';
import { mediaTypes} from "../../constants";
import RatingCircle from "../ratingCircle/RatingCircle";
import { API_IMG_W154_URL } from "./constants";
import "./mediaCard.css";
import FavouriteIcon from '../favouriteIcon/FavouriteIcon';

const MediaCard = ({mediaData, withRating, onClick}) => (
    <div className="media-card" onClick={() => onClick(mediaData.id, mediaData.media_type)}>
        <div className='media-image-container'>
            <FavouriteIcon mediaId={mediaData.id} />
            <img className="media-image" src={`${API_IMG_W154_URL}${mediaData.poster_path || mediaData.profile_path}`} />
        </div>
        {
            withRating && 
            <div className="media-card-rating">
                <RatingCircle voteAverage={mediaData.vote_average} />
            </div>
        }
        <p className="media-title">{mediaData.title || mediaData.name}</p>
    </div>
);


MediaCard.propTypes = {
    mediaData: PropTypes.shape({
        id:PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        profile_path: PropTypes.string,
        title: PropTypes.string,
        name: PropTypes.string,
        vote_average: PropTypes.number,
        media_type: PropTypes.oneOf(mediaTypes).isRequired
    }),
    withRating: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

MediaCard.defaultProps = {
    withRating: false
};

export default MediaCard;