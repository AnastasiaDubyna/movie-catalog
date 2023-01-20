import PropTypes from "prop-types";
import "./review.css";

const Review = ({review}) => {
    console.log(review);
    const {title, username, date, content} = review;
    // Сделать дату более прилично выглядящей 
    return (
        <div className="review">
            <div className="review-header">
                <p className="review-title">{title}</p>
                <p>posted by {username} on {date}</p> 
            </div>
            <div className="review-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.shape({
        username: PropTypes.string,
        date: PropTypes.date, 
        title: PropTypes.string,
        content: PropTypes.string
    }).isRequired
};

export default Review;