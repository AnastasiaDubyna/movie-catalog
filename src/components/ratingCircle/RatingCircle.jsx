import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';
import "./ratingCircle.css";


const RatingCircle = ({percentage}) => {
    const getColorClass = () => {
        if (percentage < 40) return "low";
        if (percentage >= 70) return "high";
        return "moderate" 
    }

    return (
        <CircularProgressbar className={getColorClass()} value={percentage} text={`${percentage}%`} />
    )
};

RatingCircle.propTypes = {
    percentage: PropTypes.number
};

RatingCircle.defaultProps = {
    percentage: 0
};

export default RatingCircle;