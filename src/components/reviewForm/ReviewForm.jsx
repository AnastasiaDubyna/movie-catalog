import PropTypes from "prop-types";
import { Button, Rating, TextField } from "@mui/material";
import "./reviewForm.css";

const ReviewForm = ({title, content, grade, onTextChange, onGradeChange, onSubmit}) => {
    return (
        <div className="review-form">
            <p className="review-form-title">Add Your Review</p>
            <Rating
                value={grade}
                onChange={onGradeChange}
            />
            <TextField 
                value={title}
                label="Title"
                id="title"
                onChange={onTextChange}
            />
            <TextField 
                value={content}
                label="Review"
                id="content"
                multiline
                minRows={10}
                onChange={onTextChange}
            />
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    );
};

ReviewForm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onGradeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ReviewForm;