import { Avatar, Rating } from "@mui/material";
import moment from "moment/moment";
import PropTypes from "prop-types";
import ReadMoreReact from 'read-more-react';
import "./review.css";

const Review = ({review}) => {
    const {title, username, date, content, grade} = review;
    const defaultTitle = `Review by ${username}`;
    const usernameFirsLetter = username[0].toUpperCase();
    const datePrettier = moment(date).format('MMMM Do YYYY, h:mm a');

    return (
        <div className="review">
            <div className="review-header">
                <Avatar alt={username} src="">{usernameFirsLetter}</Avatar>
                <div>
                    <p className="review-title">{title || defaultTitle}</p>
                    <p>posted by {username} on {datePrettier}</p> 
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

Review.defaultProps = {
    review: {
        date: Date.now(),
        grade: 0,
        username: "Unknown user", 
        title: "",
        content: ""
    }
};

export default Review;