import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';
import "./ratingCircle.css";


const RatingCircle = ({voteAverage}) => {
    const percentage = Math.floor(voteAverage * 10);
    const getColorClass = () => {
        if (percentage < 40) return "low";
        if (percentage >= 70) return "high";
        return "moderate" 
    };

    return (
        <CircularProgressbar 
            className={getColorClass()} 
            value={percentage} 
            text={`${percentage}%`} 
        />
    );
};

RatingCircle.propTypes = {
    voteAverage: PropTypes.number
};

RatingCircle.defaultProps = {
    voteAverage: 0
};

export default RatingCircle;