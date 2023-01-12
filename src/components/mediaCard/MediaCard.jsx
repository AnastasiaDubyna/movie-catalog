import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { mediaTypes} from "../../constants";
import RatingCircle from "../ratingCircle/RatingCircle";
import { API_IMG_W154_URL } from "./constants";
import "./mediaCard.css";

const MediaCard = ({mediaData, withRating}) => {
    // Думаю, этой логики тут быть не должно, но насколько высоко её закинуть?
    const navigate = useNavigate();

    // В медиаДата не всегда прописан тип.......шо за жизнь
    // Обсудить
    const handleClick = () => {
        // navigate(`/${mediaData.type}/${mediaData.id}`);
        navigate(`/movie/${mediaData.id}`);
    };

    return (
        <div key={nanoid(4)} className="media-card" onClick={handleClick}>
            <img className="media-image" src={`${API_IMG_W154_URL}${mediaData.poster_path ||mediaData.profile_path}`} />
            {withRating ? <RatingCircle voteAverage={mediaData.vote_average} /> : null}
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
        type: PropTypes.oneOf(mediaTypes)
    }),
    withRating: PropTypes.bool
};

MediaCard.defaultProps = {
    withRating: false
};

export default MediaCard;