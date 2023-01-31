import { CircularProgress } from '@mui/material';
import queryString from 'query-string'; 
import { useState } from 'react';
// import { useQueryClient } from 'react-query';
import { MOVIE } from '../../constants';
import MoviePage from '../../pages/moviePage/MoviePage';
import useFetchCredits from '../../query/useFetchCredits';
import useFetchData from '../../query/useFetchData';
import useFetchKeywords from '../../query/useFetchKeywords';
import useFetchReviews from '../../query/useFetchReviews';
import usePostReview from '../../query/usePostReview';


const MediaPage = () => {
    const {type, id} = queryString.parse(location.search);
    const {isLoading, error, data} = useFetchData(type, id);
    const {creditsData} = useFetchCredits(type, id);
    const [reviewFormTitle, setReviewFormTitle] = useState("");
    const [reviewFormContent, setReviewFormContent] = useState("");
    const [reviewFormGrade, setReviewFormGrade] = useState(0);
    const [reviewFormUsername, setReviewFormUsername] = useState("");
    const {mutate: postReview} = usePostReview();
    // const queryClient = useQueryClient();



    const handleReviewFormTextChange = ({target: {id, value}}) => {
        switch(id) {
            case "title":
                setReviewFormTitle(value);
                break;
            case "content": 
                setReviewFormContent(value);
                break;
            case "username":
                setReviewFormUsername(value);
                break;
            default:
                clearReviewFormInputs();
                break;
        }
    };

    const handleReviewFormGradeChange = (_, newValue) => {
        setReviewFormGrade(newValue);
    };

    const handleReviewFormSubmit = () => {
        const newReview = {
            title: reviewFormTitle,
            username: reviewFormUsername,
            content: reviewFormContent,
            grade: reviewFormGrade
        };
        
        postReview({id, newReview});
        clearReviewFormInputs();
    };

    const clearReviewFormInputs = () => {
        setReviewFormContent("");
        setReviewFormGrade(0);
        setReviewFormTitle("");
        setReviewFormUsername("");
    };

    // Повыносить наверх
    const getKeywords = () => {
        return useFetchKeywords(type, id);

    };

    const getReviews = () => {
        return useFetchReviews(id);
    };

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        return <h1>Error</h1>
    }

    if (data) {
        switch (type) {
            case MOVIE:
                return (
                    <MoviePage 
                        data={data} 
                        creditsData={creditsData}
                        getKeywords={getKeywords}
                        getReviews={getReviews}
                        reviewFormTitle={reviewFormTitle}
                        reviewFormContent={reviewFormContent}
                        reviewFormGrade={reviewFormGrade}
                        reviewFormUsername={reviewFormUsername}
                        onReviewFormTextChange={handleReviewFormTextChange}
                        onReviewFormGradeChange={handleReviewFormGradeChange}
                        onReviewFormSubmit={handleReviewFormSubmit}
                    />
                )
        }
    }
};

export default MediaPage;