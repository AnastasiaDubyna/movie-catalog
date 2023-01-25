import { Button } from "@mui/material";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useState } from "react";
import Review from "../review/Review";
import "./reviewsSection.css";

const ReviewsSection = ({reviews}) => {
    const [showAllReviews, setShowAllReviews] = useState(false);
    const count = reviews.length;
    const handleClick = () => {
        setShowAllReviews(true);
    };

    return (
        <div className="reviews-section">
            <p className="reviews-section-title"><span>Reviews</span> ({count})</p>
            {
                showAllReviews
                ? reviews.map((review => <Review review={review} key={nanoid()} />))
                : <>
                    <Review review={reviews[0]}/>
                    <Button onClick={handleClick}>Show All Reviews</Button>
                </>        
            }
        </div>
    )
};

ReviewsSection.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        date: PropTypes.date, 
        content: PropTypes.string,
        title: PropTypes.string
    })).isRequired
}

export default ReviewsSection;