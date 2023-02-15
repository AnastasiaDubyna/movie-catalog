import StarRateIcon from '@mui/icons-material/StarRate';
import PropTypes from 'prop-types';
import useFetchIsFavourite from "../../query/useFetchIsFavourite";

// Лучше было бы запросить у сервака список всех избранных и чекать находися ли в нем фильм 
// или для каждого фильма пинговать сервер? 
// и куда запихнуть функцию которая будет запрашивать эти данные т.к. они будут на нескольких страницах?
// могу ли я оставить ее внутри этого компонента?

const FavouriteIcon = ({mediaId}) => {
    const {isFavourite} = useFetchIsFavourite(mediaId);

    if (isFavourite) {
        return <StarRateIcon className='media-image-star favourite'/>
    }

    return null;
};

FavouriteIcon.propTypes = {
    mediaId: PropTypes.number, 
    onClick: PropTypes.func
};

export default FavouriteIcon;