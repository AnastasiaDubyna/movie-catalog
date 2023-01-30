import { Avatar, Rating } from "@mui/material";
import PropTypes from "prop-types";
import ReadMoreReact from 'read-more-react';
import "./review.css";

const Review = ({review}) => {
    if (review) {
        const {title, username, date, content, grade} = review;
        const defaultTitle = `Review by ${username}`;
        const usernameFirsLetter = username[0].toUpperCase();
        // Сделать дату более прилично выглядящей 
    
        return (
            <div className="review">
                <div className="review-header">
                    <Avatar alt={username} src="">{usernameFirsLetter}</Avatar>
                    <div>
                        <p className="review-title">{title || defaultTitle}</p>
                        <p>posted by {username} on {date}</p> 
                    </div>
                    <Rating className="review-header-rating" value={grade} readOnly />
                </div>
                <div className="review-content">
                    <ReadMoreReact 
                        text={content} 
                        min={400}
                        ideal={500}
                        max={600}
                    />
                </div>
            </div>
        );
    }

    return null;
};

Review.propTypes = {
    review: PropTypes.shape({
        username: PropTypes.string,
        date: PropTypes.date, 
        title: PropTypes.string,
        content: PropTypes.string,
        grade: PropTypes.number
    }).isRequired
};

export default Review;