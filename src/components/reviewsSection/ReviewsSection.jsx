import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import Review from "../review/Review";
import "./reviewsSection.css";

const ReviewsSection = ({reviews}) => {
    return (
        <div className="reviews-section">
            {reviews.map((review => <Review review={review} key={nanoid()} />))}
        </div>
    );
};

ReviewsSection.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        date: PropTypes.date, 
        content: PropTypes.string,
        title: PropTypes.string
    })).isRequired
};

export default ReviewsSection;