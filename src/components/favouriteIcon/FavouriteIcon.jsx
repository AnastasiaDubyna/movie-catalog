import StarRateIcon from '@mui/icons-material/StarRate';
import PropTypes from 'prop-types';

const FavouriteIcon = ({isFavourite}) => {
    if (isFavourite) {
        return <StarRateIcon className='media-image-star favourite'/>
    }

    return null;
};

FavouriteIcon.propTypes = {
    mediaId: PropTypes.number, 
    onClick: PropTypes.func,
    isFavourite: PropTypes.bool
};

FavouriteIcon.defaultProps = {
    isFavourite: false
};

export default FavouriteIcon;